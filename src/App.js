import { useState } from 'react';
import './App.css';

function App() {
  const [lista, setLista] = useState(["Tarefa1", "Tarefa2"])
  const [novoItem, setNovoItem] = useState()

  function adicionarNovoItem(){
    setLista([...lista, novoItem])
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
