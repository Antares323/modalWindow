const flexboxModal = () => {
    if(window.innerWidth < 600) return;

    const overlay = document.getElementById('modalOverlay'),
          modal = document.getElementById('modalWrapper'),
          closeButton = document.getElementById('modalClose'),
          showButton = document.getElementById('showModal'),
          form = document.getElementById('form')


    const showModal = () => {
        overlay.removeAttribute('style')
        overlay.classList.remove('modal__hidden')
        
        modal.classList.remove('modal__hidden')
    }

    const closeModal = () => {
        modal.classList.add('modal__hidden')

        overlay.removeAttribute('style')
        overlay.classList.add('modal__hidden')
    }

    closeButton.addEventListener('click', () => closeModal())

    showButton.addEventListener('keydown', (e) => {
        if ( e.key === 27 ) closeModal()
    });

    overlay.addEventListener('click', () => closeModal())

    form.addEventListener('submit', () => closeModal())

    showButton.addEventListener('click', () => showModal())
};
  
document.addEventListener('DOMContentLoaded', () => {
    flexboxModal();
});