console.log("Home Task");
console.log("");

// 1. Buat method untuk menambahkan data ke dalam suatu array.
// 2. Buat method untuk mengambil data dari dalam array berdasarkan index
// 3. buat method untuk mengganti nilai dari sebuah index pada array

// Shahnaz Ferdiansyah
// BE Class

let Laptop = [];

function add(item) {
  Laptop.push(item);
}

function get(index) {
  return `Data Laptop pada daftar ke ${index + 1} ialah : ` + Laptop[index];
}

function change(index, value) {
  Laptop[index] = value;
  console.log(`Data pada daftar ke ${index + 1} telah diganti`);
}

add("RAM");
add("ROM");
add("CPU");
console.log("");
console.log(Laptop);
console.log(get(2));
console.log(get(1));
console.log(get(0));
console.log("");
change(1, "GPU");
change(2, "Battery");
console.log(get(1));
console.log(get(2));
console.log(Laptop);
