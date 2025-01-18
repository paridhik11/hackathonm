document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-cs');
    const quizContainer = document.getElementById('quiz-container');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const nextButton = document.getElementById('next-question-btn');

    // C Language Questions
    const quizData = [
        {
            question: "Which keyword is used to declare a variable in C?",
            options: ["int", "var", "let", "define"],
            answer: 0
        },
        {
            question: "What is the output of printf(\"%d\", 10+20);?",
            options: ["10", "20", "30", "Compilation Error"],
            answer: 2
        },
        {
            question: "Which of these is a valid identifier in C?",
            options: ["123abc", "var_name", "if", "$variable"],
            answer: 1
        },
        {
            question: "Which function is used to read input from the user in C?",
            options: ["scanf()", "cin", "get()", "input()"],
            answer: 0
        },
        {
            question: "What does sizeof(int) return in C on a 32-bit system?",
            options: ["2", "4", "8", "16"],
            answer: 1
        },
        {
            question: "What is the default value of an uninitialized variable in C?",
            options: ["0", "null", "garbage value", "undefined"],
            answer: 2
        },
        {
            question: "Which operator is used for pointer dereferencing?",
            options: ["*", "&", "->", "."],
            answer: 0
        },
        {
            question: "Which library is required to use malloc() in C?",
            options: ["stdlib.h", "stdio.h", "math.h", "string.h"],
            answer: 0
        },
        {
            question: "Which format specifier is used for printing a character in C?",
            options: ["%d", "%c", "%s", "%f"],
            answer: 1
        },
        {
            question: "What is the output of printf(\"%c\", 65);?",
            options: ["65", "A", "Compilation Error", "Undefined Behavior"],
            answer: 1
        },
        {
            question: "What does the break statement do in C?",
            options: ["Exits the program", "Skips the next iteration", "Exits the loop", "Restarts the loop"],
            answer: 2
        },
        {
            question: "Which function is used to dynamically allocate memory in C?",
            options: ["malloc()", "allocate()", "calloc()", "Both malloc() and calloc()"],
            answer: 3
        },
        {
            question: "What is the size of a double data type in C on most systems?",
            options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
            answer: 2
        },
        {
            question: "Which operator is used to access a member of a structure?",
            options: [".", "->", "&", "*"],
            answer: 0
        },
        {
            question: "What does the continue statement do?",
            options: ["Exits the loop", "Skips the current iteration", "Ends the function", "Jumps to the start of the program"],
            answer: 1
        },
        {
            question: "Which header file is required for printf() and scanf()?",
            options: ["stdlib.h", "stdio.h", "conio.h", "math.h"],
            answer: 1
        },
        {
            question: "What is the output of printf(\"%d\", 5/2);?",
            options: ["2", "2.5", "5", "Compilation Error"],
            answer: 0
        },
        {
            question: "Which data type is used to store a floating-point number?",
            options: ["int", "float", "char", "void"],
            answer: 1
        },
        {
            question: "Which keyword is used to create constants in C?",
            options: ["constant", "final", "const", "define"],
            answer: 2
        },
        {
            question: "What does the fopen() function return on failure?",
            options: ["0", "NULL", "-1", "EOF"],
            answer: 1
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    // Start Quiz Button Click Event
    startButton.addEventListener('click', () => {
        startButton.style.display = 'none'; // Hide the start button
        quizContainer.style.display = 'block'; // Show the quiz container
        loadQuestion();
    });

    // Load the Current Question
    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        quizQuestion.innerText = currentQuestion.question;
        quizOptions.innerHTML = '';

        currentQuestion.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.innerText = option;
            optionButton.classList.add('option-btn');
            optionButton.addEventListener('click', () => {
                checkAnswer(index);
            });
            quizOptions.appendChild(optionButton);
        });
    }

    // Check Answer and Move to the Next Question
    function checkAnswer(selectedIndex) {
        const currentQuestion = quizData[currentQuestionIndex];
        if (selectedIndex === currentQuestion.answer) {
            score++;
            alert('Correct Answer!');
        } else {
            alert('Wrong Answer!');
        }
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            displayScore();
        }
    }

    // Display Final Score
    function displayScore() {
        quizContainer.innerHTML = `<h2>Your Score: ${score} / ${quizData.length}</h2>`;
    }
});
