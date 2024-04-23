// console.log(quiz);

let mainH2 = document.querySelector("h2");
let options = document.querySelectorAll('.option');
let main =document.querySelector('main');
let footer = document.querySelector('footer')

mainFunction();
async function mainFunction(){
    let quiz = new Quiz(await API.getAll());
    displayQuestion();
    function displayQuestion(){
        let currentQuestion = quiz.getQuestion();

        mainH2.innerHTML = currentQuestion.text
        options.forEach((option,index) => {
            option.innerHTML = currentQuestion.options[index];
            option.addEventListener('click', userAnswer)
        })
        console.log();
        footer.innerHTML = `Pitanje ${quiz.questionIndex + 1} / ${quiz.questions.length}`
    }

    function userAnswer(e){
        let answer = this.innerHTML;
        quiz.userAnswer(answer);
        if (!quiz.isEnd()){
            displayQuestion();
            
        } else {
            options.forEach(option =>{
                option.style.display = 'none';
            })
            mainH2.innerHTML = 'The Quiz Is Over'
            main.innerHTML = `Your score is ${quiz.score} points`;
        }
    }
}

