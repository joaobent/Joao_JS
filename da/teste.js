const entrada= require('prompt-sync')({sigint: true});
let a;
let b;
a = entrada('Digite seu nome: ');
b = entrada('Digite sua idade: ');
console.log('\nÓla meu nome é',a ,'tenho', b,'anos');

console.log('------------')

console.log('banana'.toUpperCase());
console.log('Banana'.toLowerCase());

console.log('------------')

var nome2="Hiago Gabiel";
var numero=19;
console.log(typeof nome2);
console.log(typeof numero);

console.log('------------')

var imc=53/(1.70*1.70);
console.log(imc);

console.log('------------')

let c;
let d;
c = entrada('Digite um número: ');
d = entrada('Digite outro número: ');
c= parseFloat(c);
d= parseFloat(d);
let soma=c+d
console.log(`A soma dos dois números é: ${soma}`);
let menos=c-d
console.log(`A subtração dos numeros é: ${menos}`);
let vezes=c*d
console.log(`A multiplicação dos numeros é: ${vezes}`)
let divisao=c/d
console.log(`A divisão dos numeros é: ${divisao}`)

console.log('------------')

let e;
let f;
e = entrada('digite uma idade: ');
f = entrada('digite outra idade:');
e= parseFloat(e);
f= parseFloat(f);


if (e>f) {
    console.log("\nA primeira idade é maior que a segunda idade")
} else if (e<f) {
    console.log("\nA primeira idade é menor que a segunda idade")
} else {
    console.log("\nAs idades são iguais")
}
console.log('------------')

let g;
g= entrada('Digite uma idade: ');
g= parseFloat(g);

if (g>=18)
    console.log('\nMaior de idade')
else
    console.log('\nMenor de idade');

console.log('------------')

let h;
h= entrada('Digite um número: ');
h= parseFloat(f);
if(h%2==0)
    console.log('É um numero par')
else
    console.log('É um numero impar')