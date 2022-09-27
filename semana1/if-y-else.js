


/*const age = 20;
const adult = age >= 18;

if(adult) {// se puede interpretar como, una condicion que se cumple y si no se aplica else
    console.log('Eres aceptado');
} else {
    console.log('No eres aceptado');
}*/

// si eres mayor o tienes 60 años o estás embarazada te vacunas en enero 
// si eres mayor o tienes 40 años pero menor de 60 te vacunas en febrero
// si eres menor de 40 te vacunas en marzo



function x(users) {
    
    
    for(let i=0;i<users.length; i++){
    
        if(users[i].age >= 60 || users[i].pregnant) {
        console.log('Te vacunas en Enero');
    } else if(users[i].age >= 40) {
        console.log('Te vacunas en febrero')
    } else {
        console.log('Te vacunas en marzo');
    }

}
}


const users = x([
    { age: 20, pregnant: true },
    { age: 59, pregnant: false },
    { age: 39, pregnant: false }
]);


console.log(users);


// La función debe de retornar o imprimir con console.log cuándo debe de vacunarse cada usuario del arreglo users



// Otro ejercisio de if con for
function suma(users,email){

    const recibido=[]
    const lon=users.length
    
    for(let i=0;i<lon;i++){
        const fo=users[i]
        const adjud=users[i].email
         
        
         if(adjud!==email){
        
            recibido.push(fo)
        }
    }
        
    return recibido
    
    }
    
    const users = [
        { 
            name: 'Erik',email: 'erik@academlo.com' }, 
            { name: 'Georg',email: 'georg@academlo.com' }, 
            { name: 'Andrea', email: 'andrea@gmail.com' }];
           
    
    const email='andrea@gmail.com'
    
    const lo =suma(users,email)
    //console.log(go)
    console.log(lo)
    