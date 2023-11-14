// variable que controla si el menu esta abierto o no

/*let visible = false;

function abrirCerrarMenu(){

    if(visible==false){

        document.getElementById("nav").className = "responsive";
        visible = true;
    }else{
        document.getElementById("nav").className = "";
        visible= false;
    }

}
*/
let visible = false;

function abrirCerrarMenu() {
    if (visible == false) {
      if (window.innerWidth < 921) { // Verifica el ancho de la pantalla antes de agregar la clase
        document.getElementById("nav").className = "responsive";
      }
      visible = true;
    } else {
      document.getElementById("nav").className = "";
      visible = false;
    }
  }
  
//detector del scrolling para aplicar la animacion de las barras de hablidades
window.onscroll = function(){

    animacionSkills();
    //animacion de los numeros
    animacionNumeros();
}

//funcion qeu aplica las animaciones
function animacionSkills(){
    
    var skills = document.getElementById("sobremi");
    //

    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if(distancia_skills >=400){
        document.getElementById("dw").className = "progreso dw";
        document.getElementById("dg").className = "progreso dg";
        document.getElementById("bs").className = "progreso bs";
        document.getElementById("dm").className = "progreso dm";
    }
    else{

    }

}
