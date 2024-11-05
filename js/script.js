/// seccion nav
document.addEventListener('DOMContentLoaded', () => {

    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('NombreUsuario'); 
    
    if (token) {
        document.getElementById('login-nav-item').style.display = 'none';
        document.getElementById('user-nav-item').style.display = 'block';
        document.getElementById('user-name-btn').textContent = ` ${userName || 'Usuario'}`; 
        document.getElementById('logout-btn').style.display = 'block';
    } else {
        document.getElementById('login-nav-item').style.display = 'block';
        document.getElementById('user-nav-item').style.display = 'none';
    }
    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('token');
        localStorage.removeItem('NombreUsuario'); 
        
        window.location.href = '../index.html'; 
    });
    
});
