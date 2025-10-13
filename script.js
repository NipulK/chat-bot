import { api_key } from './config.js';

//you need to make your own api_key , make a seperate config.js file and store the key there and import it here


const chatbox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');

// Function to append messages to the chat box
sendButton.addEventListener('click' ,async ()=> {
    const userMessage = userInput.value.trim();
    if(userMessage === '') return;
    
    // Append user message
    appendMessage('user-chat', userMessage);
    userInput.value = '';

    // Await bot reply (actual AI integration)
    const botmessage =  await getrespons(userMessage);

    localStorage.setItem('chatHistory', chatbox.innerHTML); // Save chat history
})

// Allow pressing Enter to send message
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click()
    }
})

// Function to simulate bot response (replace with actual AI logic)
async function getrespons(userMessage) {
    

    // Make sure you import or define api_key
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${api_key}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                contents: [{ parts: [{ text: userMessage }] }]
            })
        })
         
        const data = await response.json();
        console.log(data); // This will log the actual response 

        if (!response.ok) {
            throw new Error(data.error?.message || 'API request failed');
        }

        const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I didn't understand.";
        showreply(botReply);
        return botReply;

    }
     catch (error) {
        console.error('Error fetching AI response:', error);
        return "Sorry, there was an error processing your request.";
    }
}

function appendMessage(senderClass, message) {

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', senderClass);
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto scroll to the bottom

}

function showreply(message) {

    const replyDiv = document.createElement('div');   // Create bot message div
    replyDiv.classList.add('message', 'bot-chat');   // Bot message class
    replyDiv.textContent = message || ""; // Placeholder reply
    chatbox.appendChild(replyDiv);             // Append bot message
    chatbox.scrollTop = chatbox.scrollHeight; // Auto scroll to the bottom

}