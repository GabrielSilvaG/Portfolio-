const verInformacao = document.querySelectorAll('.acordeon .mostrarInf')

verInformacao.forEach((mostrarInf) => {

    mostrarInf.addEventListener('click', (e) => {
        const acordeon = mostrarInf.parentElement
        const isOpen = acordeon.classList.contains('open')

        if (isOpen) {
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }


    })

})