console.log("array");
//Tugas dibawah

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

//Tugas
// buat 3 array masing masing datanya 5
// ambil data untuk index yang ganjil

console.log("");
let Weekdays = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
let Rumah = ["Meja", "Kursi", "Jendela", "Lemari", "Pintu", "Rak"];
let Laptop = ["RAM", "ROM", "CPU", "GPU", "Battery", "keyboard"];

let ganjilWeekdays = [];
let ganjilRumah = [];
let ganjilLaptop = [];

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
