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

    // Simulate bot reply (replace this with actual AI integration)
    const botmessage = showreply();

    localStorage.setItem('chatHistory', chatbox.innerHTML); // Save chat history

});

// Allow pressing Enter to send message
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});



function appendMessage(senderClass, message) {

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', senderClass);
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto scroll to the bottom

}

function showreply() {

    const replyDiv = document.createElement('div');   // Create bot message div
    replyDiv.classList.add('message', 'bot-chat');   // Bot message class
    replyDiv.textContent = "Hi"; // Placeholder reply
    chatbox.appendChild(replyDiv);             // Append bot message
    chatbox.scrollTop = chatbox.scrollHeight; // Auto scroll to the bottom

}