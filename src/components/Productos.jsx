import { useEffect,useState } from "react";
import Producto from "./Producto";
import { zapatillas } from "../zapatillas";

function Productos() {
    const [items,setItems]=useState([]);

    useEffect(() => {
      const fetchProductos = new Promise((resolve) => {
        setTimeout(() => {
            resolve(zapatillas)
        },2000)
      })

      fetchProductos.then((data) => {
        setItems(data)
      })
    },[])

  return (
    <div>
        <Producto items={items}/>
    </div>
  )
}

export default Productos