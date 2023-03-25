import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [lista, setLista] = useState([])
  const [novoItem, setNovoItem] = useState()

  useEffect(() => {
    setLista(["Tarefa1", "Tarefa2", "Tarefa3", "Tarefa4"])
  }, [])

  function adicionarNovoItem(){
    setLista([...lista, novoItem])
    setNovoItem("")
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <input value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text" />
      <button onClick={adicionarNovoItem}>Adicionar</button>

      <ul>
        {lista.map(item => <li>{item}</li>)}
      </ul>
    </>
  );
}

export default App;
