import { useEffect, useState } from "react";
import PokeTable from "./PokeTable";

interface pokeId {
    pokeId : string;
}

export default function PokeFetch({pokeId} : pokeId) {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                console.log(pokeId)
                const res =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
                if(res.status === 200){
                    const response = await res.json()
                    setData(response)
                    setError(null)
                } else if(res.status === 400 || res.status == 404){
                    setError("Não foi possivel encontrar!")
                    setData(null)
                }
            } catch (error) {
                setError("Erro!")
                console.log(error)
                setData(null)
            }
        };
        
        fetchData()
    },[pokeId]);
    let componentreturn

    if(data) {
            componentreturn = <PokeTable PokeData ={data}/>
    } else if(error){
            componentreturn = <div>
                <h1> Erro : {error}</h1>
            </div>
    } else {
        componentreturn = <h1> Carregandorrrrr</h1>
    }

    return (
        <div>{componentreturn}</div>
    )
}

