function atualizarPerfil(profileData) {
    const foto = document.getElementById('profile.foto');
    foto.src = profileData.foto
    foto.alt = profileData.name

    const nome = document.getElementById('profile.nome');
    nome.innerText = profileData.nome;

    const trabalho = document.getElementById('profile.trabalho');
    trabalho.innerText = profileData.trabalho; // texto que mostra minha função profissional 

    const localizacao = document.getElementById('profile.localizacao');
    localizacao.innerText = profileData.localizacao; // texto que mostra minha localização

    const contato = document.getElementById('profile.contato');
    contato.innerText = "(11) 97531-8070"; // Texto que aparece no portfolio, que clikando aparece o contato
    contato.href = `https://wa.me/${profileData.contato}`;
    contato.target ="_blank";

    const email = document.getElementById('profile.email');
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;

    const perfilGithub = document.getElementById('profile.perfilGithub');
    perfilGithub.innerText = "GitHub"; // Texto que aparece no portfolio, que clikando vai para o perfil 
    perfilGithub.href = `${profileData.meuGithub}`;
    perfilGithub.target="_blank";
    

    
    


}

function atualizarHabilidades(profileData) {
    const habilidadepessoal = document.getElementById('profile.skills.softSkills')
    habilidadepessoal.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function habilidadesComFerramentas(profileData) {
    const ferramentas = document.getElementById('profile.skills.hardSkills')
    ferramentas.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.nome}" title="${skill.nome}"></li>`).join('')
}

function atualizarLinguagem(profileData) {
    const idiomaLinguagem = document.getElementById('profile.idioma')
    idiomaLinguagem.innerHTML = profileData.linguagem.map(limguagem => `<li>${limguagem}</li>`).join('')
}


function atualizarportfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(projetosECursos => {
        return `
        <li>
        <h3 ${projetosECursos.github ? 'class="github"' : ''}>${projetosECursos.nome}</h3>
        <a href="${projetosECursos.url}" target="_blank">${projetosECursos.url}</a>
        </li>`
    }).join('')
}

function locaisTrabalhado(profileData) {
    const experienciaTrabalho = document.getElementById('profile.experienciaProfissional')
    experienciaTrabalho.innerHTML = profileData.experienciaProfissional.map(experiencia => {
        return `
            <li>
             <h3 class="title">${experiencia.nome}</h3>
             <p class="periodo">${experiencia.periodo}</p>
             <p>${experiencia.descriscao}</p>
            </li>
        `
    }).join('')
}


(async () => {

    const profileData = await buscarDadosPerfil()
    atualizarPerfil(profileData)
    atualizarHabilidades(profileData)
    habilidadesComFerramentas(profileData)
    atualizarLinguagem(profileData)
    atualizarportfolio(profileData)
    locaisTrabalhado(profileData)

})()