import React,{useState, ChangeEvent } from 'react';
import'./encuesta.css'

interface Protectoras
{
  tipo:string;
  provincia:string;
  protectora: string;
}
const Encuesta:React.FC = () =>
{

  const[animal, setAnimal] = useState<string>('');
  const[provincia, setProvincia] = useState<string>('');
  const[resultado, setResultado] = useState <Protectoras[]>([]);

  const opcionAnimal = (e: ChangeEvent<HTMLSelectElement>)=>{

    setAnimal(e.target.value);
  };


  const opcionProvincia = (e: ChangeEvent <HTMLSelectElement>) =>
    {
      setProvincia(e.target.value);
    };

    const filterBuscar = async() =>
    {
      try{
        const respuesta = await fetch ('http://localhost:3001/buscar',{

          method:'POST',
          headers: {'Content-Type': 'aplication.json'},
          body: JSON.stringify({animal,provincia}),
        }) ;
        const data: Protectoras[] = await respuesta.json();
        setResultado(data);

      } catch(error)
      {
        console.error('Busqueda no encontrada', error)
      }
      
    };


    return(
        <>
        <div id="fondo"></div>
        
        <p id="txt">Cuida hoy una mascota y descubre tu posible match</p>
        
        <p id='txt1'>Animales</p>
       
       
 <form>
      <label htmlFor="animals">
        <select name="animals" id="form" onChange={opcionAnimal}>
            <option value=""></option>
            <option value="perro">Perros</option>
            <option value="gatos">Gatos</option>
        </select>
      </label>
  </form>


      <p id='txt1'> Provincias</p>

    <form>
      <label htmlFor="Provincia">
        <select name="provincia" id="form" onChange={opcionProvincia}>
            <option value=""></option>
            <option value="Barcelona">Barcelona</option>
            <option value="Girona">Girona</option>
            <option value="Lleida">Lleida</option>
            <option value="Tarragona">Tarragona</option>
        </select>
      </label>
    </form>

    <p id='txt1'> Protectoras</p>

    <form>
      <label htmlFor="shelters">
        <select name="shelters" id="form">
            <option value=""></option>
        </select>
      </label>
       <button id='btn' onClick={filterBuscar}><b>Buscar</b></button>
    </form>

      <div>
        {resultado.map ((item, index) => (

          <div key={index}>
            <p>Tipo:{item.tipo}</p>
            <p>Provincia:{item.provincia}</p>
            <p>Protectora:{item.protectora}</p>

          </div>
        ))}
      </div>


        </>
    )
}
export default Encuesta;