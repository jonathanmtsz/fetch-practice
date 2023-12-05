interface PokemonInfoProps {
    PokeData: {  
      id: number;
      name: string;
      base_experience: number;
      height: number;
      is_default: boolean;
      order: number;
      weight: number;
      abilities: {
        ability: {
            name : string
            url : string,
        },
        is_hidden : boolean,
        slot: number
      };
    }
};

export default function PokeTable({PokeData} : PokemonInfoProps) {
   if(PokeData.id != null){
    console.log(PokeData.abilities)
            return(
            <div>
            <h1>Altura do Pokemon : {PokeData.height}</h1>
            <div>
            <h2>Abilities: </h2>
            <ul>
                {PokeData.abilities.map((ability, index) => (
                <li key={index}>
                    <p>Name: {ability.ability.name}</p>
                    <p>Slot: {ability.slot}</p>
                </li>
        ))}
      </ul>
    </div>
            </div>
            )
   } else {
            return(
            <h1> Não encontrado! </h1>
            )
   }
}


