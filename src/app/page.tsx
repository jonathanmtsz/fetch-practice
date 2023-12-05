"use client"
import { FormEvent, useEffect, useState } from "react"
import FipeComponent from "./components/FipeFetch"
import Link from "next/link"

export default function Home() {
  const [val, setVal] = useState("")
  const [fipeVal, setFipeVal] = useState("")
  const handleSubmit = (e : FormEvent) =>{
    e.preventDefault()
    setFipeVal(val)
    }
  return (
    <div>
    <div className="text-center text-black mt20">
      <h1 className="font-bold pt-4">
        Tabela FIPE
      </h1>
      <p>Tabela fipe</p>
    </div>
    <div className="text-center p-4">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setVal(e.target.value)} className="text-black" placeholder="insira tabela fipe"/>
        <input type="submit"></input>
      </form>
    </div>
    <div className="text-center p-2">
     <FipeComponent fipe={fipeVal}/>
    </div>
    <div className="text-center text-white font-bold p-5">
      <Link href={"/pokeFind"}>PokeFind</Link>
    </div>
    </div>
  )
  }
