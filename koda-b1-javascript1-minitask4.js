const mode = "fizzbuzz";

switch (mode) {
  case "fizzbuzz":
    for (let i = 1; i <= 20; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        console.log("fizzbuzz");
        continue;
      }
      console.log(i);
    }
    break;
  case "odd-even":
    let a = 1;
    while (a <= 10) {
      if (a % 2 == 0) {
        console.log(`${a}. Genap`);
      } else {
        console.log(`${a}. Ganjil`);
      }
      a++;
    }
    break;
  case "multiplication":
    let tambah = 1;
    for (let b = 1; b <= 10; b++) {
      tambah += 1;
      console.log(tambah);
    }
    break;
  default:
    console.log("Mode Tidak tersedia");
}
