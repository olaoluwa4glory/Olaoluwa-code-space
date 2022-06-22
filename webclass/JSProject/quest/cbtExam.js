// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(json => console.log(json[0]))

// Array of examQuestions, options and correct answers
const examQuestions = [{
        question: '1) In the stability of floating bodies, the stable equilibrum is attained if the meta centre (M) point ....... the centre of gravity(G).',
        a: 'lies above',
        b: 'coincides with',
        c: 'is parallel to',
        d: 'lies below',
        correctAnswer: 'lies above'
    },

    {
        question: '2) Rain drops spherical because of?',
        a: 'viscosity',
        b: 'air resistance',
        c: 'surface tension forces',
        d: 'atmospheric pressure',
        correctAnswer: 'surface tension forces'
    },

    {
        question: '3) Bernoulli equation is applied to?',
        a: 'venturimeter',
        b: 'orifice meter',
        c: 'pilot tube meter',
        d: 'all of the above',
        correctAnswer: 'all of the above'
    },


    {
        question: '4) Assuming constant temperature condition and air to be an ideal gas, the variation in atmospheric pressure with heigth calculated from fluid statics is?',
        a: 'linear',
        b: 'exponential',
        c: 'quadratic',
        d: 'cubic',
        correctAnswer: 'exponential'
    },

    {
        question: '5) A vortex flow is?',
        a: 'rotational flow',
        b: 'irrotational flow',
        c: 'both 1 and 2',
        d: 'free shear flow',
        correctAnswer: 'both 1 and 2'
    },

    {
        question: '6) The pitot tube is used to measure?',
        a: 'velocity at stagnation point',
        b: 'stagnation pressure',
        c: 'static pressure',
        d: 'dynamic pressure',
        correctAnswer: 'stagnation pressure'
    },

    {
        question: '7) The property by virtue of which liquid opposes relative motion between its different layers is called',
        a: 'surface tension',
        b: 'cohension',
        c: 'viscosity',
        d: 'capillarity',
        correctAnswer: 'viscosity'
    },

    {
        question: '8) Froude number is the ratio of?',
        a: 'buoyancy forces to viscous forces',
        b: 'inertia forces to viscous forces',
        c: 'buoyancy forces to inertia forces',
        d: 'inertia forces to gravity forces',
        correctAnswer: 'inertia forces to gravity forces'
    },

    {
        question: '9) The printers ink is an example of?',
        a: 'Newtonian fluid',
        b: 'Non-Newtonian fluid',
        c: 'Thixotropic substance',
        d: 'Elastic solid',
        correctAnswer: 'Thixotropic substance'
    },

    {
        question: '10) Milk, blood and clay are example of what fluid?',
        a: 'Ideal',
        b: 'Pseudo-plastic',
        c: 'Perfect',
        d: 'Newtonian',
        correctAnswer: 'Pseudo-plastic'
    },


]

// Decleration of variables
const examContainer = document.getElementById('examContainer')
const optionContainer = document.getElementById('optionContainer')
const next = document.getElementById('next')
// const back = document.getElementById('back')
const submitbtn = document.getElementById('submitBtn')
const title = document.getElementById('courseTitle')
const lastInstruction = document.getElementById('lastInstruction')
const myScore = document.getElementById('myScore')
const timeUp = document.getElementById('timeUp')
const scoreContainer = document.getElementById('scoreContainer')
const print = document.getElementById('printBtn')


// Initializing the variable myExam to zero
let myExam = 0

// Initializing the variable Score to zero
let score = 0

// Creating a function to populate and display the examQuestions
function loadExam() {
    // This display questions
    let exam = examQuestions[myExam]
    let questExam = exam.question
    // console.log(questExam);
    examContainer.textContent = questExam

    // This display the options
    let options = `
       a)  ${exam.a} &nbsp;&nbsp; <input type = 'radio' name = 'option' value = '${exam.a}'/> <br/><br/>
       b)  ${exam.b} &nbsp;&nbsp;  <input type = 'radio' name = 'option' value = '${exam.b}'/> <br/><br/>
       c)  ${exam.c} &nbsp;&nbsp; <input type = 'radio' name = 'option' value = '${exam.c}'/> <br/><br/>
       d)  ${exam.d} &nbsp;&nbsp; <input type = 'radio' name = 'option' value = '${exam.d}'/><br/><br/>
    `

    optionContainer.innerHTML = options
}
loadExam()

// Hiding the Submit Button
submitBtn.style.display = 'none'

// Hiding the last instruction
lastInstruction.style.display = 'none'

// Hide the timeUp button
timeUp.style.display = 'none'

// Hide the print button
printBtn.style.display = 'none'

// Add an event listener to foward and backward button
next.addEventListener('click', validateNext)
// back.addEventListener('click', validateBack)

// Creating a function for validation
function validateNext() {
    let radioCheck = document.querySelector('input[type= radio]:checked')

    if (!radioCheck) {
        alert('please pick an answer')
    } else {

        if (myExam === examQuestions.length - 1) {
            submitBtn.style.display = 'Block'
            next.style.display = 'none'
            // back.style.display = 'Block'
            lastInstruction.style.display = 'Block'
        }

        // if (myExam === examQuestions.length - 2) {
        //     back.style.display = 'Block'
        // }
        // For correct score
        if (radioCheck.value === examQuestions[myExam].correctAnswer) {
            score += 10
            // alert(`You score ${score}`)

        }

        // backward.style.display = 'none'

        // moving to the next question
        myExam++
        loadExam()

    }
}
// moving to the previous question
// function validateBack() {
//     myExam--
//     loadExam()
//     let radioCheck = document.querySelector('input[type= radio]:checked')

// if(radioCheck){
//     alert('please pick an answer')
// }
// else{

//     // moving to the next question


// }
// }

// Adding an event listener to the submit button
submitBtn.addEventListener('click', submitFunction)

function submitFunction() {
    examContainer.style.display = 'none'
    optionContainer.style.display = 'none'
    next.style.display = 'none'
    // back.style.display = 'none'
    submitbtn.style.display = 'none'
    courseTitle.style.display = 'none'
    lastInstruction.style.display = 'none'
    printBtn.style.display = 'Block'
    scoreContainer.textContent = `You score ${score} / ${examQuestions.length * 10}`
    scoreContainer.style.fontSize = '40px'
    scoreContainer.style.paddingTop = '100px'
    scoreContainer.style.textAlign = 'center'

    // myScore.innerHTML = `Your final score is ${score} from ${examQuestions.length * 10 }`
    // myScore.style.display = 'none' 

}

// spell operator


// Timer functionality

let totalTime = 180;
let min = 0;
let sec = 0;
let counter = 0;
let timer = setInterval(myTimer, 1000)

function myTimer() {
    counter++;
    min = Math.floor((totalTime - counter) / 60)
    sec = totalTime - min * 60 - counter
    // console.log(sec);


    // const timerBox = document.getElementById('timerBox')
    const timeLeft = document.getElementById('timeLeft')
    timeLeft.textContent = min + " : " + sec
    timeLeft.style.fontSize = '1.2rem'
    // timerBox.appendChild(timeLeft)

    if (counter === totalTime) {
        console.log(counter === totalTime);
        clearInterval(timer)
        timeUp.style.display = 'block'
        examContainer.style.display = 'none'
        optionContainer.style.display = 'none'
        next.style.display = 'none'
        // back.style.display = 'none'
        courseTitle.style.display = 'none'
        printBtn.style.display = 'Block'
        scoreContainer.textContent = `You score ${score} / ${examQuestions.length * 10}`
        scoreContainer.style.fontSize = '40px'
        scoreContainer.style.paddingTop = '100px'
        scoreContainer.style.textAlign = 'center'

        // btn3.style.display = 'block'
    }
}