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

    habilidadepessoal.innerHTML = profile.skills.softSkills.map(skill => `<li>${skill}`).join('')

}

(async () => {

    const profileData = await buscarDadosPerfil()
    atualizarPerfil(profileData)
    atualizarHabilidades(profileData)
})()