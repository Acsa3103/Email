// Função para validar o login
function validateLogin(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obtém os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Variáveis de controle de erro
    let valid = true;
  
    // Validação do usuário
    if (username !== 'admin') {
      document.getElementById('usernameError').style.display = 'block';
      valid = false;
    } else {
      document.getElementById('usernameError').style.display = 'none';
    }
  
    // Validação da senha
    if (password !== '123@456') {
      document.getElementById('passwordError').style.display = 'block';
      valid = false;
    } else {
      document.getElementById('passwordError').style.display = 'none';
    }
  
    // Exibe a mensagem de resultado
    const messageElement = document.getElementById('loginMessage');
    if (valid) {
      messageElement.textContent = 'Login bem-sucedido!';
      messageElement.className = 'message success';
    } else {
      messageElement.textContent = 'Usuário ou senha inválidos.';
      messageElement.className = 'message error';
    }
  
    return false; // Impede o envio real do formulário
  }
  