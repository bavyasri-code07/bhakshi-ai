const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");

function addMessage(text, type) {
    const message = document.createElement("div");
    message.className = "message " + type;
    message.textContent = text;

    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getReply(message) {
    const msg = message.toLowerCase().trim();

    if (msg.includes("hi") || msg.includes("hello") || msg.includes("ஹாய்")) {
        return "ஹாய் பவ்யா! 😊 சொல்லுங்க, என்ன பேசலாம்?";
    }

    if (msg.includes("how are you") || msg.includes("எப்படி இருக்க")) {
        return "நான் நல்லா இருக்கேன் பவ்யா 😊 நீங்க எப்படி இருக்கீங்க?";
    }

    if (msg.includes("sad") || msg.includes("சோகம்") || msg.includes("சோகமாக")) {
        return "கவலைப்படாதீங்க பவ்யா ❤️ என்ன நடந்துச்சு? சொல்லுங்க, நான் கேட்கிறேன்.";
    }

    if (msg.includes("happy") || msg.includes("ஹாப்பி") || msg.includes("சந்தோஷ")) {
        return "வாவ்! 😄 நீங்க ஹாப்பியா இருக்கீங்கன்னு கேட்கவே எனக்கும் சந்தோஷம்!";
    }

    if (msg.includes("thank") || msg.includes("நன்றி") || msg.includes("thanks")) {
        return "You're welcome! 😊 ரொம்ப சந்தோஷம் பவ்யா!";
    }

    if (msg.includes("mom") || msg.includes("அம்மா")) {
        return "அம்மாவைப் பற்றி சொல்றீங்களா? 😊 என்ன நடந்துச்சு என்று சொல்லுங்க.";
    }

    if (msg.includes("dad") || msg.includes("அப்பா")) {
        return "அப்பாவைப் பற்றி சொல்றீங்களா? 😊 சொல்லுங்க, கேட்கிறேன்.";
    }

    if (msg.includes("python") || msg.includes("java") ||
        msg.includes("c++") || msg.includes("coding") ||
        msg.includes("கோடிங்")) {
        return "Coding doubt-ஆ? 💻 என்ன problem என்று சொல்லுங்க. சேர்ந்து பார்க்கலாம்!";
    }

    if (msg.includes("html") || msg.includes("css") ||
        msg.includes("javascript")) {
        return "Web development doubt-ஆ? 🌐 HTML, CSS, JavaScript எதுவாக இருந்தாலும் கேளுங்க!";
    }

    if (msg.includes("physics") || msg.includes("ஃபிசிக்ஸ்")) {
        return "Physics doubt-ஆ? 📚 Question-ஐ அனுப்புங்க, புரியுற மாதிரி explain பண்றேன்.";
    }

    if (msg.includes("chemistry") || msg.includes("கெமிஸ்ட்ரி")) {
        return "Chemistry doubt-ஆ? 🧪 Question-ஐ அனுப்புங்க!";
    }

    if (msg.includes("game") || msg.includes("கேம்")) {
        return "🎮 Game விளையாடணுமா? எந்த game என்று சொல்லுங்க!";
    }

    return "சரி பவ்யா 😊 புரியுது. இன்னும் கொஞ்சம் detail-ஆ சொல்லுங்க, நான் உங்களுக்கு reply பண்றேன்.";
}

function sendMessage() {
    const message = input.value.trim();

    if (message === "") return;

    // User message
    addMessage(message, "user");

    // Clear input
    input.value = "";

    // AI typing effect
    setTimeout(() => {
        const reply = getReply(message);
        addMessage(reply, "bot");
    }, 500);
}

// Send button
sendBtn.addEventListener("click", sendMessage);

// Enter key
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});
