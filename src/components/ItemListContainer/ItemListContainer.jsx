import React from "react";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gFetch } from "../../utils/gfetch";

const ItemListContainer = () => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idGenero } = useParams();

  useEffect(() => {
    if (idGenero) {
      gFetch()
        .then((resp) =>
          setLibros(resp.filter((libro) => libro.genero === idGenero))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch()
        .then((resp) => setLibros(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [idGenero]);
  return (
    <>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <>
          <div className="">
            {libros.map((libro) => (
              <div key={libro.id} className="listContainer">
                <div className="">Nombre: {libro.nombre}</div>
                <div className="">
                  <img className="" src={libro.portada} />
                  <br />
                  <label>Categoría: {libro.genero}</label>
                  <label>Precio: {libro.precio}</label>
                </div>
                <div className="">
                  <Link to={`/detalle/${libro.id}`}>
                    <button className="">Detalle</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ItemListContainer;
