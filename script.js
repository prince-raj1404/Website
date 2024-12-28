// Sample MCQs  
const questions = [  
    {  
        question: "What is the capital of France?",  
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],  
        answer: "Paris"  
    },  
    {  
        question: "Which planet is known as the Red Planet?",  
        options: ["Earth", "Mars", "Jupiter", "Saturn"],  
        answer: "Mars"  
    },  
    {  
        question: "Which language is primarily spoken in Brazil?",  
        options: ["Spanish", "Portuguese", "English", "French"],  
        answer: "Portuguese"  
    },  
    {  
        question: "What is the largest ocean on Earth?",  
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],  
        answer: "Pacific Ocean"  
    }  
];  

document.getElementById('generateBtn').addEventListener('click', () => {  
    const randomIndex = Math.floor(Math.random() * questions.length);  
    const { question, options, answer } = questions[randomIndex];  

    let mcqHtml = `<div class="mcq"><p>${question}</p>`;  
    options.forEach(option => {  
        mcqHtml += `<input type="radio" name="mcqAnswer" value="${option}"> ${option}<br>`;  
    });  
    mcqHtml += `<button onclick="checkAnswer('${answer}')">Submit Answer</button></div>`;  

    document.getElementById('output').innerHTML = mcqHtml;  
});  

// Function to check the answer  
function checkAnswer(correctAnswer) {  
    const selected = document.querySelector('input[name="mcqAnswer"]:checked');  
    if (selected) {  
        const userAnswer = selected.value;  
        if (userAnswer === correctAnswer) {  
            alert('Correct Answer!');  
        } else {  
            alert('Wrong Answer. The correct answer is: ' + correctAnswer);  
        }  
    } else {  
        alert('Please select an answer.');  
    }  
}