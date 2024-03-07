//Loops

//for i loop

// for(koşul1, koşul2, koşul3)

for(i=0; i<5; i++){console.log("Hello World!")}
console.log('------------------------------------------------------')
console.log('------------------------------------------------------')

var students=['Ahmet','Ali','Murat',"Tarik",'Berk','Esma','Sena']
for(let student of students ){
    console.log(student)
}
console.log('------------------------------------------------------')
console.log('------------------------------------------------------')

for(let student of students ){
    console.log(student)
    if(student=='Berk')
    break
}

//ES6 Syntax

students.forEach(student=>{console.log(student)})

//while loop
let a=0;

while(a<10){
    console.log("Merhaba")
    a+=10
}


