/// seccion nav
document.addEventListener('DOMContentLoaded', () => {

    const token = localStorage.getItem('token');

    document.getElementById('solicitar-servicio-btn').addEventListener('click', (event) => {
        event.preventDefault();
        if (token) {
            window.location.href = './user/solicitud.html';
        } else {
            window.location.href = './auth/login.html';
        }
    });
    
});
