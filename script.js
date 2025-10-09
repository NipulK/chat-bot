const chatbox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');

// Function to append messages to the chat box
sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if(userMessage === '') return;
    
    // Append user message
    appendMessage('user-chat', userMessage);
    userInput.value = '';
});

function appendMessage(senderClass, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', senderClass);
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto scroll to the bottom
}

///