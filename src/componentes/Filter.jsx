const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div className="filtro-status">
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="lido">Lido</option>
                    <option value="nolido">Não Lido</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button className="enviar" onClick={() => setSort("Asc")} >Asc</button>
                <button className="enviar" onClick={() => setSort("Desc")} >Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter
