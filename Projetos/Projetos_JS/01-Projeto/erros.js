/* 
  Error do ECMAScript
  >>Erro que acontece em tempo de execução, erro variavel não declara, ponto erros

  DOMExecption
  Document object model, js a um página da web.
*/
/* trhow e return

   try / catch / finally
*/
function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError('Envie os parâmetros');
    if (typeof arr !== 'object')
      throw new TypeError('Array precisa ser do tipo object');
    if (typeof num !== 'number')
      throw new TypeError('Num precisa ser do tipo number');

    if (arr.length !== num) throw new RangeError('Tamanho inválido! ');

    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log(
        'Este erro é um ReferenceErro! ' +
          ' ' +
          e.message +
          ' ' +
          e.name +
          ' ' +
          e.stack
      );
    } else if (e instanceof TypeError) {
      console.log(
        'Este erro é um TypeErro! ' +
          ' ' +
          e.message +
          ' ' +
          e.name +
          ' ' +
          e.stack
      );
    } else if (e instanceof RangeError) {
      console.log(
        'Este erro é um RangeErro! ' +
          ' ' +
          e.message +
          ' ' +
          e.name +
          ' ' +
          e.stack
      );
    } else {
      console.log(
        'Tipo de erro não esperado: ' + e.message + ' ' + e.name + ' ' + e.stack
      );
    }
  }
}

console.log(validaArray([1, 2, 3, 4], 5));
