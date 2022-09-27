

function mayor(students){

  
let mostCommonAge=0;
const BaseOfData=[];
const ages=[];
const counts=[]
let contador=1;
let highestValue=0;
for (let i=0;i<students.length;i++){
BaseOfData[i]=students[i].age
};
BaseOfData.sort();

for( x=0;x<BaseOfData.length;x++){
  if(BaseOfData[x+1]===BaseOfData[x]){
    contador++
  }else{
    ages.push(BaseOfData[x])
    counts.push(contador)
    contador=1
  }
}
  let indexHigesValue= -1
  for(y=0;y<counts.length;y++){
    if(counts[y]>highestValue){
      highestValue=counts[y]
      indexHigesValue= y

    }
  }
  mostCommonAge= ages[indexHigesValue]
  
  return mostCommonAge
}







const conteo=mayor([
  { name: 'Daniela', age: 28 },
  { name: 'Andrea', age: 23 },
  { name: 'José', age: 27 },
  { name: 'Georg', age: 23 },
])

 console.log(conteo)

// const ya=[1,2,3,5,4,4,7,1,10,100].sort((a,b)=>a-b)
// console.log(ya)

// const array1 = [3, 1, 2, 3, 4, 5, 6, 7, 8, 3, 4, 5, 7, 3, 2, 6, 3, 6, 4, 7, 5, 8, 3, 6, 9, 3, 5];

// const busqueda = (arreglo, callback) => {
//     let variable = 0;
 
//     let cuenta = 0;
//     arreglo.map(p => {
//         cuenta = 0
//         arreglo.map(x => {
//             if (p == x) {  }
//         })
//         if (cuenta > contador) {
//             contador = cuenta;
//             variable = p;
//         }
//     });
//     callback(`valor mas repetido:${variable}, numero de veces contada: ${contador}`)

// }

// busqueda(array1, (respuesta) => {
//     console.log(`respuesta: ${respuesta}`)
// });
