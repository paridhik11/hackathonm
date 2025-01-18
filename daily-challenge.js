const gifPath = "./images/minion-woohoo.gif"; // Ensure correct path for your GIF
const questions = [
    {
        question: "What is the SI unit of force?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        correctAnswer: "Newton"
    },
    {
        question: "What is the value of gravitational constant (G)?",
        options: ["6.674 × 10^-11 N·m²/kg²", "9.81 m/s²", "3.14159", "8.314 J/mol·K"],
        correctAnswer: "6.674 × 10^-11 N·m²/kg²"
    },
    {
        question: "What is the formula for kinetic energy?",
        options: ["E = mc²", "E = ½mv²", "E = mv", "E = mgh"],
        correctAnswer: "E = ½mv²"
    },
    {
        question: "What is the molar mass of water (H₂O)?",
        options: ["18 g/mol", "16 g/mol", "24 g/mol", "12 g/mol"],
        correctAnswer: "18 g/mol"
    },
    {
        question: "What is the derivative of sin(x)?",
        options: ["cos(x)", "sin(x)", "1/cos(x)", "-cos(x)"],
        correctAnswer: "cos(x)"
    },
    {
        question: "What is the law of conservation of energy?",
        options: [
            "Energy cannot be created or destroyed, only converted.",
            "Energy is created and destroyed in equal amounts.",
            "Energy is created by mass.",
            "Energy can be transformed into matter."
        ],
        correctAnswer: "Energy cannot be created or destroyed, only converted."
    },
    {
        question: "What is the atomic number of Oxygen?",
        options: ["6", "8", "12", "16"],
        correctAnswer: "8"
    },
    {
        question: "What is the integral of 1/x?",
        options: ["ln(x)", "x", "1/x²", "e^x"],
        correctAnswer: "ln(x)"
    },
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Markup Language", "HyperText Machine Language", "Hyper Tool Markup Language"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "What is Avogadro's number?",
        options: ["6.022 × 10^23", "1.67 × 10^-27", "3.14159", "2.71828"],
        correctAnswer: "6.022 × 10^23"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the atomic number of carbon?",
        options: ["6", "8", "12", "10"],
        correctAnswer: "6"
    },
    {
        question: "What is the quadratic formula?",
        options: [
            "x = (-b ± √(b² - 4ac)) / 2a",
            "x = -b / 2a",
            "x = (b² + 4ac) / 2a",
            "x = √(b² - 4ac)"
        ],
        correctAnswer: "x = (-b ± √(b² - 4ac)) / 2a"
    },
    {
        question: "Which bond is formed by sharing electrons?",
        options: ["Ionic bond", "Covalent bond", "Metallic bond", "Van der Waals bond"],
        correctAnswer: "Covalent bond"
    },
    {
        question: "What is the formula for gravitational force?",
        options: ["F = ma", "F = G(m1 * m2) / r^2", "F = kx", "F = mv^2"],
        correctAnswer: "F = G(m1 * m2) / r^2"
    },
    {
        question: "What is the equation of a straight line in slope-intercept form?",
        options: ["y = mx + c", "y = c", "x = m + c", "x = y + m"],
        correctAnswer: "y = mx + c"
    },
    {
        question: "What is the area of a circle with radius r?",
        options: ["πr²", "2πr", "πd²", "πr³"],
        correctAnswer: "πr²"
    },
    {
        question: "Which data structure uses LIFO (Last In, First Out) method?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctAnswer: "Stack"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correctAnswer: "Pacific"
    },
    {
        question: "What is the difference between oxidation and reduction?",
        options: ["Oxidation is loss of electrons, reduction is gain", "Oxidation is gain of electrons, reduction is loss", "Both are the same", "None of the above"],
        correctAnswer: "Oxidation is loss of electrons, reduction is gain"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to display the current question and options
function displayQuestion() {
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const resultMessage = document.getElementById("result-message");

    // Clear previous result
    resultMessage.textContent = '';

    // Update question text
    questionText.textContent = questions[currentQuestionIndex].question;

    // Clear options container
    optionsContainer.innerHTML = '';

    // Create and display options
    questions[currentQuestionIndex].options.forEach(option => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("option-btn");
        optionButton.textContent = option;
        optionButton.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionButton);
    });
}

// Function to check the answer
function checkAnswer(selectedAnswer) {
    const resultMessage = document.getElementById("result-message");

    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        resultMessage.textContent = "Correct!";
        resultMessage.style.color = "green";
        score++;
    } else {
        resultMessage.textContent = `Wrong! The correct answer is ${questions[currentQuestionIndex].correctAnswer}.`;
        resultMessage.style.color = "red";
    }

    // Disable options after answering
    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach(button => button.disabled = true);

    // Show next button
    document.getElementById("next-question-btn").style.display = 'block';
}

// Function to load the next question
function nextQuestion() {
    // Move to the next question or show final result
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        document.getElementById("next-question-btn").style.display = 'none';
    } else {
        showFinalResult();
    }
}

// Show the final result
function showFinalResult() {
    const scoreElement = document.getElementById("result-message");
    scoreElement.innerText = `Your Score: ${score} / ${questions.length}`;

    // Display "Better Luck Next Time" if score is less than 5
    if (score < 5) {
        scoreElement.innerText += "\nBetter luck next time!";
        scoreElement.style.color = "black";
    } else if (score >= 15) {
        // Display achievement for scores greater than or equal to 15
        showAchievement();
    }
}

// Show the achievement with GIF
function showAchievement() {
    const achievementContainer = document.getElementById("achievement-container");

    // Show GIF
    const gifElement = document.createElement('img');
    gifElement.src = gifPath;
    gifElement.alt = "Achievement Unlocked!";
    achievementContainer.appendChild(gifElement);

    // Play sound (if applicable, add sound functionality)
    const sound = new Audio("./path/to/sound.mp3"); // Ensure correct path to your sound file
    sound.play();

    // Show achievement container
    achievementContainer.style.display = 'block';
}

// Initialize the first question
displayQuestion();
