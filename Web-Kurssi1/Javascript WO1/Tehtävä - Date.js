var nykyPaiva = new Date();
var syntymaPaiva = new Date(2005, 11, 4);
var vuosierotus = nykyPaiva.getFullYear() - syntymaPaiva.getFullYear();

console.log(vuosierotus)