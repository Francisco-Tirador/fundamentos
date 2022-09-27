

const are1=[
    { name: 'Georg', email: 'georg@academlo.com' },
    { name: 'Andrea', email: 'andrea@gmail.com' }
  ]

const are2=[
    { email: 'georg@academlo.com', attendance: true },
    { email: 'andrea@gmail.com', attendance: false }
  ]

const arra=[]


  for(let i=0;i<are1.length&&i<are2.length;i++){
      
    const to=(are1===are2)
    if(are1[i].gmail!==are2[i].gmail){
          arra.push(to)
          
      }
  }
  const aw=are1.splice([1].email)

  console.log(aw)