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
