document.addEventListener('DOMContentLoaded', () => {

const API_URL = 'http://localhost:8080/auth/login'; 

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const correo = document.getElementById('loginCorreo').value;
    const contraseña = document.getElementById('loginContrasena').value;

    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ correo, contraseña }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Inicio de sesión exitoso!');

            localStorage.setItem('token', data.token);
            localStorage.setItem('NombreUsuario', data.nombre)
            localStorage.setItem('rol', data.rol)


            window.location.href = '../index.html'; 
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
    }
});
});
