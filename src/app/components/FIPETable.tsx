interface FipeInfo {
    InfoFipe : {
    valor: string;
    marca: string;
    modelo: string;
    anoModelo: number;
    combustivel: string;
    codigoFipe: string;
    mesReferencia: string;
    tipoVeiculo: number;
    siglaCombustivel: string;
    dataConsulta: string;
    }
  } 

  
export default function FIPETable({InfoFipe} : FipeInfo) {
    if(InfoFipe[0].anoModelo != null){
        return (
            <div>
                <h1>Consulta realizada em: {InfoFipe[0].mesReferencia}</h1>
                <table>
                <tr>
                    <th>Parâmetro</th>
                    <th>Valor</th>
                </tr>
                <tr>
                    <td>Código FIPE</td>
                    <td>{InfoFipe[0].codigoFipe}</td>
                </tr>
                <tr>
                    <td>Mês de Referência</td>
                    <td>{InfoFipe[0].mesReferencia}</td>
                </tr>
                <tr>
                    <td>Marca</td>
                    <td>{InfoFipe[0].marca}</td>
                </tr>
                <tr>
                    <td>Modelo</td>
                    <td>{InfoFipe[0].modelo}</td>
                </tr>
                <tr>
                    <td>Ano Modelo e Combustivel</td>
                    <td>{InfoFipe[0].anoModelo} {InfoFipe[0].combustivel}</td>
                </tr>
                <tr>
                    <td>Tipo de Veículo</td>
                    <td>{InfoFipe[0].tipoVeiculo}</td>
                </tr>
                <tr>
                    <td>Valor</td>
                    <td>{InfoFipe[0].valor}</td>
                </tr>
      </table>
            </div> 
            )} else {
                return <h1>Carro não encontrado</h1>
            }}