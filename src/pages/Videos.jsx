import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { sections, totalVideos } from '../data/videos.js'

const MAX_RESULTS = 80

const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

function LessonList({ lessons }) {
  return (
    <ol className="lessons">
      {lessons.map((l) => (
        <li key={l.id}>
          <a href={l.url} target="_blank" rel="noopener noreferrer" aria-label={`Assistir no YouTube: ${l.title}`} className="lesson">
            <span aria-hidden="true" className="lesson__play">
              <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 1.5v11l9-5.5z" fill="#FFFFFF" /></svg>
            </span>
            <span className="lesson__text">
              <span className="lesson__title">{l.title}</span>
              <span className="lesson__meta">{l.meta}</span>
            </span>
          </a>
        </li>
      ))}
    </ol>
  )
}

export default function Videos() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')

  const menuIndex = Math.max(0, sections.findIndex((s) => s.menu === params.get('menu')))
  const subjectIndex = Math.min(Number(params.get('disciplina')) || 0, sections[menuIndex].subjects.length - 1)
  const section = sections[menuIndex]
  const subject = section.subjects[subjectIndex]

  const q = norm(query.trim())
  const searching = q.length > 1

  const results = useMemo(() => {
    if (!searching) return null
    const found = []
    for (const s of sections) {
      for (const sub of s.subjects) {
        const subjectMatch = norm(sub.name).includes(q)
        for (const l of sub.lessons) {
          if (subjectMatch || norm(l.title).includes(q)) found.push({ ...l, meta: `${s.menu} · ${sub.name}` })
        }
      }
    }
    return found
  }, [q, searching])

  const pickMenu = (i) => {
    setQuery('')
    setParams({ menu: sections[i].menu })
  }
  const pickSubject = (i) => setParams({ menu: section.menu, disciplina: String(i) })

  const lessons = searching
    ? results.slice(0, MAX_RESULTS)
    : subject.lessons.map((l, i) => ({ ...l, meta: `Vídeo ${i + 1}` }))

  const heading = searching
    ? `${results.length} resultado${results.length === 1 ? '' : 's'} para “${query.trim()}”`
    : subject.name

  return (
    <div className="videos">
      <section className="videos__hero">
        <div className="container videos__hero-inner">
          <h1>Todas as aulas, de graça</h1>
          <p>{totalVideos.toLocaleString('pt-BR')} vídeos no YouTube, abertos a todos e sem cadastro.</p>
          <div className="field">
            <label htmlFor="busca">Buscar aula</label>
            <input
              id="busca"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ex.: função afim, Revolução Francesa"
            />
          </div>
        </div>
      </section>

      <div className="container videos__body">
        <div className="menus">
          {sections.map((s, i) => {
            const on = !searching && i === menuIndex
            return (
              <button key={s.menu} type="button" aria-pressed={on} className={on ? 'pill pill--on' : 'pill'} onClick={() => pickMenu(i)}>
                {s.menu} ({s.count})
              </button>
            )
          })}
        </div>

        <div className="videos__layout">
          {!searching && (
            <>
              <div className="subjects-select">
                <label htmlFor="disciplina">Disciplina</label>
                <select id="disciplina" value={subjectIndex} onChange={(e) => pickSubject(Number(e.target.value))}>
                  {section.subjects.map((s, i) => (
                    <option key={s.name} value={i}>{s.name} ({s.lessons.length})</option>
                  ))}
                </select>
              </div>
              <nav className="subjects" aria-label="Disciplinas">
                {section.subjects.map((s, i) => (
                  <button key={s.name} type="button" aria-pressed={i === subjectIndex} className={i === subjectIndex ? 'subject subject--on' : 'subject'} onClick={() => pickSubject(i)}>
                    <span>{s.name}</span>
                    <span className="subject__count">{s.lessons.length}</span>
                  </button>
                ))}
              </nav>
            </>
          )}

          <div className="videos__main">
            <h2>{heading}</h2>
            {searching && results.length === 0 && <p>Nenhuma aula encontrada. Tente outra palavra.</p>}
            <LessonList lessons={lessons} />
            {searching && results.length > MAX_RESULTS && (
              <p className="videos__note">Mostrando os primeiros {MAX_RESULTS} resultados. Refine a busca para ver outros.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
