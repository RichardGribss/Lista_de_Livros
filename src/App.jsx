import { useState } from 'react'
import Conteudo from './componentes/Conteudo';
import "./App.css";
import LivroForm from './componentes/LivroForm';
import Search from './componentes/Search';
import Filter from './componentes/Filter';

function App() {
  const [livros, setLivros] = useState([
    {
      id: 1,
      titulo: "O Apanhador no Campo de Centeio",
      capa: null,
      lido: true
    },
    {
      id: 2,
      titulo: "Laranja Mecânica",
      capa: null,
      lido: true
    },
    {
      id: 3,
      titulo: "Carrie a Estranha",
      capa: null,
      lido: true
    },
    {
      id: 4,
      titulo: "Misto Quente",
      capa: null,
      lido: true
    }
  ])

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")

  const addLivro = (titulo, capa) => {

    const newLivros = [...livros, {
      id: Math.floor(Math.random() * 10000),
      titulo,
      capa,
      lido: false
    }
    ]
    setLivros(newLivros)
  }

  const removeLivro = (id) => {
    const newLivros = [...livros]
    const filtroLivro = newLivros.filter(livro =>
      livro.id !== id ? livro : null
    )

    setLivros(filtroLivro)
  }

  const livroLido = (id) => {
    const newLivros = [...livros]
    newLivros.map((livro) => livro.id === id ? livro.lido = !livro.lido : livro)
    setLivros(newLivros)
  }

  return <div className="app">
    <h1>Livros</h1>
    <Search search={search} setSearch={setSearch} />
    <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
    <div className="list">
      {livros.filter((livro) => filter === "All" ? true : filter === "lido" ? livro.lido : !livro.lido).filter((livro) => livro.titulo.toLowerCase().includes(search.toLowerCase())
      ).sort((a, b) => sort === "Asc" ? a.titulo.localeCompare(b.titulo) : b.titulo.localeCompare(a.titulo) ).map((livro) => (
        <Conteudo key={livro.id} livro={livro} removeLivro={removeLivro} livroLido={livroLido} />
      ))}
    </div>
    <LivroForm addLivro={addLivro} />
  </div>;
}

export default App
