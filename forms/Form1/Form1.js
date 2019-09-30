
input = prompt("enter string to be sliced") 
let i = 0;

while (i < input.length){
  console.log(`letter ${i+1} is ${input.slice(i,i+1)}`)
  i++
}

//2
nameArray = ["Bob","Janet","Tom","Bob","Randy","Elizabeth","Kim","Nancy"]

for (i=nameArray.length-1; i>= 0; i--){
  console.log(nameArray[i])
}

//3 
//it will run 6 times

//4 
//it will run 5 times

//5
*/
function product2(num1, num2){
  return(num1*num2)
}

numArray = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]

for(i=0;i<numArray.length;i++){
  totalProduct = totalProduct + product2()
}
console.log(123*433*54326*2234*1919*1123*1928*3374*23*190*33874)


/*
for(let j=1;j<numArray.length;j++){
  x = numArray[j]
	rProduct = product2(x,rProduct)
}

console.log(rProduct)
console.log(123*433*54326*2234*1919*1123*1928*3374*23*190*33874)

//6
/*
A global variable is able to be referenced anywhere within the code of the program, regardless of how it is initialized or used. Wherever it is used, assuming it is not a constant, it can be altered. A local variable, however, can only be used in its own block of code such as a loop. A global variable is usually decalred at the top of the program within the main class. Often, constants are declared this way. A local variable is declared within loops, functions, if statements, etc. They are used as needed and then the computer "forgets" them to free up memory, as it will no longer be needed. 

//7
Global variables are often considered bad because they take up memory the entire time the program is running, which can cause issues in larger programs. Depending on how much they are used, it can also become near impossible to find where they are being altered. In larger programs, using a global variable when a local variable is all that is needed is incredibly wasteful in regards to memory and confusing in terms of readability for anyone not intimately familiar with the program, even with comments being included.
*/