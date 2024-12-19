import { useEffect, useState } from "react";
import Descriptions from "./components/descriptions/Description.jsx";
import Options from "./components/options/Options.jsx";
import Notification from './components/Notification/Notification.jsx'
import Feedback from "./components/feedback/Feedback.jsx";
import "./App.css";

function App() {
  const [feedbackData, setFeedbackData] = useState(() => {
    const savedData = localStorage.getItem('feedbackData')
    return savedData ? JSON.parse(savedData) : {
      good: 0,
      neutral: 0,
      bad: 0,

    }
    
  });

  const handleOptionClick = (option) => {
    setFeedbackData((prev) => {
      const updatedOption = prev[option] + 1;
      


      return {
        ...prev,
        [option]: updatedOption,
    
      };
    });
  };
  useEffect(() => {
    localStorage.setItem('feedbackData', JSON.stringify(feedbackData));
}, [feedbackData]);

  const handleReset = () => {
    const initialState = {
      good: 0,
      neutral: 0,
      bad: 0,
      
    }
    setFeedbackData(initialState);

  }
      const totalFeedbacks = feedbackData.good + feedbackData.neutral + feedbackData.bad;
      const positivePercentage = totalFeedbacks > 0 
      ? Math.round((feedbackData.good / totalFeedbacks) * 100) 
      : 0;

  return (
    <>
      <div>
        <Descriptions />
      </div>
      <div>
        <Options onOptionClick={handleOptionClick} onReset={handleReset} hasFeedback={totalFeedbacks > 0}/>
      </div>
      {totalFeedbacks === 0 ? (
        <Notification />
        ) : (
      <Feedback feedbackData={feedbackData} total={totalFeedbacks} positive={positivePercentage}/>
  )
}
  
      
    </>
  );
}

export default App;
