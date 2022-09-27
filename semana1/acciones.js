function mayor(users){

let comparator= 0;
let comber={}
let bor="hola"

for(let i=0;i<users.length;i++){
    const ager=users[i].age
   comber[ager]?comber[ager]++:comber[ager]=1
}
//age.sort()





for(let nom in comber){
    if(comber[nom]>comparator){
        comparator=comber[nom]
        bor=nom
         }
}


return Number(bor)
}


let na= null

const conteo=mayor([
    { name: 'Daniela', age: 28 },
    { name: 'Andrea', age: 24 },
    { name: 'José', age: 28},
    { name: 'Georg', age: 28},
  ])

  console.log(conteo)
  console.log()