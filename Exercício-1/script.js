/*
1) Calculadora de Imposto de Renda: Crie um programa que leia a renda anual de um usuário e calcule o imposto a ser pago com base nas faixas: até R$ 22.847,76 (isento), de R$ 22.847,77 a R$ 33.919,80 (7,5%), de R$ 33.919,81 a R$ 45.012,60 (15%) e acima (22,5%). Apresente o valor digitado e o valor do imposto a ser pago.
*/

var rendaAnual = parseFloat(prompt("Digite sua renda anual:"));
var imposto;

if (rendaAnual <= 22847.76) {
    imposto = 0;
} else if (rendaAnual <= 33919.80) {
    imposto = (rendaAnual - 22847.76) * 0.075;
} else if (rendaAnual <= 45012.60) {
    imposto = (rendaAnual - 33919.80) * 0.15 + (33919.80 - 22847.76) * 0.075;
} else {
    imposto = (rendaAnual - 45012.60) * 0.225 + (45012.60 - 33919.80) * 0.15 + (33919.80 - 22847.76) * 0.075;
}

console.log("Renda Anual: R$ " + rendaAnual.toFixed(2) + "\nImposto a pagar: R$ " + imposto.toFixed(2));
