let r = 7
let luas
let keliling
let phi = 3.14

luas = phi * r * r
keliling = 2 * phi * r

console.log(luas)
console.log(keliling)

let tess = []
tess[0] = luas
tess[1] = keliling

let masukinObjek = {
  nama: "",
};
masukinObjek.nama = "Luas Lingkaran";

console.log(typeof luas)
console.log(typeof keliling)
console.log(typeof r === "Number")

console.log(tess instanceof Date)
console.log(masukinObjek instanceof Date);

console.log(Array.isArray(tess))
