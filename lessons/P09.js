/*
Kullanıcın girdiği gün ismine göre hafta içi ya da hafta sonu şeklinde mesaj yazdırsın
*/

let day="pazartesi"
switch(day){
    case "pazartesi":
        console.log("Hafta İçi")
        break;
    case "salı":
        console.log("Hafta İçi")
    break;    
    case "çarşamba":
        console.log("Hafta İçi")
        break;
    case "perşembe":
        console.log("Hafta İçi")
        break;
    case "cuma":
        console.log("Hafta İçi")
        break;
    case "cumartesi":
        console.log("Hafta Sonu")
        break;  
    case "pazar":
        console.log("Hafta Sonu")
        break;   
    default:
        console.log("Lütfen geçerli bir gün giriniz")           

}