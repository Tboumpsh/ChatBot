/*
about us project💫

 Name of the programmer:
1- Fateme Satouri

project name :
chat bot

Project description:
This is a chat bot project. In this project, we tried to simulate gpt chat

start date:
December 27

end of the project:
january 1

email:navayearamm@gmail.com
 */

// Getting input from the user by input
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatContainer = document.getElementById("chatContainer");

    // Add user message to the interface
    let userMessageElement = document.createElement("p");
    userMessageElement.className = "user-message";
    userMessageElement.textContent = userInput;
    chatContainer.appendChild(userMessageElement);

    // Predict and add bot response to the interface
    const botResponse = predictBotResponse(userInput);
    let botMessageElement = document.createElement("p");
    botMessageElement.className = "bot-message";
    botMessageElement.textContent = botResponse;
    chatContainer.appendChild(botMessageElement);

    // Clear user input field
    document.getElementById("userInput").value = "";
}

function predictBotResponse(userQuestion) {
    // Retrieve the stored JSON string from localStorage
    const storedChatbotData = localStorage.getItem('chatbotData');
  
    // Convert the JSON string back to an object or create a new one if it doesn't exist
    let chatbotData = storedChatbotData ? JSON.parse(storedChatbotData) : {
      questions: [],
      answers: []
    };
  
    // Check if the user question exists in the questions array
    const questionIndex = chatbotData.questions.indexOf(userQuestion);
    // If the question exists, return the corresponding answer
    if (questionIndex !== -1) {
      return chatbotData.answers[questionIndex];
    } else {
      // If the question doesn't exist, prompt the user for an answer
      const userAnswer = prompt("I don't know the answer. Can you please provide it?");
  
      // Save the user question and answer in the chatbotData object
      chatbotData.questions.push(userQuestion);
      chatbotData.answers.push(userAnswer);
  
      // Convert the updated object to a JSON string
      const jsonString = JSON.stringify(chatbotData);
  
      // Store the JSON string in localStorage
      localStorage.setItem('chatbotData', jsonString);
  
      return "Thank you for providing the answer. I will remember it for future use.";
    }
  }
