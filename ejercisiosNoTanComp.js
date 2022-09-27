function mergeData(are1, are2) {// se toman dosparametroscon areglosy sequiere metertodoslos elementosen uno
                               //solo sin tenerningunorepetido 
    for(let i=0; i <are1.length; i++ ) {//sedeclarandosforparacadaparametro|| por cada valor de for de are1 se va
                                        //va a recorrer el numero total de are2 
    
      for(let j=0; j <are2.length; j++ ) {// for anidados
        if(are1[i].email ==are2[j].email ) {  //a todos los if se les da la istruccion de que si elementos email 
                                          //son iguales se ejecuta el siguiente ak
           are2[j].name= are1[i].name//una vez que sus email son iguales se redeclara un elemento que no esta declarado 
                                  //en este caso el are 2 no tiene nombres y se redeclara estos elementos faltantes
        }
    }
    } return are2// nota se puede retornar a los mismo parametros !!!
  }

const are1=[
    { name: 'Georg', email: 'georg@academlo.com' },
    { name: 'Andrea', email: 'andrea@gmail.com' },
   {name:"garp", email:"hsdjsd@hotmail.com"}
  ]

const are2=[
    {email:"hsdjsd@hotmail.com", attendance: false, },
    { email: 'georg@academlo.com', attendance: true },
    { name: 'andrea@gmail.com', attendance: false }
  ]

const accion=mergeData(are1,are2)

console.log(accion)

