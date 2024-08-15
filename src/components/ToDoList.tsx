import { useState } from "react";

interface Tarefa {
    id: number
    title: string
}

const ToDoList = () => {

    const [tarefas, setTarefas] = useState<Array<Tarefa>>([])

    const adicionarTarefa = (index: number) => {
        setTarefas([...tarefas, {
            title: 'teste ' + index,
            id: index
        }])
        console.log(tarefas)
    }

    const removerTarefa = (id: number) => {
        const newTarefas = tarefas.filter((tarefa) => tarefa.id != id)
        setTarefas(newTarefas)
    }

    console.log(tarefas)

    return (
        <>
            <h1> Lista de Tarefas </h1>
            {tarefas.map((tarefa, index) => (
                <div key={index}>
                    <p>Tarefa: {tarefa.title}</p>
                    <button onClick={() => removerTarefa(index)}> <i className="fa fa-trash"></i> Remover</button>
                </div>
            ))}
            <button onClick={() => adicionarTarefa(tarefas.length)}>
                Adicionar tarefa
            </button>
        </>
    )
}

export default ToDoList;