function Item({ nombre, precio, descripcion }) {
    return (
        <div>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
        </div>
    );
}

export default Item;
