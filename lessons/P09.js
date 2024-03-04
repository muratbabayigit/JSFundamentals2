/*
Kullanıcın girdiği gün ismine göre hafta içi ya da hafta sonu şeklinde mesaj yazdırsın
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hangi günün olduğunu yazınız (Pazartesi, Salı, Çarşamba, Perşembe, Cuma, Cumartesi, Pazar): ', (day) => {
  switch(day.toLowerCase()) {
    case 'pazartesi':
    case 'salı':
    case 'çarşamba':
    case 'perşembe':
    case 'cuma':
      console.log(`${day} hafta içi günüdür.`);
      break;
    case 'cumartesi':
    case 'pazar':
      console.log(`${day} hafta sonu günüdür.`);
      break;
    default:
      console.log('Geçersiz gün adı girdiniz.');
  }
  
  rl.close();
});
