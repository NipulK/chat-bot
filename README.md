# AI Chatbot (Gemini API) – Simple JavaScript Project

* This is a basic web-based chatbot built with vanilla JavaScript, HTML, and CSS. 

* It uses Google's Gemini API to generate AI-powered responses to user messages. 

* The project demonstrates asynchronous API calls, dynamic DOM updates, and simple chat history storage. 

* API keys are managed securely via a separate config file.

## Setup Instructions

### Getting Your API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Get API Key"** or **"Create API Key"**
4. Copy the generated API key

### Adding Your API Key

1. Create a file named `config.js` in the project root directory
2. Add the following code to `config.js`:

```javascript
export const api_key = 'YOUR_API_KEY_HERE';
```

3. Replace `'YOUR_API_KEY_HERE'` with your actual Gemini API key
4. **Important:** Never commit `config.js` to version control. It's already in `.gitignore`

### Running the Project

1. Open `index.html` in a modern web browser
2. Start chatting with the AI chatbot!

**Note:** Keep your API key private and never share it publicly.
