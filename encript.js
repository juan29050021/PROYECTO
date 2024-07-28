
//ESTA FUNCION PERMITE EL INGRESO DE PALABRAS NORMALES Y LAS ENCRIPTA
function encriptar() {
    const entrada_Text = document.getElementById('ingreso_texto').value;//asignacion de constante 
    let encriptartexto = btoa(entrada_Text);//proceso se encriptacion
    document.getElementById('salida_de_texto').textContent = `Encriptado: ${encriptartexto}`;//muestreo de encriptacion en el html
}


//Funcion de desenciptacion de palabras
function desencriptar() {
    const ingreso_texto2 = document.getElementById('ingreso_texto').value; //varialble que trae la info
    let desencriptar_p;
    try {
        desencriptar_p = atob(ingreso_texto2);//En etse proceso de convercion de la encriptacion
    } catch (e) {
        desencriptar_p = "Texto no válido para desencriptar.";//error si la palabra no es la encriptada por el sistema
    }
    document.getElementById('salida_de_texto').textContent = `Desencriptado: ${desencriptar_p}`;//Muestro de la palabra en el html
}
