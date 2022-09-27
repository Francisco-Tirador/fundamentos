
// function sumEvens(start, end) {
//     const finaol=[]
//    let total=0
   
//    for(let i=start;i<end;i+=start){
//        if(i!==start){
//            finaol.push(i)}
        
//       }
   
   
//    for(let numero of finaol){
    
//        total+=numero
    
//    }
   
//    return finaol
//    }




// const num1=20

// const num2=100

// const sum=sumEvens(num1,num2)

// console.log(sum)


//||||||||||||||||||||||||||||||||||||||||||||||||||

// function conteo(phrase,letter){
//     const par =Array.from(phrase);
//     const obj={};
//    let contador=0; 
// let fu="a"
//     //const gal=obj.a
  

//     for(let i=0;i<par.length;i++){
//         obj[par[i]]?obj[par[i]]++:obj[par[i]]=1
// }
// for(let position in obj){
// if(obj[position]>contador){if(position!==' '){
//     contador=obj[position]
//     fu=position

// }
// }

// }


// return fu
// }


// const word="hola me llamo Erick"

// const letter="a"

// const parametros=conteo(word,letter)

// console.log(parametros)

//°°°°°°°|||||||||||||||||||||||||||||||||||||||||

// function accion(users){
//     const final=[]
//     const ar={}
    
//     for(let i=0;i<users.length;i++){
//         if(users[i].application!== null){
//             final.push(users[i].channel)
//         }
// }
// for(let a=0;a<final.length;a++){
//     ar[final[a]]?ar[final[a]]++:ar[final[a]]=1
// }




// return ar

// }


// const dates=accion([
//     { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null },
//     { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } },
//     { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } },
//     { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } }
//     ]);

// console.log(dates)

//|||||||||||||||||||||||||||||||°°°°°°°°°°°°°°°°°°°°°°°°°°°

// function sumTwoArrays(array, array2) {
// const union=array.concat(array2)
// let total=0

// for(let position in union){
// total+=union[position];



// }
// return total
// }


// const arr1=[20,100]
// const arr2=[30,10]
// //arr1.concat(array2)

// const sum=sumTwoArrays(arr1,arr2)

// console.log(sum)

function getNMultiples(number, totalMultiples) {
    const sumaDeli=totalMultiples+2
    const multipliDeli=number*sumaDeli
    const total=[]

for(let i=number;i<multipliDeli;i+=number){
    if(i!==number){
       

       total.push(i)

    }
}


    return total
}


const inicio=20
const delimitacion=10

const rac=getNMultiples(inicio,delimitacion)

console.log(rac)


// function dificil(text){
//     const combercion=Array.from(text)
//     const invertir=combercion.reverse()
//     const final=invertir.toString()
    
    
// return final.replace(/,/g,"")

// }
// const word=dificil("HOLA buenas tardes")

// console.log(word)
