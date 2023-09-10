
/**
 * Capturar los textos
 */
 
const depositoTexto =document.getElementById('depositoActual'),
      retiroTexto= document.getElementById('retiroActual'),
      balanceTexto=document.getElementById('balanceActual'),
      balanaceTexto=document.getElementById('balanceActual'),

      /**
       * Capturar los input
       */

      inputDeposito=document.getElementById('depositoInput'),
      inputRetiro=document.getElementById('retiroActual')

      /**
       * Capturar botones
       */

      btnDeposito=document.getElementById('calcularDeposito')
      btn=document.getElementById('calcularRetiro')

      /**
       * Agregar evento deposito
       */

      btnDeposito.addEventListener('click',(event)=>{
        const valorDeposito= inputDeposito.value
        const totalDeposito=Number(depositoTexto.innerText)+Number(valorDeposito)
        const totalBalance=Number(depositoTexto.innerText)+Number(valorDeposito)
        depositoTexto.innerHTML=totalDeposito
        balanaceTexto.innerHTML=totalBalance

        inputDeposito.value=''


      })

      /**
       * Evento de Retiro
       */

      
      btnDeposito.addEventListener('click',(event)=>{
        const valorRetiro= inputRetiro.value
        if(valorRetiro==0){
            
            alert("No tengo nada que retirar")
            return
        }

        
        if(Number(valorRetiro)>Number(balanceTexto.innerText)){
            alert("No hay dinero suficiente")
            return
            
        }
        
            alert("Retiro exitoso")

       })
      