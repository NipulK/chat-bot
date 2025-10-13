import { api_key } from './config.js';

const chatbox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');

// Function to append messages to the chat box
sendButton.addEventListener('click' , ()=> {
    const userMessage = userInput.value.trim();
    if(userMessage === '') return;
    
    // Append user message
    appendMessage('user-chat', userMessage);
    userInput.value = '';

    // Await bot reply (actual AI integration)
    const botmessage =  getrespons(userMessage);

    localStorage.setItem('chatHistory', chatbox.innerHTML); // Save chat history
})

// Allow pressing Enter to send message
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click()
    }
})

// Function to simulate bot response (replace with actual AI logic)
function getrespons(userMessage) {
    showreply(); // You can keep this or move it after getting the response

    // Make sure you import or define api_key
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${api_key}`;

    try {
        const response =  fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                contents: [{ parts: [{ text: userMessage }] }]
            })
        })
         
        const data =  response.json();
        console.log(data); // This will log the actual response
        
    } catch (error) {
    }
}

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