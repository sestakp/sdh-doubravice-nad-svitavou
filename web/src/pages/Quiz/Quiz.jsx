
import Quiz from 'react-quiz-component';
import { quizData } from './quizData';
import "./Quiz.css"


function YoungFirefightersQuiz(){

    
    return(
        <div>
            <Quiz quiz={quizData} shuffle={true}/>
        </div>
    )

}




export default YoungFirefightersQuiz;