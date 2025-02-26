import { useEffect, useState } from "react"
export const Peticiones =({}) => {

    const [usuarios, setUsuarios] = useState([])

    const obtenerdatos = async() => {
        let respuesta = await fetch ("https://dummyjson.com/users")
        let datos = await respuesta.json()
        setUsuarios(datos.users)
    } 
    
    useEffect (()=>{
        obtenerdatos()
    },[])   
    
    if (usuarios.length == 0){
        return <h1>Cargando</h1>
    }

    console.log(usuarios)
    return <>
    <h1>Usuarios</h1>
    {usuarios.map((Element,index)=>{
        return <div key={index}>
            <h2>{Element.firstName}</h2>
            <h2>{Element.age}</h2>
            <h4>{Element.age<30?'Menor de 30':'Mayor de 30'}</h4>
        </div>
    })}

    </>
}