function laskeKeskiarvo(array)
{
    var summa = 0;
  
    for (var i = 0; i < array.length; i++) {
      summa += array[i];
    }
  
    return summa / array.length;
}

var maanantai = [18, 20, 22]
var tiistai = [5, -4, -2]
var keskiviikko = [-12, -16, -18]
var torstai = [1, -4, -6]
var perjantai = [-20, -25, -30]
var lauantai = [20, 0, -10]
var sunnuntai = [30, -20, 5]

var keskiarvoMaanantai = laskeKeskiarvo(maanantai);
var keskiarvoTiistai = laskeKeskiarvo(tiistai);
var keskiarvoKeskiviikko = laskeKeskiarvo(keskiviikko);
var keskiarvoTorstai = laskeKeskiarvo(torstai);
var keskiarvoPerjantai = laskeKeskiarvo(perjantai);
var keskiarvoLauantai = laskeKeskiarvo(lauantai);
var keskiarvoSunnuntai = laskeKeskiarvo(sunnuntai);

console.log("maanantaina:", keskiarvoMaanantai.toFixed(), "astetta");
console.log("tiistaina:", keskiarvoTiistai.toFixed(), "astetta");
console.log("keskiviikkona:", keskiarvoKeskiviikko.toFixed(), "astetta");
console.log("torstaina:", keskiarvoTorstai.toFixed(), "astetta");
console.log("perjantaina:", keskiarvoPerjantai.toFixed(), "astetta");
console.log("lauantaina:", keskiarvoLauantai.toFixed(), "astetta");
console.log("sunnuntaina:", keskiarvoSunnuntai.toFixed(), "astetta");



