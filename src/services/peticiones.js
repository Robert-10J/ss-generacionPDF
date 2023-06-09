import axios from 'axios'
import React, {useState, useEffect} from 'react';

export async function obtenerAlumnos() {
  try {
    const response = await axios.get(import.meta.env.VITE_URL_API)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const Plantilla = () => {
  const [documentContent, setDocumentContent] = useState(null);

useEffect(()=>{
  const fetchData = async () =>{
    try {
      const response = await axios.get('',{
        responseType: 'blob',
      });
      const blob = new Blob([response.data],{type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
          const arrayBuffer = event.target.result;
          setDocumentContent('Documento procesado correctamente');
        };
          fileReader.readAsArrayBuffer(blob);
      }catch(eror){

      }
    };
    fetchData();
  },[]);