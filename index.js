/*
const mercaderia = [
        {id :1,
        titulo: "tableteria",
        precio: 500,
        img:  "https://www.instagram.com/p/CbOWmqDAJFN/",
        },

        {id :2,
        titulo: "Helados",
        precio: 1000,
        img:  "https://www.instagram.com/p/CZ5YFejgAWt/",
        },



        {id :3,
        titulo: "Postres",
        precio: 600,
        img:  "https://www.instagram.com/p/CbJIKXvApdA/",
        },

        {id :4,
        titulo: "mayorista",
        precio: 4000,
        img:  "https://www.instagram.com/p/CU57IsWAuYA/",
        },
    ];

    let  carrito =[];
    const items = document.querySelector("#items");
    const carritoHTML = document.querySelector("#carrito");



function renderizarProductos(){

    mercaderia.forEach((producto) => {

            let productoHTML =`
            
            <div class="card" style="width: 18rem;">
  <img src=" ${producto.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${producto.titulo}</h5>
    <p> $ ${producto.precio}</p>
    <a href="#" class="btn btn-primary" onclick="AgregarProductoAlCarrito"(${producto.id})>agregar al carrito</a>
  </div>
</div>
            
 `;

            items.innerHTML += productoHTML;
          
    });
}
renderizarProductos () ;
*/

const mercaderia = [
  {
    id: 1,
    titulo: "Tableteria",
    precio: 900,
    //img: "https://perfectdailygrind.com/es/wp-content/uploads/sites/2/2020/04/Hs_5Ce8ecmXodh-AdEVHyT07irPaZ-zAAhYkKYRJgS5CVzHKs0cAAdyeAF9TIgyh4KI5gqYmyuIDwJnf2f9wCdNvJ5WbQOlSoRr5zmmzMalyR1-RQxvlOtTZkJq9G_GPUiVZ6_WX-1.jpeg",
    img:"./imagenes/tarjeta2.webp",
  },
  {
    id: 2,
    titulo: "Helado",
    precio: 2000,
    img: "./imagenes/tarjeta3.jpg",
  },
  {
    id: 3,
    titulo: "Postres",
    precio: 1000,
    img: "./imagenes/tarjeta1.jpg",
  },
  {
    id: 4,
    titulo: "Mayorista",
    precio: 6000,
    img: "https://i.pinimg.com/originals/01/6e/5a/016e5a352ee868bac485e50e0dbb2935.png",
  },
];

let carrito = [];

const items = document.querySelector("#items");
const carritoHTML = document.querySelector("#carrito");

//*Pintar productos en la tienda

function renderizarProductos() {
  mercaderia.forEach((producto) => {
    let productoHTML = `
  
          <div class="col-12 col-md-6 mb-5 d-flex justify-content-center">
          <div class="card text-light bg-dark" style="width: 18rem;">
              <img class="card-img-top" src="${producto.img}" alt="Card image cap">
              <div class="card-body">
                  <h5 class="card-title">${producto.titulo}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <p>$${producto.precio}</p>
                  <button class="btn btn-primary" onclick="agregarProductoAlCarrito(${producto.id})">Añadir al carrito</button>
              </div>
          </div>
          </div>
          `;
    items.innerHTML += productoHTML;
  });
}
renderizarProductos();

//*** Añadir productos al carrito****/
//*Identificar qué producto eligió
//*Si el producto ya esta modifico la cantidad - renderizo
//* Mostrar la informacion del producto
//*Calcular el total

function agregarProductoAlCarrito(id) {
  let producto = mercaderia.find((producto) => producto.id === id);
  console.log(producto.id);
  // console.log(producto.title);

  let productoEnCarrito = carrito.find((producto) => producto.id === id);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }

  renderizarCarrito();
  calcularTotal();
}

function renderizarCarrito() {
  console.log(carritoHTML);

  let htmlCarrito = "";

  carrito.forEach((prod, id) => {
    htmlCarrito += `
        
        <div class="col-12 mb-5 d-flex flex-row justify-content-center">
        <div class="card text-dark flex-row" style="width: 30rem;">
        <div>
        <img  style="width: 100px;" src="${prod.img}" alt="Card image cap">
        </div>
            <div class="card-body" >
                <h5 class="card-title">${prod.titulo}</h5>
                <p>${prod.precio}$</p>
                <p>Cantidad: ${prod.cantidad}</p>
                <button class="btn btn-danger" onclick="eliminarProductoDelCarrito(${id})">Eliminar</button>
            </div>

        </div>
        </div>
        `;
  });

  carritoHTML.innerHTML = htmlCarrito;
}

function calcularTotal() {
  let total = 0;

  carrito.forEach((prod) => {
    total += prod.precio * prod.cantidad;
  });

  console.log(total);

  const t = document.getElementById("total");
  t.innerHTML = `<h5>$${total}</h5>`;
}

//****Editar Carrito***/
//*Cuántos hay? Elimino un producto o vaciar carrito.

function eliminarProductoDelCarrito(id) {
  carrito[id].cantidad--;

  if (carrito[id].cantidad === 0) {
    carrito.splice(id, 1);
  }
  renderizarCarrito();
  calcularTotal();
}

function vaciarCarrito() {
  carrito = [];
  renderizarCarrito();
  calcularTotal();
}

const vaciar = document.querySelector("#boton-vaciar");
vaciar.addEventListener("click", vaciarCarrito);
