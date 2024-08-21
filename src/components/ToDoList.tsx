import { useState } from "react";
import './ToDoList.css';

interface Tarefa {
    id: number
    name: string
}

const ToDoList = () => {

    const [tarefas, setTarefas] = useState<Array<Tarefa>>([])
    const [data, setTarefa] = useState<string>('');

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTarefa(e.target.value)
    }

    const adicionarTarefa = (index: number, title: string) => {
        setTarefas([...tarefas, {
            name: title,
            id: index
        }])
        console.log(tarefas)
    }

    const removerTarefa = (id: number) => {
        const newTarefas = tarefas.filter((tarefa) => tarefa.id != id)
        setTarefas(newTarefas)
    }

    return (
        <>
            <h1> Lista de Tarefas </h1>
            {tarefas.map((tarefa, index) => (
                <div key={index}>
                    <p>Tarefa: {tarefa.name}</p>
                    <button className="btn-delete" onClick={() => removerTarefa(index)}> <i></i> Remover</button>
                </div>
            ))}
            <br></br>
            <label>
                <input type='text' id='tarefa' name='tarefa' value={data} onChange={inputChange} /><br />
            </label>
            <br></br>
            <button className="btn-add" onClick={() => adicionarTarefa(tarefas.length, data)}>
                Adicionar tarefa
            </button>
        </>
    )
}

export default ToDoList;