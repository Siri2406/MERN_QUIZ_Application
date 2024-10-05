// Quiz.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Quiz.css'; // Import CSS file
import logo from './gcclogo.jpeg';
function Quiz() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = () => {
        axios.get("http://localhost:3001/quiz/Math Quiz")
            .then(response => {
                setQuestions(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleSubmit = () => {
        // Handle submission logic here
    };

    return (    
        <div className="page-container">
            <div className="title">
            <img src={logo} alt="Logo" style={{ position: 'absolute', left: 30, width:90, height: 90, borderRadius:50,display:'flex' }} />
            <span><b>ASSIGNMENTS</b></span>
            </div>
            <h2 className="subtitle">Math Assignment</h2>
            <div className="content-container">
                <div className="sidebar">
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                    </ul>
                </div>
                <div className="quiz-container">
                    <h1 className="quiz-title">GCC Quiz Competition Questions</h1>
                    <div className="questions-wrapper">
                        {questions.map((question, index) => (
                            <div key={index} className="question-container">
                                <div className="question-content">
                                    <h3>{question.question}</h3>
                                    <ul className="options">
                                        {question.options.map((option, optionIndex) => (
                                            <li key={optionIndex} className="option">
                                                <input
                                                    type="checkbox"
                                                    id={`option_${index}_${optionIndex}`}
                                                    name={`question_${index}`}
                                                    value={optionIndex}
                                                />
                                                <label htmlFor={`option_${index}_${optionIndex}`}>{option}</label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="submit-button" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Quiz;
