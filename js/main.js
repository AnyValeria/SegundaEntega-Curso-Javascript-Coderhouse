//MAIN

//declaro container
const container = document.getElementById("container");
//declaro carrito de compras
let carrito = JSON.parse(localStorage.getItem("todosLosProductos")) || [];


//creo la card
productos.forEach((el,idx)=>{
    const card =document.createElement("div");
    //clase card
    card.className="card";
        card.innerHTML= `
             <h2 class="nombreProducto">${el.nombre}</h2>
             <p>$${el.precio}</p>
            
           `;
           //<p>${el.id}</p>
           
        
         container.appendChild(card);

    //imagenes producto
    const imgProducto=document.createElement("img");
    imgProducto.src=el.img;
    //clase imagen
    imgProducto.className="imagen";
    //boton para agregar productos al carrito
    const btnAdd= document.createElement("button");
    //texto boton agregar
    btnAdd.innerText="Agregar al carrito";
    //clase boton
    btnAdd.className="button";

    
    //evento "click" boton agregar
    btnAdd.addEventListener('click',()=>AddCarrito(el.id));
    
    
    //agregar la imagen a la card
    card.appendChild(imgProducto);
    //agregar boton a la card
    card.appendChild(btnAdd);
    

});
   

    //Obtiene el boton "btnMostrarCarrito" del HTML
    const btnMostrarCarrito= document.getElementById("btnMostrarCarrito");
    //Evento click sobre el boton "btnMostrarCarrito"
    btnMostrarCarrito.addEventListener("click", ()=>mostrarCarritoCompras());
    
    //Obtiene el boton "btnVaciarCarrito" del HTML
    const btnVaciarCarrito = document.getElementById("btnVaciarCarrito");
    //Evento click sobre el boton "btnVaciarCarrito"
    btnVaciarCarrito.addEventListener("click", ()=>vaciarCarritoCompras());

    //función para agregar productos al carrito de compras
    function AddCarrito(id) {
        // Busca el producto en el array de productos disponibles por su id
        let producto = productos.find(el=> el.id === id);

            //Agrega producto al carrito de compras
                carrito.push(producto); 
                //agrega el producto al localStorage 
                localStorage.setItem("todosLosProductos", JSON.stringify(carrito));

                alert("Agregaste al carrito " + producto.nombre);
    };

    //función para mostrar los productos del carrito de compras
    function mostrarCarritoCompras(){
 
            if(carrito.length >0){
                // Limpia el contenido actual 
                document.body.innerHTML = '';
     
                     // Crea un nuevo nombre para el carrito de compras
                let carritoDeCompras = document.createElement('h2');
                carritoDeCompras.textContent = 'Carrito - Productos Seleccionados';
                document.body.appendChild(carritoDeCompras);
         
                // Se crea una lista de compras que sirve para mostrar los productos que hay en el carrito 
                let listaDeCompras = document.createElement('ul');
         
                // Itera sobre los productos en el carrito de compras y crea elementos HTML para cada uno
                carrito.forEach(el => {
                  let compra = document.createElement('li');
                  compra.innerText= `Producto: ${el.nombre}  Categoria: ${el.categoria} Precio: $${el.precio}`;
                  listaDeCompras.appendChild(compra);
                });
                //Agrega un elemento para mostrar el total de productos selecionados y calcula total
                let compraTotal= document.createElement('p');
                compraTotal.innerText=`Total Productos: $${calcularTotal()}`;
                listaDeCompras.appendChild(compraTotal);
         
                // Agrega la lista al cuerpo de la página
                document.body.appendChild(listaDeCompras);
         
                // Se crea un botón para regresar al catalogo inicial
                let botonVolver = document.createElement('button');
                botonVolver.textContent = 'Regresar al catalogo';
                botonVolver.className="boton"
                botonVolver.addEventListener('click', () => location.reload());
                document.body.appendChild(botonVolver);
              }else{
                alert("No tienes productos seleccionados");
              }
     
            
    };

    //función para calcular el total de la compra

    function calcularTotal(){
        const totalProductos = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
        return totalProductos;
      };

    
    //función para vaciar el carrito de compras

    function vaciarCarritoCompras(){
        carrito=[];
        localStorage.setItem("todosMisProductos", JSON.stringify(carrito));
        alert("No existen productos en su carrito");
     };
 



   