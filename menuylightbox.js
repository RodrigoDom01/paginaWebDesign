// -- menu --

const hamburguer = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(hamburguer)

hamburguer.addEventListener('click',()=>{
    menu.classList.toggle("spread")
})

window.addEventListener("click", e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer    ){
        
        menu.classList.toggle("spread")    
    }
})


// -- lightbox --

const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburger');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

contenedorLight.addEventListener('click', e=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage') 
        hamburguer1.style.opacity = '1'
    }

})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'

}