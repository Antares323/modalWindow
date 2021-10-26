const modalLinks = document.querySelectorAll('.testmodal__link')
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock')

let unlock = true
const timeout = 800

if (modalLinks.length > 0) {
    for (let modal of modalLinks) {
        const modalLink = modal
        console.log(modal)
        modalLink.addEventListener('click', (e) => {
            const modalName = modal.getAttribute('href').replace('#', '')
            const curentModal = document.getElementById(modalName)
            modalOpen(curentModal)
            e.preventDefault()
        })
    }
}

const modalCloseIcon = document.querySelectorAll('.close__modal')
if (modalCloseIcon.length > 0) {
    for (let close of modalCloseIcon) {
        const elem = close
        elem.addEventListener('click', (e) => {
            modalClose(elem.closest('.testmodal'))
            e.preventDefault()
        })
    }
}

const modalOpen = (curentModal) => {
    if (curentModal && unlock) {
        const modalActive = document.querySelector('.testmodal')
        console.log(modalActive)
        if (curentModal) {
            modalClose(modalActive, false)
        } else {
            bodyLock()
        }
        curentModal.classList.add('open')
        curentModal.addEventListener('click', (e) => {
            if (!e.target.closest('.modal__content')) {
                modalClose(e.target.closest('modal'))
            }
        })
    }
}

const modalClose = (modalActive, doUnlock = false) => {
    if (unlock) {
        modalActive.classList.remove('open')
        if (doUnlock) {
            bodyLock()
        }
    }
}

const bodyLock = () => {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
    if (lockPaddingValue > 0) {
        for (let padLock of lockPadding) {
            const elem = padLock
            elem.getElementsByClassName.paddingRight = lockPaddingValue
        }
    }
    body.style.paddingRight = lockPaddingValue
    body.classList.add('lock')

    unlock = false
    setTimeout(() => {
        unlock = true
    }, timeout)
}

const bodyUnLock = () => {
    setTimeout(() => {
        for (let padLock of lockPadding) {
            const elem = padLock
            elem.style.paddingRight = '0px'
        }
        body.style.paddingRight = '0px'
        body.classList.remove('lock')
    }, timeout)
}