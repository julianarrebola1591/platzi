var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url:"fredy.jpg",
    cargaOK: false
}
var vaca = {
    url:"vaca.png",
    cargaOK: false
}


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        for (var v=0; v < 32; v++)
        {
        var x = aleatorio(0,5)
        var y = aleatorio(0,5)
        x = x * 80;
        y = y * 80;
        papel.drawImage(vaca.imagen, x, y)
        }
    }
}



var z

for(var i=0; i<10;i++)
{
    var z = aleatorio(10, 20);
    document.write(z +", ");
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min
  return resultado;
}
for(var i=0; i<500;i++)
{
    var z = aleatorio(10, 20);
    document.write(z +", ");
}

