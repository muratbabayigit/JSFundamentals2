//Arrays
var cars=["BMW","AUDI","VOLVO","MERCEDES","TOGG"]


console.log(cars[3])
console.log(cars.length)// Array'in eleman sayısını verir

cars[2]="RENAULT"
console.log(cars)

//Push() metodu dizinin sonuna yeni bir eleman ekler
cars.push('VOLVO')
console.log(cars)
//pop() metodu dizinin sonundak elemanı kaldırır
cars.pop()
console.log(cars)

//shift() metodu dizinin başındaki elemanı kaldırır
cars.shift()
console.log(cars)
//unshift() metodu diziye bir veya daha fazla eleman ekler
cars.unshift('BMW',"FORD")
console.log(cars)

//splice() metodu belirlibir indexten başlayarak diziye eleman ekler veya kaldırır
//slice() metodu belirli bir bölüme işlemini yapar
//indexOf() metdou belirli bir elemanın indexini bulur
//concat() metodu birden fazla diziyi birleştirir.
