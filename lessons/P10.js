//functions

//parametresiz fonksiyon
function getAge(){
        console.log(`Ben ${2024-1980} yaşındayım`)
}

getAge()


//parametreli Fonksiyon
function getAge2(thisYear,birthyear){
    console.log(`Ben ${thisYear-birthyear} yaşındayım`)

}

getAge2(2024,1980)


var helloWorld =function(){
    console.log("Hello World")
}

helloWorld()


let helloWorld2 = function(message){
    console.log(message)


}

helloWorld2("Hello World - 2")


var helloWorld3= () => {
    console.log("Hello World - 3")
}

helloWorld3()


var printName = (firstName,lastName) => {
    console.log(firstName, " ", lastName)
    
}

console.log("Murat","Yiğit")

function ikiKatiniBul(number){
 var result=number*2

    return result
 
}

var sonuc=ikiKatiniBul(2158)
console.log(sonuc)

