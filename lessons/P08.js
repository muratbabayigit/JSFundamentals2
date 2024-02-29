//Conditional Statements - Koşullu Durumlar
// İf - Else Statements   Switch-Case Statements

/*
Koşullu durumlarda
belirli bir duruma bağlı olarak çalışan kod bloklarının çalışmasıdır
*/

var hour = 21

if (hour<12){
    console.log("Günaydın")
}


let age =68

if(age<18){
    console.log("Çocuk")
}else if (age>=18 && age<65){
    console.log("Yetişkin")
}else{
    console.log("Yaşlı")
}

/*
Kullanıcının girdiği mevsime göre 
bir tavsiye veren bir JavaScript programı
 yazınız.
*/

let season= "kış"

if(season=="ilkbahar"){console.log("Mevsim ilkbahar, havanın tadını çıkar")}
else if(season=="yaz"){console.log("Lütfen Güneşe ateş etmeyiniz")}
else if(season=="sonbahar"){console.log("Hüzün mevsimi sonbahardasınız")}
else{console.log("Her yer ne güzel kar'ın tadını çıkar")}

//Switch - Case Statements

