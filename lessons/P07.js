//Operators
var a=12
var b=15
var c=a+b
//console.log(c)
//console.log(b-a)
//console.log(a*c)
//console.log(c/a)


//console.log(a)
a+=3  //Bu arttırma operatoründe a değeri 3 arttırılır ve a'nın yeni değeri olarak atanır
//console.log(a)
//console.log("------------------------------------------------------")
//console.log(b)
b-=5
//console.log(b)

a*=4
//console.log(a)
a/=5
//console.log(a)

a=a%7
//console.log(a)

//Logical Operators

//AND && Operatoru

var isAgeMoreThanEighteen=true
var isAgeMoreThanSixteen=true
var isTurkishCitizen=false

var isEligibleDriverLicence;

isEligibleDriverLicence= isAgeMoreThanEighteen && isTurkishCitizen 
//&& operatoru kullanilirsa sartın her ikisi de doğrulanmalıdır

console.log("Ehliyet Alabilir mi?: "+isEligibleDriverLicence)


//OR Operatoru

isEligibleDriverLicence=isAgeMoreThanEighteen || isAgeMoreThanSixteen && isTurkishCitizen
// || operatoru kullanilirsa sartlardan birinin saglanmasi yeterlidir

console.log("Ehliyet Alabilir mi?: "+isEligibleDriverLicence)






