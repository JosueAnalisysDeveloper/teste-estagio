// Função para redirecionar para a página de listagem
function redirectToListagem() {
    window.location.href = 'http://127.0.0.1:5500/FRONT-/front-main/pag.list.html';
}

// Função para salvar dados no localStorage
document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o comportamento padrão de envio do formulário
    
    // Coleta os dados do formulário
    const formData = {
        primeiroNome: document.getElementById('primeiro-nome').value,
        ultimoNome: document.getElementById('ultimo-nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        tipoConta: document.querySelector('input[name="tipo-conta"]:checked').value,
        idade: document.getElementById('idade').value,
        referencia: document.getElementById('referencia').value,
        bio: document.getElementById('bio').value
    };

    // Obtém os registros existentes ou inicializa um array vazio
    let registros = JSON.parse(localStorage.getItem('registros')) || [];
    
    // Adiciona o novo registro
    registros.push(formData);
    
    // Salva de volta no localStorage
    localStorage.setItem('registros', JSON.stringify(registros));
    
    // Limpa o formulário
    document.getElementById('registroForm').reset();
    alert('Registro salvo com sucesso!');
});
