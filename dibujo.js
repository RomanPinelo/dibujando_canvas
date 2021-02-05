var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var boton_borrar = document.getElementById("borrando");
boton_borrar.addEventListener("click", borraDibujo);

//Si al nombre de la función le pongo parentesis, significa que se ejecutará ahí.
//Si no le pongo parentesis solo refernecia a la funcion que esta en algun otro lado
//del código.

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value); //Estas variables solo
  var l = 0;			              //solo tienen vida 
  var yi, xf;			              //en esta función.
  var colorcito = "#FAA";
  var espacio = (ancho / 2 ) / lineas;

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("yellow", 0, yi, xf, 150);
    console.log("Linea " + l);
  }
  
  for(l = 0; l < lineas; l++)
  {
    xi = espacio * l;
    yf = espacio * (l + 1);
    dibujarLinea("red", xi, 0, 150, yf);
    console.log("Linea " + l);
  }
  
  for(l = 0; l < lineas; l++)
  {
    xi = 300 - (espacio * l);
    yf = espacio * (l + 1);
    dibujarLinea("#2196f3", xi, 0, 150, yf);
    console.log("Linea " + l);
  }
  
  for(l = 0; l < lineas; l++)
  {
    xi = 150 + (espacio * l);
    yf = 150 - (espacio * (l + 1));
    dibujarLinea("cyan", xi, 150, 300, yf);
    console.log("Linea " + l);
  }
  
  for(l = 0; l < lineas; l++)
  {
    xi = 150 - (espacio * l);
    yf = 150 + (espacio * (l + 1));
    dibujarLinea("cyan", xi, 150, 0, yf);
    console.log("Linea " + l);
  }
  
  for(l = 0; l < lineas; l++)
  {
    xi = espacio * l;
    yf = 300 - (espacio * (l + 1));
    dibujarLinea("#2196f3", xi, 300, 150, yf);
    console.log("Linea " + l);
  }
  
  for(l = 0; l < lineas; l++)
  {
    yi = 150 + (espacio * l);
    xf = 150 + (espacio * (l + 1));
    dibujarLinea("red", 150, yi, xf, 300);
    console.log("Linea " + l);
  }
  
  for(l = 0; l < lineas; l++)
  {
    yi = 300 - (espacio * l);
    xf = 300 - (espacio * (l + 1));
    dibujarLinea("yellow", 300, yi, xf, 150);
    console.log("Linea " + l);
  }

  dibujarLinea(colorcito, 1,151,299,151);  //Eje x
  dibujarLinea(colorcito, 149,1,149,299);  //Eje y
}


//Borrar lienzo
function borraDibujo ()
{
  lienzo.clearRect(0, 0, d.width, d.height);
}


//Borrar contenido del input al volver a hacer click en él. 
var borrar_input = document.getElementById("texto_lineas");
borrar_input.addEventListener("click", borraInput);

function borraInput ()
{
  borrar_input = this.value="";
}