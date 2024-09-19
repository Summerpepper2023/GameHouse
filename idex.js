function activate(id1, id2){
    var tarjeta1 = document.getElementById(id1);
    var tarjeta2 = document.getElementById(id2)


    tarjeta1.classList.add('active');
    tarjeta2.classList.remove('active')

};

function changeAccesorio(idImagen, idDescripcion, idButton){

    var imagen = document.getElementById(idImagen);
    var descripcion = document.getElementById(idDescripcion);
    var button = document.getElementById(idButton)

    const images = document.querySelectorAll('.image');
    images.forEach((image) => {
        image.classList.remove('active');
    });

    const descripciones =document.querySelectorAll('.descripcion')
    descripciones.forEach((descripcion) => {
        descripcion.classList.remove('active');
    });

    const buttons = document.querySelectorAll('.button.accesorio')
    buttons.forEach((button) =>{
        button.classList.remove('active')
    });

    imagen.classList.add('active');
    descripcion.classList.add('active')
    button.classList.add('active')
  
};