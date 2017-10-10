var cardNumber = parseInt(prompt("¿cuál es su número de tarjeta de crédito?"));
 // creamos una función para validar el número de una tarjeta de crédito
 function isValidCard(num){
 //si el mensaje está vacio volvemos a preguntar con un prompt
 if(num.length===0){
   return parseInt(prompt("ingrese su número por favor"))
 }else{
  //convertimos el string en un array y lo invertimos
   var reverseNum = num.split("").reverse();
//iteramos por todo el array
   for(var i = 0; i< reverseNum.length; i++){
     //obtenemos los números de posición par
     if(reverseNum.indexOf(i)%2!==0)){
       var evenNum = reverseNum[i]*2;
       //si son igual o mayor que diez sumamos los dígitos
       for(var j =0; j< evenNum; j++){
         if(evenNum[j]>=10){
           var leftNumber= parseInt(evenNum[j]/=10);
           var rightNumber= evenNum[j] % 10;
           var sumNum= leftNumber[j] + rightNumber[j];
         }else{
           var shortNum = evenNum[j];
         }

     }else{
       var oddNum = a[i];
     }
     //sumamos todos los dígitos
    var validNum = oddNum += sumNum += shortNum;
    //obtenemos el residuo de dividir entre diez para poder validar
    if(validNum % 10 = 0){
      alert("su número es válido");
    }else{
      alert("lo sentimos, su número no es válido");
    }

   }
 }
}

isValidCard(carNumber)
