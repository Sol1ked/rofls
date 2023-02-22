const questions = [
    {
        title: 'У Вани есть 10 яблок, сколько яблок он получит, если отдаст своему альтер эго 2?',
        variants: ['12 яблок', '8 яблок', 'Ты как из палаты сбежал?'],
        correct: 2,
    },
    {
        title: 'Какой язык программирования самый лучший?',
        variants: ['Python', 'Pethon', 'Paython'],
        correct: 0,
    },
    {
        title: 'Что не может делать разработчик, когда спит?',
        variants: [
            'Писать код',
            'Не писать код',
            'Спать',
        ],
        correct: 2,
    },
    {
        title: 'Что больше? 1 запрос по 1000 или 1000 запросов по 1?',
        variants: [
            'Не знаю',
            '1 запрос по 1000',
            '1000 запросов по 1',
        ],
        correct: 0,
    },
];

let titleQuestion = document.querySelector('.question');
let answersQuestion = document.querySelectorAll('.answers li');
let counterQuestion = 0;
let finalQuestion = document.querySelector('.result');
let boxQuestion = document.querySelector('.app__container');
let progressQuestion = document.querySelector('.progress__inner');
let totalQuestion = document.querySelector('.result__title');
let trueAnswers = 0;
let resetQuiz = document.querySelector('.result__button');
progressQuestion.style.width = '0%';

answersQuestion.forEach((elem, index) => {
   elem.addEventListener('click', () => {
       if(index === questions[counterQuestion].correct) {
           trueAnswers++;
       }
       progressQuestion.style.width = 100 / questions.length * (counterQuestion + 1) + '%';
       addQuestion(counterQuestion);

   });
});

function resultQuestion() {
    finalQuestion.classList.remove('hide');
    boxQuestion.classList.add('hide');
    totalQuestion.innerHTML = `Вы отгадали ${trueAnswers} ответа из ${questions.length}`;
}


function addQuestion() {

    if(counterQuestion === questions.length - 1) {
        resultQuestion();
    }
    else {
        counterQuestion++;
        displayQuestion(counterQuestion);
    }
}

function displayQuestion(counter) {
    titleQuestion.innerHTML = questions[counter].title;
    for (let i = 0 ; i < questions[counter].variants.length; i++) {
        answersQuestion[i].innerHTML = questions[counter].variants[i];
    }
}

resetQuiz.addEventListener('click', ()=> {
    location.reload();
});

displayQuestion(counterQuestion);
