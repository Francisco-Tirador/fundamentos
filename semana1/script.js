

function encontrado(users, Nomb){

for(let i=0;i<users.length;i++){
    if(users[i].name===Nomb){
        return users[i]

        
    }
}
return  rayo.reduce()
}





const users = [
    {
        name: 'Erik',
        gender: 'male',
        age: 22,
    },
    {
        name: 'Daniela',
        gender: 'female',
        age: 22,
    },
    {
        name: 'Gustavo',
        gender: 'male',
        age: 49,
    },
    {
        name: 'lala',
        gender: 'female',
        age: 35,
    },
];

const Nomb="Gustavo"

const parametros=encontrado(users,Nomb)




//sadasdasdasdasdasdasdadsasdas

const balloons = [ 
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' },
    { color: 'yellow' },
    { color: 'red' },
    { color: 'yellow' },
];


// Contar cuantos globos hay de cada color, puede haber N cantidad de colores
const total = {};
for (let i = 0; i < balloons.length; i++) {
    const color = balloons[i].color;
    total[color] ? total[color]++ : total[color] = 1
    
}


//Encontrar cuál color se repite más veces
let number = 0;
let col = null;

for (let color in total) {
    if(total[color] > number) {
        number = total[color];
         col= color;
    }
}
console.log();

