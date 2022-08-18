//Encriptar textos
  const encriptarTexto = ()=>{
    let texto = document.querySelector("#textoArea").value;
    let textoMin = texto.toLowerCase(),nuevoTexto;
    const vocales = "aeiou";

    for (let i of texto) {

      if(vocales.includes(i)){
        nuevoTexto = textoMin.replace(/e/ig,"enter").replace(/i/ig,"imes")
        .replace(/a/ig,"ai").replace(/o/ig,"ober").replace(/u/ig,"ufat");
      }   
    }
    document.querySelector("#caja").value = nuevoTexto;
  }


  //Desencriptar textos
  const desencriptarTexto = ()=>{
    let texto = document.querySelector("#textoArea").value;
    let textoMin = texto.toLowerCase(),nuevoTexto;
    const vocales = "aeiou";

    for (let i of texto) {
    if(vocales.includes(i)){
        nuevoTexto = textoMin.replace(/enter/ig,"e").replace(/imes/ig,"i")
        .replace(/ai/ig,"a").replace(/ober/ig,"o").replace(/ufat/ig,"u");
      }   
    }
    document.querySelector("#caja").value = nuevoTexto;
    
  }

  //Limpiar de datos los textAreas
  const limpiarCampos=()=>{
    document.querySelector("#textoArea").value = "";
    document.querySelector("#caja").value = "";
  }

  //Mueve el contenido del textArea para el otro campo del TextArea
  const copiarTexto=()=>{
    let resultados = document.querySelector("#caja").value;
    document.querySelector("#textoArea").value = resultados;
  }






