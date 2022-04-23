import React, {useState} from 'react';

function App(){
const data=[{
    question:"Which player scored the fastest hat-trick in the Premier League?",
    answer:[
        {answerText:"Christiano Ronaldo", isCorrect:false},
        {answerText:"Sadio Mane", isCorrect:true}
]},{
    question:"There have been two World Cup trophies. What was the name of the first?",
    answer:[
        {answerText:"Jules Rimet Trophy", isCorrect:true},
        {answerText:"Golden icon", isCorrect:false}
]
},{
    question:"Which Portuguese team did Ronaldo play for before signing for Manchester United?",
    answer:[
        {answerText:"No.9", isCorrect:false},
        {answerText:"Sporting", isCorrect:true}
]
},{
    question:"Messi has won a record number of Ballon d'Or awards - how many? ",
    answer:[
        {answerText:"Seven Ballon d'Or awards", isCorrect:false},
        {answerText:"Six Ballon d'Or awards", isCorrect:true}
]
}];

const [currentQuestion,setCurrentQuestion]=useState(0);
const [showScore, setShowScore]= useState(false);
const [rightScore,setRightScore]=useState(0);

const handlePress=(isCorrect)=>{
    if(isCorrect){
        setRightScore(rightScore+1)
    }
    const nextQuestion=currentQuestion+1;
    if(nextQuestion<data.length){
setCurrentQuestion(nextQuestion);}else{
    setShowScore(true);
}};

return(
    <div className="container">
    { showScore ? (<div className="score-section">You scored {rightScore} out of {data.length}</div>) : (
        <>
    <div className='question-section'>
        <div className='question-number'>Question {currentQuestion+1}<span>/ {data.length}</span></div>
        <div className='question-text'>{data[currentQuestion].question}</div>
    </div>
    <div className="answer-section">
        {data[currentQuestion].answer.map((options)=>(<button onClick={()=>handlePress(options.isCorrect)}>{options.answerText}</button>))}
    </div>
    </>
    )}
    </div>
)
}

export default App;
