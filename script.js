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

function predictBotResponse(input) {
    // Convert user input to lowercase for case-insensitive matching
    const userInput = input.toLowerCase();

    // Check user input for specific questions and provide predefined answers
    if (userInput.includes("hello") || userInput.includes("hi")) {
        return "Hello! How can I assist you?";
    } else if (userInput.includes("how are you")) {
        return "I am a bot, so I do not have feelings, but thank you for asking!";
    } else if (userInput.includes("goodbye")) {
        return "Goodbye! If you have any more questions, feel free to ask.";
    }
    else if (userInput.includes("open google")) {
        window.open('https://google.com');
        return "open in new tab"
    }
    else if (userInput.includes("how's the weather") || userInput.includes("how the weather")) {
        window.open('https://www.accuweather.com/en/ir/tehran/210841/weather-forecast/210841');
        return "check weather in new tab"
    }
    else if (userInput.includes("what can you do?")) {
        return "I can search for you and answer your questions. What would you like me to do for you?"
    }
    else if (userInput.includes("I love you")) {
        return "Although I am a robot and have no feelings, I love you from the bottom of my heart."
    }
    else if (userInput.includes("What's new?")) {
        window.open('https://edition.cnn.com/')
        return "The ccn site has been opened for you. Find out about the world's news with this site "
    }
    else if (userInput.includes("I have a math question?") || userInput.includes("Can you answer my math question?")) {
        window.open('https://math.microsoft.com/en')
        return "This site helps you solve math questions. Maybe my answers are wrong."
    }
    else if (userInput.includes("please introduce yourself") || userInput.includes("who are you?")) {
        window.open('https://edition.cnn.com/')
        return "The ccn site has been opened for you. Find out about the world's news with this site "
    }

    else {
        // If the user question does not match any predefined patterns, provide a default response
        return "داداش بیخیال ما شو! دو خط کد زدی توقع چت جی پی تی داری؟ با دو تا else  و if دارم کار میکنم.";
    }
}
