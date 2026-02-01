'use client'
import {useState} from 'react'

export function Button() {
  const [nome, setNome] = useState ('Tayanne');

  function handleChangeName() {
    setNome ("Maria");
    }

 return(
    <div>
    <button onClick={handleChangeName}> Alterar Nome </button> <br />
    <h3>{nome}</h3>
    </div>
 )
}