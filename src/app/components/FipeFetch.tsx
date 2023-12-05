import React, { useEffect, useState } from "react";
import FIPETable from "./FIPETable";

interface FipeComponentProps {
  fipe: string;
}


const FipeComponent: React.FC<FipeComponentProps> = ({ fipe }) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://brasilapi.com.br/api/fipe/preco/v1/${fipe}`);
        if (res.status === 200) {
          const responseData = await res.json();
          console.log(responseData);
          setData(responseData);
          setError(null);
        } else if (res.status === 400) {
          setError("Não encontrado!");
          setData(null);
        }
      } catch (error) {
        console.error(error);
        setError("Erro ao buscar dados.");
        setData(null);
      }
    };

    fetchData();
  }, [fipe]);

  let componentreturn

  if(data){
    componentreturn = <FIPETable InfoFipe={data}/>
  } else if (error){
    componentreturn = <div>{error}</div>
  } else {
    componentreturn = <div>Carregando...</div>
  }

  return (
    <div>{componentreturn}</div>
  );
};

export default FipeComponent;
