let libros = [
  {
    id: "1",
    genero: "Fantasía",
    titulo: "El Nombre del Viento",
    precio: "1250",
    portada: "https://m.media-amazon.com/images/I/81ICEaINMjL.jpg",
  },
  {
    id: "2",
    genero: "Fantasía",
    titulo: "El Camino de los Reyes",
    precio: "990",
    portada:
      "https://4.bp.blogspot.com/-Jbgv3lOSKiI/V58Kv6Sp8JI/AAAAAAAAOT0/2a0XosRKr6o8qc6bpw0lazdjY9jVYUQmwCLcB/s640/19556g.JPG",
  },
  {
    id: "3",
    genero: "Fantasía",
    titulo: "Juego de Tronos",
    precio: "859",
    portada: "https://m.media-amazon.com/images/I/61royjw7ITL.jpg",
  },
  {
    id: "4",
    genero: "Ciencia Ficción",
    titulo: "Dune",
    precio: "660",
    portada:
      "https://1.bp.blogspot.com/-ZyR9QhRn2MY/XvxFKYjBAFI/AAAAAAAAZPs/WIcAZt8Mkn0YriEGLXWgsRBWOCXlz7ykQCNcBGAsYHQ/s1600/dune.jpg",
  },
  {
    id: "5",
    genero: "Ciencia Ficción",
    titulo: "Vagabundos",
    precio: "700",
    portada:
      "https://www.librosyliteratura.es/wp-content/uploads/2020/06/Vagabundos.jpg",
  },
];

export const gFetch = (id) =>
  new Promise((res, rej) => {
    //acciones - asincrónicas o no
    let condition = true;
    if (condition) {
      setTimeout(() => {
        res(id ? libros.find((libr) => id === libr.id) : libros);
      }, 2000);
    } else {
      rej("ERROR");
    }
  });
