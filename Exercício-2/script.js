/*
2) Elabore um programa que receba o salário bruto mensal de um funcionário e apresente a faixa e valor do desconto de INSS e IRRF e o valor liquido do salário baseado na seguinte tabela:

INSS (Instituto Nacional do Seguro Social):
Até R$ 1.302,00: 7,5%
De R$ 1.302,01 até R$ 2.571,29: 9%
De R$ 2.571,30 até R$ 3.856,94: 12%
Acima de R$ 3.856,94: 14%

IRRF (Imposto de Renda Retido na Fonte):
Até R$ 1.903,98: Isento
De R$ 1.903,99 até R$ 2.826,65: 7,5%
De R$ 2.826,66 até R$ 3.751,05: 15%
De R$ 3.751,06 até R$ 4.664,68: 22,5%
Acima de R$ 4.664,68: 27,5%
*/

var salarioBruto = parseFloat(prompt("Digite seu salário bruto mensal:"));
var inss;
var irrf;
var salarioLiquido;

if (salarioBruto <= 1302.00) {
    inss = salarioBruto * 0.075;
} else if (salarioBruto <= 2571.29) {
    inss = (1302.00 * 0.075) + ((salarioBruto - 1302.00) * 0.09);
} else if (salarioBruto <= 3856.94) {
    inss = (1302.00 * 0.075) + ((2571.29 - 1302.00) * 0.09) + ((salarioBruto - 2571.29) * 0.12);
} else {
    inss = (1302.00 * 0.075) + ((2571.29 - 1302.00) * 0.09) + ((3856.94 - 2571.29) * 0.12) + ((salarioBruto - 3856.94) * 0.14);
}

var baseCalculoIR = salarioBruto - inss;

if (baseCalculoIR <= 1903.98) {
    irrf = 0;
} else if (baseCalculoIR <= 2826.65) {
    irrf = (baseCalculoIR - 1903.98) * 0.075;
} else if (baseCalculoIR <= 3751.05) {
    irrf = (2826.65 - 1903.98) * 0.075 + (baseCalculoIR - 2826.65) * 0.15;
} else if (baseCalculoIR <= 4664.68) {
    irrf = (2826.65 - 1903.98) * 0.075 + (3751.05 - 2826.65) * 0.15 + (baseCalculoIR - 3751.05) * 0.225;
} else {
    irrf = (2826.65 - 1903.98) * 0.075 + (3751.05 - 2826.65) * 0.15 + (4664.68 - 3751.05) * 0.225 + (baseCalculoIR - 4664.68) * 0.275;
}

salarioLiquido = salarioBruto - inss - irrf;

console.log("Salário Bruto: R$ " + salarioBruto.toFixed(2) +
    "\nDesconto INSS: R$ " + inss.toFixed(2) +
    "\nDesconto IRRF: R$ " + irrf.toFixed(2) +
    "\nSalário Líquido: R$ " + salarioLiquido.toFixed(2));
