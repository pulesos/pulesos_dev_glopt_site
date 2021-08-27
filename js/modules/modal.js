let modal = () => {
    function bindModal(btnTrigger, modalTrigger, closeTrigger) {
        let btns = document.querySelectorAll(btnTrigger),
            modal = document.querySelector(modalTrigger),
            close = document.querySelector(closeTrigger);

        btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        });
        close.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    bindModal('.btn_right', '.modal', '.modal__close');
    bindModal('.btn__payment', '.modal', '.modal__close');
};

export default modal;