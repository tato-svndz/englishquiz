const questions = [
    // Replace with your actual questions and answers
    { question: '______ you at the meeting yesterday?', answers: ['Was', 'Were', 'Did', 'Are'], correct: 1 },
    { question: 'Do you like your new job? ________', answers: ['Yes, I like.', 'Yes, I do.', 'Yes, I am.', 'Yes, I was.'], correct: 1 },
    { question: 'What time ______ he usually get up?', answers: ['does', 'do', 'is', 'was'], correct: 0 },
    { question: '______ do you go to the gym?', answers: ['How often', 'How much', 'When', 'Where'], correct: 0 },
    { question: 'He ______ home late last night.', answers: ['come', 'came', 'coming', 'did come'], correct: 1 },
    { question: 'Where ______ you buy your groceries?', answers: ['do', 'did', 'does', 'doing'], correct: 0 },
    { question: 'Spanish ______ taught in many schools.', answers: ['is', 'are', 'was', 'were'], correct: 0 },
    { question: 'The kids ______ playing when I arrived.', answers: ['is', 'are', 'was', 'were'], correct: 3 },
    { question: 'There ______ any bread left in the pantry.', answers: ['isn’t some', 'isn’t any', 'any', 'are'], correct: 1 },
    { question: '______ people from Germany immigrated to the U.S. in the 19th century.', answers: ['Many of', 'Some of', 'A few of', 'None of'], correct: 2 },
    { question: 'There are ______ English speakers in Paris.', answers: ['a few', 'a lot of', 'many', 'few'], correct: 1 },
    { question: 'She ______ with her friends on social media every day.', answers: ['is communicating', 'communicates', 'communicated', 'will communicate'], correct: 1 },
    { question: 'More and more people ______ about climate change.', answers: ['is caring', 'are caring', 'cares', 'cared'], correct: 1 },
    { question: 'Many, but not all, people ______ go to university after high school.', answers: ['want to', 'are wanting to', 'wanting to', 'wanted to'], correct: 0 },
    { question: 'Would you like ______ for a walk later?', answers: ['go', 'to go', 'going', 'gone'], correct: 1 },
    { question: 'I ______ to Europe on holiday next summer.', answers: ['am flying', 'flying', 'fly', 'will flying'], correct: 0 },
    { question: 'Oh! It ______. I\'ll take an umbrella with me.', answers: ['raining', 'is raining', 'rains', 'will rain'], correct: 1 },
    { question: 'Do you have any plans for tonight? Yes, we ______ to the concert.', answers: ['will go', 'going', 'go', 'will going'], correct: 0 },
    { question: 'I plan to ______ two weeks traveling around Italy.', answers: ['spend', 'spending', 'spends', 'to spend'], correct: 0 },
    { question: 'The hotel room was ______ clean. We stayed for an extra night.', answers: ['extreme', 'extremely', 'very', 'most'], correct: 2 },
    { question: 'This coffee is ______ the one I had yesterday.', answers: ['hotter than', 'hotter as', 'as hot as', 'more hot than'], correct: 0 },
    { question: 'The most ______ tea in the world comes from China.', answers: ['expensive', 'more expensive', 'most expensive', 'expensivest'], correct: 2 },
    { question: 'I ______ never been to Australia.', answers: ['has', 'have', 'am', 'was'], correct: 1 },
    { question: 'She ______ already finished reading that book.', answers: ['has', 'have', 'will', 'had'], correct: 0 },
    { question: 'I don\'t think they ______ like it here.', answers: ['should', 'will', 'might', 'are'], correct: 2 },
    { question: 'In the future, people ______ live on Mars.', answers: ['will', 'are going to', 'might', 'is'], correct: 0 },
    { question: 'The ______ coffee I\'ve ever had was in Brazil.', answers: ['good', 'best', 'better', 'most good'], correct: 1 },
    { question: 'Space tourists ______ have to train hard to get in shape.', answers: ['will', 'should', 'must', 'could'], correct: 2 },
    { question: 'If I win the lottery, I ______ buy a house by the sea.', answers: ['would', 'will', 'am going to', 'shall'], correct: 0 },
    { question: 'The first manned space mission ______ launched in 1961.', answers: ['was', 'has been', 'had been', 'will be'], correct: 0 },
    { question: 'The movie "Titanic" was directed ______ James Cameron.', answers: ['by', 'from', 'with', 'in'], correct: 0 },
    { question: 'I\'ve lived in this town ______ 5 years.', answers: ['since', 'for', 'in', 'of'], correct: 1 },
    { question: 'Her cat is adorable. She ______ it since she was a child.', answers: ['has had', 'had', 'will have', 'was having'], correct: 0 },
    { question: 'I received 10 messages ______.', answers: ['yesterday', 'tomorrow', 'last week', 'earlier'], correct: 0 },
    { question: 'How many times ______ you visited Paris?', answers: ['have', 'will', 'did', 'do'], correct: 0 },
    { question: 'I was saving up ______ a new car.', answers: ['for buy', 'for buying', 'to buying', 'to buy'], correct: 3 },
    { question: 'A lot of ______ went to the USA in the 19th century.', answers: ['emigrants', 'immigrants', 'invaders', 'travelers'], correct: 1 },
    { question: 'There was a beautiful ceremony and a ______ at the wedding.', answers: ['group', 'reception', 'show', 'feast'], correct: 1 },
    { question: 'I mostly ______ in touch with my friends online.', answers: ['keep', 'stay', 'meet', 'talk'], correct: 1 },
    { question: 'He’s had a fascinating ______ . He’s worked in many different countries.', answers: ['job', 'career', 'occupation', 'profession'], correct: 1 },
    { question: 'Her ______ has increased a lot over the past few years.', answers: ['earnings', 'wealth', 'money', 'job'], correct: 1 },
    { question: 'I’m really ______ in history.', answers: ['keen', 'fond', 'interested', 'excited'], correct: 2 },
    { question: 'They ______ finished their work for the day.', answers: ['have', 'has', 'are', 'is'], correct: 0 },
    { question: 'I think the food is ______ than what we had last time.', answers: ['better', 'good', 'well', 'best'], correct: 0 },
    { question: 'She’s been ______ her new job for 6 months.', answers: ['at', 'on', 'in', 'with'], correct: 2 }
    // Add more questions here
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');

function renderQuestions() {
    quizContainer.innerHTML = ''; // Clear existing questions
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        
        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionText);
        
        q.answers.forEach((answer, i) => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            `;
            questionDiv.appendChild(label);
        });
        
        quizContainer.appendChild(questionDiv);
    });
}

document.getElementById('submit').addEventListener('click', function() {
    let score = 0;
    let allAnswered = true;
    
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        const labels = document.querySelectorAll(`input[name="question${index}"]`).forEach(input => {
            const label = input.parentElement;
            label.classList.remove('correct', 'incorrect');
            if (input.value == q.correct) {
                label.classList.add('correct');
            } else if (input.checked) {
                label.classList.add('incorrect');
            }
        });
        
        if (selectedAnswer && selectedAnswer.value == q.correct) {
            score++;
        } else if (!selectedAnswer) {
            allAnswered = false;
        }
    });
    
    if (!allAnswered) {
        alert('Please answer all questions.');
        return;
    }
    
    scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;
    resultContainer.classList.remove('hidden');
});

// Initialize the quiz
renderQuestions();
