import React from 'react';

function HomeScreen({ username }) {
  return (
    <div>
      <h1>Bienvenido a la página de inicio para USUARIO</h1>
      <p>¡Has iniciado sesión correctamente, {username}!</p>
    </div>
  );
}

export default HomeScreen;
