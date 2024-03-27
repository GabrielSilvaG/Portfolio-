function atualizarPerfil(profileData) {
    const foto = document.getElementById('profile.foto')
    foto.src = profileData.foto
    foto.alt = profileData.name


    const nome = document.getElementById('profile.nome')
    nome.innerText = profileData.nome

    const trabalho = document.getElementById('profile.trabalho')
    trabalho.innerText = profileData.trabalho

    const localizacao = document.getElementById('profile.localizacao')
    localizacao.innerText = profileData.localizacao

    const contato = document.getElementById('profile.contato')
    contato.innerText = profileData.contato
    contato.href = `tel:${profileData.contato}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function atualizarHabilidades(profileData) {
    const habilidadepessoal = document.getElementById('profile.skills.softSkills')
    habilidadepessoal.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}`).join('')
}

function habilidadesComFerramentas(profileData) {
    const ferramentas = document.getElementById('profile.skills.hardSkills')
    ferramentas.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.nome}" title="${skill.nome}"></li>`).join('')
}

function limguagem(profileData) {
    const idioma = document.getElementById('profile.linguagem')
    idioma.innerHTML = profileData.linguagem.map(linguagem => `<li>${linguagem}`).join('')
}

(async () => {

    const profileData = await buscarDadosPerfil()
    atualizarPerfil(profileData)
    atualizarHabilidades(profileData)
    habilidadesComFerramentas(profileData)
    limguagem(profileData)
})()