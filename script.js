const apiKey = "API_KEY";
const chatContainer = document.getElementById('chat-container');
function sendMessage(message) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('user-message');
  messageDiv.textContent = message;
  chatContainer.appendChild(messageDiv);
  fetch(`https://api.example.com/chatbot?api_key=${apiKey}&message=${message}`)
    .then(response => response.json())
    .then(data => {
      const botMessageDiv = document.createElement('div');
      botMessageDiv.classList.add('bot-message');
      botMessageDiv.textContent = data.response;
      chatContainer.appendChild(botMessageDiv);
    })
    .catch(error => {
      console.error("Error fetching response:", error);
      const errorMessageDiv = document.createElement('div');
      errorMessageDiv.classList.add('error-message');
      errorMessageDiv.textContent = "An error occurred. Please try again.";
      chatContainer.appendChild(errorMessageDiv);
    });
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    sendMessage(message);
    messageInput.value = '';
  }
});
