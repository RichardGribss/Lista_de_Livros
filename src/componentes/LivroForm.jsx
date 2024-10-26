import { useState } from "react"
import "./LivroForm.css"

function LivroForm({addLivro}) {
    const [titulo, setTitulo] = useState("")
    const [capa, setCapa] = useState("")

    const enviar = (e) => {
        e.preventDefault()
       if(!titulo || !capa) return;
       addLivro(titulo,capa)

       setTitulo("")
       setCapa("")
      
    }

  return (
    <div className="livro-form">
        <h2>Adicionar Livro</h2>
        <form onSubmit={enviar}>
            <input type="text" placeholder='Digite o Título' value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
            <input type="text" placeholder='Link da Capa' value={capa} onChange={(e) => setCapa(e.target.value)}/>
            <button type="submit" className="enviar" >Criar</button>
        </form>
    </div>
  )
}

export default LivroForm