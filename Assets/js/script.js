//function to create the page
function quizCreate(){
    const out = [];
    // for each question
    que.forEach(
        (curQue, queN) => {
            //list of answers
            const answers = [];
            //creating buttons for answers per letter
            for(letter in curQue.answers){
                //im just going to use radio buttons for this part because its easier for me
                answers.push(
                    `<label>
                        <input type="radio" name="question${queN}" value=
                        ${letter} :
                        ${curQue.answers[letter]}}
                    </label>`
                );
        }
        //adding the questions and answers to output array
        out.push(
            `<div class="card">
            <div class="qustion"> ${curQue.question}</div>
            <div class="answers"> ${answers.join('')}</div> 
            `
            );
        }
    );
    


    //and then we output our list 
    quizCont.innerHTML = out.join('');
}

function resultShow(){
    //get answers
    const answerConts =quizCont.querySelectorAll('.answers');
    //keep score
    let score = 0;

    que.forEach( (curQue, queN) => {
        //search for answer
        const answerCont = answerConts[queN];
        const sel = `input[name=question${queN}]:checked`;
        const uAns = (answerCont.querySelector(sel) || {}).value;
        //if user is correct
        if(uAns === curQue.corAns){
            score++;

            //have to do an else statement for saying that you're wrong
        }
    });

    resCont.innerHTML = `${score} out of ${que.length}`;
}

//function to change to next question
function setSlide (n){
    cards[currCard].classList.remove('act-card');
    cards[n].classList.add('act-card');
    currCard = n;
    if(currCard === cards.length-1){
        nextButt.style.display = 'none';
        subButt.style.display = 'inline-block';

    }

    else{
        subButt.style.display = 'none';
    }

}

function shoNextQue(){
    setSlide(currCard + 1);
}

function restartQuiz(){
    setSlide(0);
}

const quizCont = document.getElementById('quiz');
const subButt = document.getElementById('submit');
const resCont = document.getElementById('results');


const que = [
    {
        que: "Test Question?",
        ans: {
            a:"Incorrect",
            b:"Correct",
            c:"Incorrect",
            d:"Incorrect"
        },
        corAns: "b"
    },
    {
        que: "Test Question?",
        ans: {
            a:"Incorrect",
            b:"Correct",
            c:"Incorrect",
            d:"Incorrect"
        },
        corAns: "b"
    },
    {
        que: "Test Question?",
        ans: {
            a:"Incorrect",
            b:"Correct",
            c:"Incorrect",
            d:"Incorrect"
        },
        corAns: "b"
    }
];

quizCreate();


const nextButt = document.getElementById("next");
const cards = document.querySelectorAll(".card");
let currCard = 0;

console.log(cards);

setSlide(currCard);

nextButt.addEventListener('click', shoNextQue);
subButt.addEventListener('click', resultShow);


