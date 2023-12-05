"use client"
import { FormEvent, useState } from "react"
import Link from "next/link"
import PokeComponent from "../components/PokeTable"
import PokeTable from "../components/PokeTable"
import PokeFetch from "../components/PokeFetch"

export default function pokeFind(){
    const[pokeValue, setPokeValue] = useState("")
    const[pokeSearchValue, setPokeSearchValue] = useState("")
    const handleSubmitPokemon = (e : FormEvent) =>{
        e.preventDefault()
        setPokeSearchValue(pokeValue)
    }

    return(
        <div>
            <div>
                <h1 className="text-black text-center font-bold p-4">Poke Finder</h1>
            </div>
            <div className="text-center">
                <form onSubmit= {handleSubmitPokemon}>
                    <input type="text" placeholder="Nome/Id do pokemon" onChange={(e) => setPokeValue(e.target.value)} className="text-black"/>
                    <input type="submit" className="text-black pl-2"/>
                </form>
            </div>
            <div className="text-center text-black">
                <PokeFetch pokeId = {pokeSearchValue.toLowerCase()}/>
            </div>
            <div className="text-center text-black font-bold">
                <Link href={"/"}>Home</Link>
            </div>
        </div>
    )
}