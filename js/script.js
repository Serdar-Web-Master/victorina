// import { a, b} from "./vars.js";
// console.log(a,b);

// All answer option 
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

// All our options
const optionElement = document.querySelector('.option');

const question = document.getElementById('question'),
      numberOfQuestion = document.getElementById("number-of-question"),
      numberOfAllQuestion = document.getElementById("number-of-all-questions");

let indexOfQuestion, //индекс текущего вопроса
    indexOfPage = 0; // индекс страниц

    const answersTracker = document.querySelector('.answers-tracker');
    const btnNext = document.querySelector('.btn-next');
    
    let score = 0; // Итоговый результат викторины

     const correctAnswer = document.getElementById("correct-answer"),
            numberOfAllQuestion2 = document.getElementById("number-of-all-questions-2"),
            btnTruAgain = document.getElementById("btn-try-again");

const questions = [
   {
      question: "Как в JavaScript вычислить процент от числа",
      options: [
         "Так в JavaScript нельзя делать",
         "Оператор : %",
         "Умножить на кол во процентов и разделить на 100",
         "Вызвать метод findPrecent()",
      ],
      rightAnswer: 2
   },
   {
      question: "Как в JavaScript вычислить процент от числа 222",
      options: [
         "Так в JavaScript нельзя делать 222",
         "Оператор : % 222",
         "Умножить на кол во процентов и разделить на 100 222",
         "Вызвать метод findPrecent() 222",
      ],
      rightAnswer: 1
   },
];


numberOfAllQuestion.innerHTML = questions.length //выводим кол во всех вопросов

const load = () => {
   question.innerHTML = questions[1].question;
}

window.addEventListener("load",()=>{
   load();
})