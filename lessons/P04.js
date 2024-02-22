//Javasript'te 5 farklı data tipi ile çalışılır
//String - Numbers - True/False - Null - Undefined

// var - let - const

var firstName="Murat"
let lastName="Arslan"
var age=36
var isHeStudent=false
var studentNumber=null
var saveYear=undefined


console.log("İsim: "+firstName+"\nSoyisim: "+lastName+"\nYaş: "+age)
// Concatination işlemi iki string değerin birliştirilmesi için kullanılır
// \n ifadesinin konulduğu yerden itibaren bir alt satırdan işlem yapmauya başlar

var number1=32
var number2=68
var number3="30"
var number4 ="70"

console.log(number1+number2)
console.log(number3+number4)
console.log(number1+number4) //String strongdur. yani baskındır.
 // number ile toplama yaparsak sayısal işlem yerine concatination yapar

 

 //Interpolation ${} içine javascript nesneleri koyarak bir data birleştirme işlemidir

 var message=`Yeni üyenin \nAdı: ${firstName}\nSoyadı: ${lastName}\nYaş:${age}` 
 console.log(message)