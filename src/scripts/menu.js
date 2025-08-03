//Cargar Script
document.addEventListener('DOMContentLoaded', () => {

    //Variables
    const openMenu = document.querySelector('#open-menu')
    const closeMenu = document.querySelector('#close-menu')
    const sidebar = document.querySelector('#sidebar')

    //LLamando a la function cargarFunciones
    cargarFunciones()

    //Function cargarFunciones
    function cargarFunciones(){
        openMenu.addEventListener('click', abrirMenu)
        closeMenu.addEventListener('click', cerrarMenu)
    }

    //Function abrirMenu
    function abrirMenu(){
        //Agregando a sidebar la clase active
        sidebar.classList.add('active')
        console.log('Abriendo el menu...')
    }

    //Function cerrarMenu
    function cerrarMenu(){
        //Comprobando si en sidebar existe la clase active
        if(sidebar.classList.contains('active')){ //Eliminamos la class active
            sidebar.classList.remove('active')
            console.log('Cerrando el menu.')
        }
    }
})