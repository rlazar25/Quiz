class Quiz{
    questions;
    questionIndex = 0;
    score = 0;
    constructor(questions) {
        this.questions = questions;
    }
    getQuestion(){
        let currentQuestion = this.questions[this.questionIndex]
        currentQuestion.options = Utils.randomize(currentQuestion.options)
        return currentQuestion
    }
    userAnswer(answer){
        if(answer === this.getQuestion().correct_answer){
            this.score += this.getQuestion().points;
        }
        this.questionIndex++;
    }
    isEnd(){
        return this.questionIndex === this.questions.length;
    }
}

// prima podatke iz question.js
// let quiz = new Quiz(questions)