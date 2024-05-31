import React from 'react';

function HomeScreenManager({ username }) {
  return (
    <div>
      <h1>Bienvenido a la página de inicio para MANAGER</h1>
      <p>¡Has iniciado sesión correctamente, {username}!</p>
    </div>
  );
}

export default HomeScreenManager;
