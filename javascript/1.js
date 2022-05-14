//alert("SEJA BEM-VINDO")
//document.write("Bem vindo ao javascript")
//prompt("Qual seu nome:")
//confirm("Será que vai chover?")
/*alert("Um retorno de carro|bem no meio desta lina")
alert("|Isto naõ saiu como deverria!"|"disse ela")
alert("esta linha tem tabulação|taqui")*/

/*var a = 5
var b = "5Kg de açucar"
document.write(`O valor da variávelé ${a+a} `)
document.write(`<p> O valor da variável b é ${b} <p>`)
document.write(`<p> O valor da variável A dividido por 2 é ${a/2} <p>`)
document.write(`<p> O valor da variável B dividido por 2 é ${b/2} <p>`)
*/

/*
var a, inteir0, flutuante
a = "45.78KG de açucar"
inteiro = parseInt(a)
flutuante = parseFloat

document.write(` <p> O valor da variável A é ${a+a} <p>`)
document.write(`<p> O valor numerico inteiro da variável é ${inteiro}<p>`)
document.write(`<p> O valor da variável A dividido por 2 é ${inteiro/2} <p>`)
document.write(` <p> valor da variável decimal da variável é ${fltuante} <P>`)
*/

/*
var a = "Olá pessoal "
var b = "sejam bem-vindos"
var c = a+ b

alert(c)
*/

/*
var a = 50
var b = 100
var c = 25
var d = 50
var f = 50

document.write(`<p>50 / 2 é ${a/2}<p>`)
document.write(`<p>100 x 5 é ${b*5}<p>`)
document.write(`<p>25 x 2 é ${c*2}<p>`)
document.write(`<p>50 - 50 é ${50-50}<p>`)
document.write(`<p>50 % 2 é ${50%2}<p>`)
*/

/*
hoje = new Date()
xDia = hoje.getDay()
diaSemana = new Array(7)
diaSemana[0] = "domingo"
diaSemana[1] = "Segunda-feira"
diaSemana[2] = "terça-feira"
diaSemana[3] = "Quarta-feira"
diaSemana[4] = "Quinta-feira"
diaSemana[5] = "Sexta-feira"
diaSemana[6] = "Sábado"

document.write(`O número da semana é ${xDia+1}`)
document.write(`<p> <b> hoje é ${diaSemana[xDia]}`)
*/

hoje = new Date()
xDia = hoje.getDay()
diaSemana = new Array(7)
precoPrato = new Array(7)
pratoDia = new Array(7)

diaSemana[0] = "domingo"
diaSemana[1] = "Segunda-feira"
diaSemana[2] = "terça-feira"
diaSemana[3] = "Quarta-feira"
diaSemana[4] = "Quinta-feira"
diaSemana[5] = "Sexta-feira"
diaSemana[6] = "Sábado"

precoPrato[0] = "45R$"
precoPrato[1] = "25R$"
precoPrato[2] = "25R$"
precoPrato[3] = "30R$"
precoPrato[4] = "35R$"
precoPrato[5] = "35R$"
precoPrato[6] = "35R$"


pratoDia[0] = "Feijoada"
pratoDia[1] = "Filé de frango"
pratoDia[2] = "Bife a parmediana"
pratoDia[3] = "Macarrão"
pratoDia[4] = "Peixe"
pratoDia[5] = "strogonoff"
pratoDia[6] = "Carne cozida"


document.write(`<p> Hoje teremos ${pratoDia[xDia]} <p>`)
document.write(`<p>O valor do prato de hoje é ${precoPrato[xDia]}<p>`)
document.write(`HOje teremos ${pratoDia[xDia]} por apenas ${precoPrato[xDia]} `)

