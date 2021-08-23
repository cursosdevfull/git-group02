const numero1 = prompt('Digite el primer número: ');
const numero2 = prompt('Digite el segundo número: ');

if (isNaN(numero1) || isNaN(numero2)) {
  console.log('Ingrese números y no cadenas');
}
