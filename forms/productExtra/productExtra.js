
function product2(num1, num2){
  return(num1*num2)
}
numArray = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]
rProduct = numArray[0]
for(let j=1;j<numArray.length;j++){
  x = numArray[j]
	rProduct = product2(x,rProduct)
}

console.log(rProduct)
console.log(123*433*54326*2234*1919*1123*1928*3374*23*190*33874)