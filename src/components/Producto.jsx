import Item from "./Item"
import { useState } from "react";
import { Link } from "react-router-dom"

const categorias = {
    ADIDAS: "Adidas",
    NIKE: "Nike",
    PUMA: "Puma"
};

function Producto({ items }) {

    const [selectedCategory, setSelectedCategory] = useState("");
    const filteredItems = selectedCategory ? items.filter(item => item.categoria === selectedCategory) : items;

    return (
        <Link to={`/productos/${id}`}>
            <div>
                <button onClick={() => setSelectedCategory(categorias.ADIDAS)}>Adidas</button>
                <button onClick={() => setSelectedCategory(categorias.NIKE)}>Nike</button>
                <button onClick={() => setSelectedCategory(categorias.FRUTAS)}>Puma</button>
            </div>
            {filteredItems.map((item) => (
                <Item
                    key={item.id}
                    nombre={item.nombre}
                    precio={item.precio}
                    descripcion={item.descripcion}
                />
            )

            )}
        </Link>
    )
}

export default Producto