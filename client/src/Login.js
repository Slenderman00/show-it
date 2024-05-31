document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('loginModal');
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const loginForm = document.getElementById('loginForm');

    openModalBtn.onclick = function() {
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
            openModalBtn.textContent = 'Open Login Modal';
        } else {
            modal.style.display = 'block';
            openModalBtn.textContent = 'Close Login Modal';
        }
    }

    closeModalBtn.onclick = function() {
        modal.style.display = 'none';
        openModalBtn.textContent = 'Open Login Modal';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            openModalBtn.textContent = 'Open Login Modal';
        }
    }

    loginForm.onsubmit = function(event) {
        event.preventDefault();
        // Handle login logic here
        alert('Login form submitted');
        modal.style.display = 'none';
        openModalBtn.textContent = 'Open Login Modal';
    }
});
