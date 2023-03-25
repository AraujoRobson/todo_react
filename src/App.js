import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [lista, setLista] = useState([])
  const [novoItem, setNovoItem] = useState()

  useEffect(() => {
    setLista(["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4"])
  }, [])

  function adicionarNovoItem() {
    if(novoItem.length <= 0){
      alert("Digita algo no campo 'Tarefa'")
      return
    }

    let itemIndex = lista.indexOf(novoItem)
    if (itemIndex >= 0){
      alert("Tarefa já existente.")
      return
    }

    setLista([...lista, novoItem])
    setNovoItem("")
  }

  function deletarItem(index) {
    const tmpArray = [...lista]
    tmpArray.splice(index, 1)

    setLista(tmpArray)
  }

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>

      <div className='new-item'>
        <input placeholder='Tarefa' value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text" />
        <button onClick={adicionarNovoItem}>Adicionar</button>
      </div>

      <ul className='todo-list'>
        {lista.map((item, index) => (
          <li key={index} className='todo-item'>
            {item}
            <button onClick={() => deletarItem(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
