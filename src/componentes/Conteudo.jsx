import React from 'react'
import "./Conteudo.css"

const Conteudo = ({livro, removeLivro, livroLido}) => {
  return (
    <div className="livro">
            <div className="conteudo">
              <h3>{livro.titulo}</h3>
              {livro.lido ? (
                <button className="lido" onClick={() => livroLido(livro.id)}>Lido</button>
              ) : (
                <button className="nolido" onClick={() => livroLido(livro.id)}>Não lido</button>
              )}
            </div>
            <button className='remove' onClick={() => removeLivro(livro.id)}>X</button>
          </div>
  )
}

export default Conteudo
