// ***Operações matemáticas básicas*** 


let n1 = prompt('Digite o primeiro número: ');
let n2 = prompt('Digite o segundo número: ');

let x = Number(n1);
let y = Number(n2);

sum = x + y;
minus = x - y;
mult = x*y;
div = x/y;
restDiv = x % y;



alert('Resultado para a soma: ' +sum);
alert('Resultado para a subtração: ' +minus);
alert('Resultado para a multiplicação: ' +mult);
alert('Resultado para a divisão: ' +div);
alert('Resultado para o resto da divisão: ' +restDiv);
if(sum % 2 == 0) {
alert(`O número '${sum}' é par`)
} else {
  alert(`O número '${sum}' é impar`)
}

