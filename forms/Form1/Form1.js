
input = prompt("enter string to be sliced") 
let i = 0;

while (i < input.length){
  console.log(`letter ${i+1} is ${input.slice(i,i+1)}`)
  i++
}

