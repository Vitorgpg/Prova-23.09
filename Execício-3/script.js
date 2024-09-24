/*
3) Análise de Desempenho Escolar: Desenvolva um algoritmo que leia as notas de 4 bimestres de um aluno e calcule a média. Informe se o aluno foi aprovado (média ≥ 7), em recuperação (5 ≤ média < 7) ou reprovado (média < 5).
*/

var primeiroBimestre = parseFloat(prompt("Digite a nota do primeiro bimestre: "));
var segundoBimestre = parseFloat(prompt("Digite a nota do segundo bimestre: "));
var terceiroBimestre = parseFloat(prompt("Digite a nota do terceiro bimestre: "));
var quartoBimestre = parseFloat(prompt("Digite a nota do quarto bimestre: "));

var media = (primeiroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre) / 4;

if (media >= 7) {
    console.log("Aprovado com média: " + media.toFixed(1));
} else if (media >= 5 && media < 7) {
    console.log("Recuperação com média: " + media.toFixed(1));
} else if( media < 5) {
    console.log("Reprovado com média: " + media.toFixed(1));
} else {
    console.log("Dígite corretamente as notas bimestrais!");
}
