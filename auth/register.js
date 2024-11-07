document.addEventListener('DOMContentLoaded', () => {
const API_URL = 'https://segteosv.onrender.com/auth/register/cliente'; 

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('registerNombre').value;
    const apellido = document.getElementById('registerApellido').value;
    const correo = document.getElementById('registerCorreo').value;
    const telefono = document.getElementById('registerTelefono').value;
    const contraseña = document.getElementById('registerContrasena').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const rol = 'user';

    if (contraseña !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre,
                apellido,
                correo,
                telefono,
                contraseña,
                rol,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Registro exitoso!');
            window.location.href = 'login.html';
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error en el registro:', error);
    }
});
});