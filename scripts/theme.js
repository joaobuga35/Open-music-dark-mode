function putDarkMode(){
    const dmButton = document.getElementById('darkMode')
    const iconMode = document.getElementById('iconMode')
    const html = document.querySelector('html')
    const prefer = localStorage.getItem('darkmode')

    dmButton.addEventListener('click', () => {
        html.classList.toggle('dark-mode')
        iconMode.classList.toggle('icon-button')

        if (html.classList.contains('dark-mode')) {
            localStorage.setItem('darkmode', true)
            iconMode.src = '/assets/img/sun.svg'
        } else {
            localStorage.removeItem('darkmode')
            iconMode.src = '/assets/img/moon.svg'
        }
    })

    if (prefer) {
        html.classList.add('dark-mode')
        iconMode.src = '/assets/img/sun.svg'
    } 

    if (!prefer) {
        html.classList.remove('dark-mode')
        iconMode.src = '/assets/img/moon.svg'
    }
}

putDarkMode()