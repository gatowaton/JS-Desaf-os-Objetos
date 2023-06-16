//1
const datos = {
    nombre:"lee",
    apellido:"cavada",
    email:"lee@gmail.com",
    direccion:"casa123"
}
console.log(datos);

//2

const alummno = {
    nombre:"lee",
    cursos:{
        ingles:{
            nota1: 5,
            nota2: 6,
            nota3: 4,
            nota4: 7
        },
        programacion:{
            nota1: 3,
            nota2: 5,
            nota3: 5,
            nota4: 7
        },
        html:{
            nota1: 5,
            nota2: 6,
            nota3: 7,
            nota4: 7  
        }
    }
}

const sumaNotasIn = alummno.cursos.ingles;
let NotasIn = 0;
for (let notaIn in sumaNotasIn){
    NotasIn += sumaNotasIn[notaIn];
}

const sumaNotasPr = alummno.cursos.programacion;
let NotasPr = 0;
for (let notaPr in sumaNotasPr){
    NotasPr += sumaNotasPr[notaPr];
}

const sumaNotasHT = alummno.cursos.html;
let NotasHT = 0;
for (let notaHT in sumaNotasHT){
    NotasHT += sumaNotasHT[notaHT];
}

const notasIngles = Object.keys(alummno.cursos.ingles).length
const notasProgram = Object.keys(alummno.cursos.programacion).length
const notasHTML = Object.keys(alummno.cursos.html).length

const promING = NotasIn / notasIngles;
const promPRO = NotasPr / notasProgram;
const promHTML = NotasHT / notasHTML;

console.log(`el alumno: ${alummno.nombre} un promedio de ${promING} en ingles, ${promPRO} en programacion y ${promHTML} en HTML`);

//3

const vestido = {
    precio: 50000,
    desc: 0.1,
    neto: function(){
        const Desc = this.precio * (this.desc)
        const precioDesc = this.precio - Desc
        return precioDesc
    }
}

console.log(`el precio del vestido con el descuento aplicado es: ${vestido.neto()}`);
