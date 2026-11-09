import csvText from './videos_youtube_organizacao.csv?raw'

// Ordem das abas na página de vídeos.
const MENU_ORDER = ['Cursinho', 'Resolução de Provas', 'Além do Cursinho', 'Ensino Fundamental II']

// Parser de CSV (RFC 4180): campos entre aspas, aspas escapadas ("") e quebras de linha.
function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let quoted = false
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') { field += '"'; i++ }
      else if (ch === '"') quoted = false
      else field += ch
    } else if (ch === '"') quoted = true
    else if (ch === ',') { row.push(field); field = '' }
    else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++
      row.push(field); rows.push(row); row = []; field = ''
    } else field += ch
  }
  if (field || row.length) { row.push(field); rows.push(row) }
  const [header, ...body] = rows.filter((r) => r.some((c) => c.trim()))
  return body.map((r) => Object.fromEntries(header.map((h, i) => [h.trim(), (r[i] ?? '').trim()])))
}

// Agrupa as aulas em menu → disciplina, preservando a ordem do CSV.
function buildSections(records) {
  const menus = new Map()
  for (const r of records) {
    if (!r.youtube_id) continue
    if (!menus.has(r.menu)) menus.set(r.menu, new Map())
    const subjects = menus.get(r.menu)
    if (!subjects.has(r.disciplina)) subjects.set(r.disciplina, { name: r.disciplina, area: r.area, lessons: [] })
    subjects.get(r.disciplina).lessons.push({
      id: r.video_id,
      title: r.aula,
      url: r.youtube_url || `https://www.youtube.com/watch?v=${r.youtube_id}`,
    })
  }
  const rank = (m) => (MENU_ORDER.includes(m) ? MENU_ORDER.indexOf(m) : MENU_ORDER.length)
  return [...menus.entries()]
    .sort(([a], [b]) => rank(a) - rank(b))
    .map(([menu, subjects]) => {
      const list = [...subjects.values()]
      return { menu, subjects: list, count: list.reduce((n, s) => n + s.lessons.length, 0) }
    })
}

export const sections = buildSections(parseCsv(csvText))

export const totalVideos = sections.reduce((n, s) => n + s.count, 0)

export function countFor(menu) {
  return sections.find((s) => s.menu === menu)?.count ?? 0
}
