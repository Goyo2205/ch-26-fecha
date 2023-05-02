function validar(){
    console.log('validado');
}

function mostrar(ref){
    console.log(`mostrar ${ref}`)
    document.getElementById(ref).style.display = 'block';
}

function ocultar(ref){
    console.log(`ocultar ${ref}`)
    document.getElementById(ref).style.display = 'none';
}


const vacio = (valor,ref) => {
    console.log(valor)
    switch(ref){
        case 'in-dia':
            if(valor >= 1){
                ocultar('in-dia');
                mostrar('calcular');
                break;        
            };       
        case 'in-mes':
            if(valor >= 1){
                ocultar('in-mes');
                mostrar('in-dia');
                break;        
            };       
        case 'in-ano':
            if(valor >= 1970){
                ocultar('in-ano');
                mostrar('in-mes');
                break;        
            };
        default:
            break;        
    }
};


function cantidadDias(){
    const mes = document.getElementById('mes').value;
    console.log(parseInt(mes));
    switch(parseInt(mes)){
        case 1:case 3: case 5: case 7: case 8: case 10: case 12:
            document.getElementById('dia').max = 31;
            console.log('31');
            break;
        case 4: case 6: case 9: case 11:
            document.getElementById('dia').max = 30;
            console.log('30');
            break;
        case 2:
            if (bisiesto(document.getElementById('ano').value) == true) document.getElementById('dia').max = 29;
            else document.getElementById('dia').max = 28;
            break;
        default:
            document.getElementById('dia').max = 31;
            console.log('default')
            break;
    }
}


const bisiesto = (ano) => {
    console.log(`bisiesto ${ano} ${ano % 4}`)
    if(ano % 4 == 0 ) return true;
    else return false;
}

function generarFecha(){
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const ano = document.getElementById('ano').value;

    const fecha = new Date(ano,mes-1,dia);
    return fecha;
}

function calcular(){
    const fecha = generarFecha();
    console.log(fecha)
    const dia = fecha.getDay();
    console.log(dia)
    switch(dia){
        case 1:
            document.getElementById('que-dia').innerText = `La fecha: ${document.getElementById('dia').value}/${fecha.getMonth()+1}/${fecha.getFullYear()}, fue: Lunes`;
            break;
        case 2:
            document.getElementById('que-dia').innerText = `La fecha: ${document.getElementById('dia').value}/${fecha.getMonth()+1}/${fecha.getFullYear()}, fue: Martes`;
            break;
        case 3:
            document.getElementById('que-dia').innerText = `La fecha: ${document.getElementById('dia').value}/${fecha.getMonth()+1}/${fecha.getFullYear()}, fue: Miercoles`;
            break;
        case 4:
            document.getElementById('que-dia').innerText = `La fecha: ${document.getElementById('dia').value}/${fecha.getMonth()+1}/${fecha.getFullYear()}, fue: Jueves`;
            break;
        case 5:
            document.getElementById('que-dia').innerText = `La fecha: ${document.getElementById('dia').value}/${fecha.getMonth()+1}/${fecha.getFullYear()}, fue: Viernes`;
            break;
        case 6:
            document.getElementById('que-dia').innerText = `La fecha: ${document.getElementById('dia').value}/${fecha.getMonth()+1}/${fecha.getFullYear()}, fue: Sabado`;
            break;
        case 0:
            document.getElementById('que-dia').innerText = `La fecha: ${document.getElementById('dia').value}/${fecha.getMonth()+1}/${fecha.getFullYear()}, fue: Domingo`;
            break;
    }
}
