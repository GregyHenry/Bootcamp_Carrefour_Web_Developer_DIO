const linhas = 5;

if (linhas >= 1 || linhas <= 1000) {
  for (let i = 1; i <= linhas; i++) {
    let x = i;
    let y = i * i;
    let w = i * i * i;
    console.log(x, y, w);
  }
}
