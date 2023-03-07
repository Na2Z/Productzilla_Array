console.log("array");
//Tugas 1 dan 2 dibawah

// Shahnaz Ferdiansyah
// BE Class

console.log("");
let wadah = ["Gelas", "Piring", "Cangkir", "Toples"];
console.log(wadah.length);

console.log(wadah[1]);
wadah.push("Botol");
console.log(wadah.length);
wadah[1] = "Mangkuk";

console.log(wadah);
delete wadah[4];
console.log(wadah.length);
console.log(wadah);
console.log(wadah[wadah.length - 1]);
//unshift untuk push dari depan
wadah.unshift("Box");
console.log(wadah);

// Tugas 1
// buat 3 array masing masing datanya 5
// ambil data untuk index yang ganjil

console.log("");
console.log("Tugas 1");

let Weekdays = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
console.log(Weekdays);
let Rumah = ["Meja", "Kursi", "Jendela", "Lemari", "Pintu", "Rak"];
console.log(Rumah);
let Laptop = ["RAM", "ROM", "CPU", "GPU", "Battery", "keyboard"];
console.log(Laptop);

let ganjilWeekdays = [];
let ganjilRumah = [];
let ganjilLaptop = [];

console.log("Ganjil Saja be like : ");

for (let i = 0; i < Weekdays.length; i++) {
  if (i % 2 === 1) {
    ganjilWeekdays.push(Weekdays[i]);
  }
}
console.log(ganjilWeekdays);

for (let i = 0; i < Rumah.length; i++) {
  if (i % 2 === 1) {
    ganjilRumah.push(Rumah[i]);
  }
}
console.log(ganjilRumah);

for (let i = 0; i < Laptop.length; i++) {
  if (i % 2 === 1) {
    ganjilLaptop.push(Laptop[i]);
  }
}
console.log(ganjilLaptop);

console.log("");
console.log("Tugas 2");
//Tugas 2
// buat simpan semua array di no 1 ke dalam array baru
// tampilkan di index genap saja

let Jadisatu = [Weekdays, Rumah, Laptop];
console.log(Jadisatu);

let genap = [];

console.log("");
for (let i = 0; i < Jadisatu.length; i++) {
  for (let j = 0; j < Jadisatu[i].length; j++) {
    if (j % 2 == 0) {
      genap.push(Jadisatu[i][j]);
    }
  }
}

console.log(genap);
//finally
