
var imagenes = []
imagenes["50"] = "billete50.png"
imagenes["20"] = "billete20.png"
imagenes["10"] = "billete10.png"

var dinero = 200
var entregado = []

class Billete
{
    constructor(v,c)
    {
        this.imagen = new Image()
        this.valor = v
        this.cantidad = c

        this.imagen.src = imagenes[this.valor]
    }
    usarCajero()
    {
        document.body.appendChild(this.imagen);
        if (dinero > 0)
        {
            var papeles
            var div = Math.floor(dinero/this.valor)
            if (div > this.cantidad)
            {
                papeles = this.cantidad
            }
            else
            {
                papeles = div
            }
            entregado.push(new Billete(this.valor,papeles))
            dinero = dinero - (this.valor*papeles)
        }
    }
}

var caja = []
caja.push(new Billete(50,3))
caja.push(new Billete(20,2))
caja.push(new Billete(10,2))

for(var billete of caja)
{
    billete.usarCajero(dinero);
    
}
for(var e of entregado)
{
    document.write("<br /> <strong>" + e.cantidad + "</strong><br />")
}