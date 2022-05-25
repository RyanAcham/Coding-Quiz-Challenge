const quizCont = document.getElementById('options');
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

]

function quizCreate(){
    const out = [];
    // for each question
    que.forEach(
        (curQue, queN) => {
            //list of answers
            const answers = [];
            //creating buttons for answers per letter
            for(letter in curQue.ans){
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
            `<div class="que"> ${curQue.question}</div>
            <div class="ans"> ${answers.join('')}</div> 
            `
        )
        }
    );
    //and then we output our list 
    quizCont.innerHTML = out.join('');
}
function resultShow(){}

quizCreate();

subButt.addEventListener('click', resultShow);