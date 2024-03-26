function atualizarPerfil(perfilData) {
    const foto = document.getElementById('perfil.foto')
    foto.src = perfilData.foto
    foto.alt = perfilData.name


    const nome = document.getElementById('perfil.nome')
    nome.innerText = perfilData.nome

    const trabalho = document.getElementById('perfil.trabalho')
    trabalho.innerText = perfilData.trabalho

    const localizacao = document.getElementById('perfil.localizacao')
    localizacao.innerText = perfilData.localizacao

    const contato = document.getElementById('perfil.contato')
    contato.innerText = perfilData.contato
    contato.href = `tel:${perfilData.contato}`

    const email = document.getElementById('perfil.email')
    email.innerText = perfilData.email
    email.href = `mailto:${perfilData.email}`
}

    (async () => {

        const perfilData = await buscarDadosPerfil()
        atualizarPerfil(perfilData)
    })()