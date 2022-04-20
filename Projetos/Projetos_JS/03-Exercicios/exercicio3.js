const valorDias = 400;

let anos, mes, dias;

anos = parseInt(valorDias / 365);
console.log(anos);
mes = parseInt((valorDias % 365) / 30);
console.log(mes);
dias = parseInt((valorDias % 365) % 30);
console.log(dias);
