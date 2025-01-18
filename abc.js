document.addEventListener('DOMContentLoaded', function() {
    // Update the progress bar width
    let progressBar = document.querySelector('.progress-bar span');
    if (progressBar) {
        progressBar.style.width = '75%';
    }

    // Define questions for each category
    const questions = {
        'Physics': [
            'What is the speed of light?',
            'What is Newton’s Second Law of Motion?',
            'What is the unit of force?'
        ],
        'Maths': [
            'What is 2 + 2?',
            'What is the square root of 16?',
            'What is the value of Pi?'
        ],
        'Chemistry': [
            'What is the chemical formula for water?',
            'What is the periodic table symbol for gold?',
            'What is an acid-base reaction?'
        ],
        'Computer Science': [
            'What does HTML stand for?',
            'What is a variable in programming?',
            'What is the difference between frontend and backend?'
        ]
    };

    // Add event listeners to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.querySelector('h3').innerText;
            const questionList = document.querySelector('.questions');
            questionList.innerHTML = '';
            if (questions[category]) {
                questions[category].forEach(question => {
                    const li = document.createElement('li');
                    li.textContent = question;
                    questionList.appendChild(li);
                });
            }
        });
    });
});
