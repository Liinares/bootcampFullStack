import { useState } from "react"

const Antecdotes = () => {
    function obtenerNumeroAleatorio() {
        // Math.random() devuelve un número decimal entre 0 (inclusive) y 1 (exclusivo)
        const numeroDecimal = Math.random();
      
        // Escalamos el número al rango deseado (0 a 6) y redondeamos al entero más cercano
        const numeroAleatorio = Math.floor(numeroDecimal * 7);
      
        return numeroAleatorio;
    }

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
      ]
    
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(7).fill(0))

    const handleVote = () => {
        const copy = [...votes]
        copy[selected]+=1
        setVotes(copy)
    }

    // Encuentra el índice de la anécdota con más votos
    const indiceMayorVotos = votes.reduce((indiceMayor, elementoActual, indiceActual, arreglo) => {
        return elementoActual > arreglo[indiceMayor] ? indiceActual : indiceMayor;
    }, 0);

    return(
        <div>
            <h1>Anecdotes</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <button onClick={() => {setSelected(obtenerNumeroAleatorio())}}> Next anecdote</button>
            <button onClick={handleVote}> Vote </button>

            <br></br>

            <h1>Anecdote with most votes</h1>
            <p1>{anecdotes[indiceMayorVotos]}</p1>
        </div>
    )
}

export default Antecdotes;