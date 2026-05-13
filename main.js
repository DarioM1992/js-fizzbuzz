//parto con un ciclo per stampare i numeri da 1 a 100


//sparo tutti i numeri da 1 a 100
//for (let n = 0; n < 100; n++)  console.log(n + 1); 
    
//ora penso ad un modo per trovare i multipli di 3 e subito dopo i multipli di 5 




// esempio singolo per multipli di 5 (o comunque qualsiasi numero)

// for (let c = 5; c < 100; c++){
//     if (c % 5 === 0) { 
//     console.log("Buzz" ,c);
//     } 
// }



// //multipli di 3 e multipli di 5 formula a sè

// for (let t = 3; t < 100; t++){
//     if (t % 3 === 0) { 
//     console.log("Fizz" ,t);
//     } else if (t % 5 === 0){
//         console.log ("Buzz",t)
//     }
   
// }


// ho inserito logica su come concatenare multipli singoli (3 || 5) e multipli (3 && 5) insieme e l'output del numero che non è nessuno di essi
for (let t = 1; t < 101; t++){
    if ((t % 3 === 0) && (t % 5 === 0)) { 
    console.log("FizzBuzz" ,t);
    } else if (t % 3 === 0){
        console.log ("Fizz",t)
    } else if(t % 5 === 0) {
        console.log("Buzz",t)
    } else {
        console.log(t)
    }
   
}
