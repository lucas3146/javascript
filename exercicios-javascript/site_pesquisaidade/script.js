function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var resp = document.getElementById('resultado')
    var anoag = Number(fano.value)
    if (anoag.length == 0 || anoag > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - anoag
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade <= 5) {
                //bebe
                img.setAttribute('src', 'img/homembebe.png')
            } else if (idade <= 12) {
                //criança
                img.setAttribute('src', 'img/homemcrianca.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'img/homemjovem.png')

            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'img/homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 5) {
                //bebe
                img.setAttribute('src', 'img/mulherbebe.png')
                img.src = 'img/mulherbebe.png'
            } else if (idade <= 12) {
                //criança
                img.setAttribute('src', 'img/mulhercrianca.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'img/mulherjovem.png')

            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'img/mulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/mulheridosa.png')
            }
        }
        resp.style.textAlign = 'center'
        img.style.borderRadius = '15rem'
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resp.appendChild(img)
    }

}