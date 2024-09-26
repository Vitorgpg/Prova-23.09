/*
4) Apresente o Menu de Lanches:
1 -> X-SALADA-> R$ 20,00
2 -> X-BACON-> R$ 25,00
3 -> X-TUDO-> R$ 23,00
4 -> BAURU -> R$ 29,99
5 -> AMERICANO -> 22,50

Apresente o Menu de Bebidas:
Refrigerante Lata -> R$ 5,00
Refrigerante 2L -> R$ 10,00
Agua -> R$ 3,50
Suco -> R$ 7,50

Solicite ao usuário qual Lanche e quantidade que deseja comprar, qual refrigerante e quantidade, ao final apresente as formas de pagamento:
PIX - 10% de desconto.
Dinheiro - 5% de desconto.
Débito - 3% de desconto.
Crédito - sem desconto.
Apresente todos os dados da compras, com seus calculos e valores;
*/

var lancheEscolhido = parseInt(prompt("Cardápio de Lanches:\n" +
    "1 -> X-SALADA -> R$ 20,00\n" +
    "2 -> X-BACON -> R$ 25,00\n" +
    "3 -> X-TUDO -> R$ 23,00\n" +
    "4 -> BAURU -> R$ 29,99\n" +
    "5 -> AMERICANO -> 22,50\n" +
    "Digite o número do lanche que você quer:"));

var quantidadeLanche = parseInt(prompt("Quantos lanches você deseja comprar?"));

var valorLanche = 0;

if (lancheEscolhido == 1) {
    valorLanche = 20.00;
} else if (lancheEscolhido == 2) {
    valorLanche = 25.00;
} else if (lancheEscolhido == 3) {
    valorLanche = 23.00;
} else if (lancheEscolhido == 4) {
    valorLanche = 29.99;
} else if (lancheEscolhido == 5) {
    valorLanche = 22.50;
} else {
    alert("Opção inválida de lanche.");
}

var bebidaEscolhida = parseInt(prompt("Cardápio de Bebidas:\n" +
    "1 -> Refrigerante Lata -> R$ 5,00\n" +
    "2 -> Refrigerante 2L -> R$ 10,00\n" +
    "3 -> Água -> R$ 3,50\n" +
    "4 -> Suco -> R$ 7,50\n" +
    "Digite o número da bebida que você quer:"));

var quantidadeBebida = parseInt(prompt("Quantas bebidas você deseja comprar?"));
var valorBebida = 0;

if (bebidaEscolhida == 1) {
    valorBebida = 5.00;
} else if (bebidaEscolhida == 2) {
    valorBebida = 10.00;
} else if (bebidaEscolhida == 3) {
    valorBebida = 3.50;
} else if (bebidaEscolhida == 4) {
    valorBebida = 7.50;
} else {
    console.log("Opção inválida de bebida.");
}

var totalLanche = valorLanche * quantidadeLanche;
var totalBebida = valorBebida * quantidadeBebida;
var valorTotal = totalLanche + totalBebida;

var formaPagamento = parseInt(prompt("Escolha a forma de pagamento:\n" +
    "1 -> PIX (10% de desconto)\n" +
    "2 -> Dinheiro (5% de desconto)\n" +
    "3 -> Débito (3% de desconto)\n" +
    "4 -> Crédito (Sem desconto)\n" +
    "Digite o número da forma de pagamento:"));

var desconto = 0;

if (formaPagamento == 1) {
    desconto = valorTotal * 0.10;
} else if (formaPagamento == 2) {
    desconto = valorTotal * 0.05;
} else if (formaPagamento == 3) {
    desconto = valorTotal * 0.03;
} else if (formaPagamento == 4) {
    desconto = 0;
} else {
    console.log("Forma de pagamento inválida.");
}

var valorFinal = valorTotal - desconto;

console.log(
("Resumo da compra:\n" +
    "Total Lanches: R$ " + totalLanche.toFixed(2) + "\n" +
    "Total Bebidas: R$ " + totalBebida.toFixed(2) + "\n" +
    "Valor Total: R$ " + valorTotal.toFixed(2) + "\n" +
    "Desconto: R$ " + desconto.toFixed(2) + "\n" +
    "Valor Final a pagar: R$ " + valorFinal.toFixed(2)));
