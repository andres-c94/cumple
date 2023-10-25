const boton = document.getElementById('bton')
boton.addEventListener('click',()=>{
    Swal.fire({
        title:'La Futbolera Bogotá - Av. C/ 63 #35-44 - Viernes 6:30 pm',
        text: 'por favor confirmar su asistencia!',
        imageUrl: './bolos.jpg',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })
})