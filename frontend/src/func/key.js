// src/components/KeydownShortcuts.js
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';  // useNavigate no lugar de useHistory

const KeydownShortcuts = () => {
    const location = useLocation(); // Acessa a URL atual
    const navigate = useNavigate(); // Agora usamos useNavigate no lugar de useHistory

    useEffect(() => {
        const handleKeydown = (event) => {
            // Atalhos de teclado que funcionam apenas nas páginas desejadas
            if (location.pathname === '/' || location.pathname === '/servicos' ) {
                if (event.key === 'l') {
                    navigate('/login'); // Navegar para a página de login
                    event.preventDefault();
                    event.stopPropagation();
                } else if (event.key === 'h') {
                    navigate('/'); // Navegar para a Home
                    event.preventDefault();
                    event.stopPropagation();
                } else if (event.key === 's') {
                    navigate('/servicos'); // Navegar para a página de serviços
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        };

        // Adiciona o listener de keydown
        document.addEventListener('keydown', handleKeydown);

        // Remove o listener quando o componente for desmontado
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [location, navigate]); // Dependências: location e navigate

    return null; // Não precisa renderizar nada
};

export default KeydownShortcuts;
