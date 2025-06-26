// Função para validar o login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos de usuário e senha
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Credenciais fixas
    var validUsername = 'admin';
    var validPassword = '123@456';

    // Verifica se as credenciais são válidas
    if (username === validUsername && password === validPassword) {
        alert('Login bem-sucedido!');
        // Redireciona para outra página ou realiza outra ação
    } else {
        // Exibe mensagem de erro
        var errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Usuário ou senha inválidos!';
        errorMessage.style.display = 'block';
    }
});
