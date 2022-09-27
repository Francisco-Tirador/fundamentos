//for es practicamente un for pero para objetos

const arr=pro({
    name: "anode",
    color: "white",
  
})

for(let val in arr){
    //console.log(val)
   // console.log(arr[val])
}

function pro(kal){

const users={}

for(let i=0;i<kal.length;i++){
    users[kal][i]="hola"
    
}




console.log(users)
}

console.log(arr)
pro("email","raro")
pro("age")