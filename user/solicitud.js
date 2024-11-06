document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '../auth/login.html'; 
    } else {
        console.log('Token encontrado, accediendo a la página protegida...');
    }
});
