
/*function maquina(users){
const correos=[];

for(let i=0; i<users.length; i++){
    const extraer=users[i].email;
    correos.push(extraer)
}
return correos

}

const users=maquina([
{ name:"rodrigo", email:"goku1@gmail.com", age:22},
{ name:"rodrigo", email:"goku2@gmail.com", age:65},
{ name:"rodrigo", email:"goku3@gmail.com", age:12},
{ name:"rodrigo", email:"goku4@gmail.com", age:79},
{ name:"rodrigo", email:"goku5@gmail.com", age:33},

]);


console.log(users)
*/

[
    [
      { name: 'Erik', email: 'erik@academlo.com' },
      { name: 'Georg', email: 'georg@academlo.com' },
      { name: 'Andrea', email: 'andrea@gmail.com' }
    ],
    [],
    []
  ]

  
function conteo(students, countries, countryName) {

  const sumRain=[]
    for(let a=0;a<students.length; a++){
      for(let b=0;b<countries.length; b++){
       
  
       if(students[a].country_id===countries[b].id) {
         if(countries[b].name===countryName){
           
           
           const tar=students.length
           sumRain.push(tar)
           }  
          }
         }
    }
      return (sumRain.length)
  }
  
  
      
  
  
  const dateUsers=[
      { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
      { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
      { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
      { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
    ]
  
  
   const contries= [
      { id: 1, name: 'Mexico', },
      { id: 2, name: "Colombia" }
    ]
  
    const seleccion="Colombia"
  const ra=dateUsers.length
  console.log(ra)
  
    const cont=conteo(dateUsers,contries,seleccion)
    console.log(cont)