import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import AppForm from "./componentes/AppForm";
import {db} from "./componentes/firebase";

function App() {  
  ///////////////////////////////////////////////////////////////////////
  ////////// READ - fnRead - LECTURA A BD ///////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  const [docsBD, setDocsBD] = useState([]);
  //console.log(docsBD);

  const fnRead = () => {
    try {
      const xColeccionConQuery = query(collection(db, "persona"));
      const unsubscribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
        const xDoc = [];
        xDatosBD.forEach((doc) =>{
          //xDoc.push(doc.id);          //array con texto
          //xDoc.push(doc.data());      //objeto
          //xDoc.push({id: doc.id});    //objeto
          xDoc.push({id: doc.id, ...doc.data()});
        });
        setDocsBD(xDoc);
      });
    } catch (error) {
      console.error(error);
    }
  }
  fnRead();
  ///////////////////////////////////////////////////////////////////////
  ////////// DELETE - fnDelete - Eliminar registros /////////////////////
  ///////////////////////////////////////////////////////////////////////
  const [idActual, setIdActual] = useState("");

  const fnDelete = (xId) => {
    console.log("Se elimino..." + xId);
  };

  return (
    <div style={{width:"350px", background:"greenyellow", padding:"10px"}}>
      <h1>sitiocopia2a3 (App.js)</h1>
      <h3>READ / DELETE</h3>
      <AppForm {...{idActual, setIdActual, fnRead}} />
      {
        docsBD.map((row) => 
          <p key={row.id}>
            {row.nombre} ...
            <span onClick={() => fnDelete(row.id)}>x</span>
            ...
            <span onClick={() => setIdActual(row.id)}>x</span>
          </p>
        )
      }
    </div>
  );
}

export default App;