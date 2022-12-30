let inputTextArea = document.querySelector('#inputTextArea');
let outTextArea = document.querySelector('#outTextArea');
let btnCript = document.querySelector('#btnCript');
let btnDescript = document.querySelector('#btnDescript');
let btnCopiar = document.querySelector('#btnCopiar');


/* Botão Criptografar */
btnCript.addEventListener('click', function () {

      /* testa se inputTextArea está vazio */
      if(inputTextArea.value == ""){
            document.getElementById('msgMinuscula').innerHTML = "Não existe texto para criptografar!"; 
            let msgMinuscula = document.querySelector('#msgMinuscula').style.display = "";           
      }

      /* testa se as letras estão minúscula */
      else if (inputTextArea.value === inputTextArea.value.toLowerCase()) {            
           
            let texto = inputTextArea.value;
            let resltInput = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").
            replace(/o/g, "ober").replace(/u/g, "ufat");
            
            let rightMesagem = document.getElementById('rightMesagem').style.display = "none";
            let ativaOutArea = document.getElementById('ativaOutArea').style.display = "";
            outTextArea.value = resltInput;
            
            let msgMinuscula = document.querySelector('#msgMinuscula').style.display = "none";            

      } else {
            let msgMinuscula = document.querySelector('#msgMinuscula').style.display = "";
      }

     
})


/* Botão Descriptografar */
btnDescript.addEventListener('click', function(){
      let texto = inputTextArea.value;
      let resultOut = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").
      replace(/ober/g, "o").replace(/ufat/g, "u");

      outTextArea.value = resultOut;
      inputTextArea.value = "";
});


/* Botão Cópiar */
btnCopiar.addEventListener('click', function(){     
      
      //testa se o outTextArea está vazio
      if(outTextArea.value === "") {
            alert("Não existe texto a ser copiado!!");
      }else{        
            document.getElementById('outTextArea').select();
            document.execCommand('copy');    
            alert("Texto foi cópiado!");
            inputTextArea.value = "";
            outTextArea.value = "";
      } 
});
