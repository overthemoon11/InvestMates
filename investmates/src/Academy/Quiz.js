import React, { useState, useRef } from 'react';
import './Quiz.css'; // Import your CSS file for styling

const Quiz = ({ startQuiz, topic }) => {

    const [questions, setQuestions] = useState([
        {
            "question": "Which of the following is NOT a form of investment?",
            "answer": "Purchasing a lottery ticket",
            "options": [
                { text: "Buying stocks", status: "wrong", selected: false },
                { text: "Purchasing a lottery ticket", status: "correct", selected: false },
                { text: "Investing in real estate", status: "wrong", selected: false },
                { text: "Buying government bonds", status: "wrong", selected: false }
            ]
        },
        {
            "question": "What do investors typically aim to achieve through investing?",
            "answer": "Generating returns that exceed the initial investment",
            "options": [
                { text: "Minimizing potential risks", status: "wrong", selected: false },
                { text: "Maintaining the same level of wealth indefinitely", status: "wrong", selected: false },
                { text: "Generating returns that exceed the initial investment", status: "correct", selected: false },
                { text: "Avoiding all forms of financial transactions", status: "wrong", selected: false }
            ]
        },
        {
            "question": "Which of the following statements about investment risks is true?",
            "answer": "Investors assume certain risks in pursuit of potential rewards",
            "options": [
                { text: "Investing involves no risks whatsoever", status: "wrong", selected: false },
                { text: "Investors never assume any risks", status: "wrong", selected: false },
                { text: "Investing always guarantees high returns", status: "wrong", selected: false },
                { text: "Investors assume certain risks in pursuit of potential rewards", status: "correct", selected: false }
            ]
        }
    ]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const selectedOptionIndex = useRef(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleOptionSelect = (index) => {
        if (!isAnswered) {
            // Update the selected option
            selectedOptionIndex.current = index;
            setIsAnswered(true);
    
            // Mark the selected option as selected
            const updatedQuestions = [...questions];
            const selectedOption = updatedQuestions[currentQuestionIndex].options[index];
            selectedOption.selected = true;
    
            // Check if the selected option is correct or wrong and update its status
            if (selectedOption.status === 'correct') {
                selectedOption.class = 'correct';
            } else {
                selectedOption.class = 'wrong';
            }
    
            // Update state with the new questions array
            setQuestions(updatedQuestions);
        }
    }       
    
    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        selectedOptionIndex.current = null; // Reset selected option
        setIsAnswered(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="quiz-container">
            <div className="left-component">
                <h2 className='question-container'>{questions[currentQuestionIndex].question}</h2>
                <button
                    className="next-button"
                    onClick={() => currentQuestionIndex === questions.length - 1 ? startQuiz(false) : handleNextQuestion()}
                >
                    {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
                </button>
            </div>
            <div className="right-component">
                <div className="options-container">
                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <button
                            key={index}
                            className={`option-button ${option.selected ? (option.status === 'correct' ? 'correct' : 'wrong') : ''}`}
                            onClick={() => handleOptionSelect(index)}
                            disabled={isAnswered}
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quiz;