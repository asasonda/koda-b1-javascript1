const s = 10;
const isLuas = false;
let luas, keliling;

if(s !== NaN){
    if (isLuas) {
      luas = s * s;
      console.log(luas)
    }
    else{
        keliling = 4 * s
        console.log(keliling)
    }
}
else{
    console.log(`Harus Angka`)
}

