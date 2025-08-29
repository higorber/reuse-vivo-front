// Configuração da API - URL base do Render
const API_BASE_URL = 'https://reuse-vivo-back.onrender.com';

// Função utilitária para fazer chamadas fetch com a URL base
async function apiFetch(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    try {
        const response = await fetch(url, options);
        return response;
    } catch (error) {
        console.error('Erro na chamada da API:', error);
        throw error;
    }
}

// Exportar para uso global
window.API_BASE_URL = API_BASE_URL;
window.apiFetch = apiFetch;
