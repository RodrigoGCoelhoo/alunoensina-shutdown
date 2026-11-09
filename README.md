# Aluno Ensina — site de encerramento

Site em React (Vite + React Router) com três páginas: **Início**, **Sobre nós** e **Vídeos**.

## Rodando

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera dist/
npm run preview  # serve o build
```

## Vídeos

A página `/videos` lê `src/data/videos_youtube_organizacao.csv` (colunas
`video_id, youtube_id, youtube_url, menu, area, disciplina, aula_id, aula`) e agrupa as
aulas por **menu → disciplina**, linkando cada aula para o `youtube_url` correspondente.
Para atualizar a lista, basta substituir o CSV e gerar o build de novo.

Links diretos: `/videos?menu=Cursinho&disciplina=2`.

> Como o app usa `BrowserRouter`, o servidor de hospedagem precisa redirecionar rotas
> desconhecidas para `index.html` (fallback de SPA).
