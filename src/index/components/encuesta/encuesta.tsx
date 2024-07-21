import'./encuesta.css'

function Encuesta ()
{
    return(
        <>
        <div id="fondo"></div>
        
        <p id="txt">Cuida hoy una mascota y descubre tu posible match</p>
        
        <p id='txt1'>Animales</p>
       
       
 <form>
      <label htmlFor="animals">
        <select name="animals" id="form">
            <option value=""></option>
            <option value="perro">Perros</option>
            <option value="gatos">Gatos</option>
        </select>
      </label>
   </form>
       

       <p id='txt1'> Provincias</p>

               
 <form>
      <label htmlFor="animals">
        <select name="animals" id="form">
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
      <label htmlFor="animals">
        <select name="animals" id="form">
            <option value=""></option>
        </select>
      </label>
   </form>

   <button id='btn'><b>Buscar</b></button>


        </>
    )
}
export default Encuesta;