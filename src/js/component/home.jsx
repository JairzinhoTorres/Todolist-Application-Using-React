import React, {useState} from "react";



const Home = () => {
	const[tarea,setTarea]=useState("")	
	const[lista,setLista]=useState([])
// 	const listaItems = lista.map((item) =>
// 	<li  key={item.toString()}>{item}
// 	<button type="button" className="btn btn-primary" id={item}>X</button>
//   </li>
// );
// ------------------------------Para borrar datos----------------------------------------------------
const DeleteItems = (indexItem) => {
	setLista((prevState) =>
	  prevState.filter((listaItems, index) => index !== indexItem)
	);
  };
// ------------------------------Para enviar datos----------------------------------------------------
	function enviarDatos(e) {
		e.preventDefault()
		setLista([...lista, tarea])
		setTarea("")
	}
	console.log(lista);
	
// ----------------------------------------------------------------------------------
	return (
		<>
		
		
		<div className="card container d-flex mt-3">
  <div className="card-body">
	<input  type="text" className="input m-1 w-75" value={tarea} aria-describedby="este es el input del boton"  onChange={(e)=>{setTarea(e.target.value)}} placeholder="No hay tareas, añadir tareas ..."/>
	<button type="submit" className="btn btn-primary btn-sm" onChange={(e)=>{setLista(e.target.value)}} onClick={enviarDatos}>Agregar tarea</button>
  </div>

  <div className="to-do-list d-flex card border-primary mb-3" style={{width: "18rem;"}} >
  <div class="card-body text-primary">

			  <ul>{lista.map((item, index) => (
        <li key={index}>
          {item}
          <button className="btn" onClick={() => DeleteItems(index)}>
            <i className="fas fa-trash-alt" />
          </button>
        </li>
      ))}</ul>
			</div>
		</div>
		</div>
		
		</>
	);
};

export default Home;
