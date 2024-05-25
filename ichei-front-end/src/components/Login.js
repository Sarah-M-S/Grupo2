import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para validar o login
        // e redirecionar o usuário para a página apropriada.
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Usuário</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Senha</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Entrar</button>
                </div>
            </form>

            <div>
                <button>Esqueci a Minha Senha</button>
                <button>FAQ</button>
            </div>
        </div>
    );
}

export default Login;