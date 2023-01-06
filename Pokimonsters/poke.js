var imagenes = []
imagenes["Ashe"] = "ashe.png"
imagenes["Valor"] = "valor.png"
imagenes["Zed"] = "zed.png"
imagenes["Helion"] = "helion.png"

class Champ
{
    constructor(n,v,m,armor,mr){
        this.imagen = new Image()
        this.nombre = n
        this.vida = v
        this.mana = m
        this.armor = armor
        this.magicresist = mr

        this.imagen.src = imagenes[this.nombre]
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<br /> <strong>" + this.nombre + "</strong><br />")
        document.write("<strong> Vida: </strong>" + this.vida + "<br />");
        document.write("<strong> Mana: </strong>" + this.mana + "<br />");
        document.write("<strong> armor: </strong>" + this.armor + "<br />");
        document.write("<strong> MR: </strong>" + this.magicresist + "<hr />");
    }
}

var coleccion = []
coleccion.push(new Champ("Ashe", 450, 300, 30, 30))
coleccion.push(new Champ("Valor", 0, 0, 0, 0))
coleccion.push(new Champ("Zed", 550, 6876853, 50, 26))
coleccion.push(new Champ("Helion", 550, 68, 57, 28))

for(var champions of coleccion)
{
    champions.mostrar();
}