import { useEffect, useState } from "react";
import Descriptions from "./components/descriptions/Descriptions.jsx";
import Options from "./components/options/Options.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import "./App.css";

function App() {
  const [FeedbackData, setFeedbackData] = useState(() => {
    const savedData = localStorage.getItem('FeedbackData')
    return savedData ? JSON.parse(savedData) : {
      Good: 0,
      Neutral: 0,
      Bad: 0,
      Total: 0,
      Positive: 0
    }
    
  });

  const handleOptionClick = (option) => {
    setFeedbackData((prev) => {
      const updatedOption = prev[option] + 1;
      const updatedTotal = prev.Good + prev.Neutral + prev.Bad + 1;
      const updatedPositive = Math.round(
        ((prev.Good + (option === "Good" ? 1 : 0)) / updatedTotal) * 100
      );

      return {
        ...prev,
        [option]: updatedOption,
        Total: updatedTotal,
        Positive: updatedPositive,
      };
    });
  };
  useEffect(() => {
    const feedbackDataToSave = {
      Good: FeedbackData.Good,
      Neutral: FeedbackData.Neutral,
      Bad: FeedbackData.Bad,
      Total: FeedbackData.Total,
      Positive: FeedbackData.Positive,
    };
    localStorage.clear();
    localStorage.setItem('FeedbackData', JSON.stringify(feedbackDataToSave));
  }, [FeedbackData]); // Добавьте FeedbackData в зависимости
  
  const handlReset = () => {
    setFeedbackData({
      Good: 0,
      Neutral: 0,
      Bad: 0,
      Total: 0,
      Positive: 0
    })
  }
  const hasFeedBack = FeedbackData.Total > 0;

  return (
    <>
      <div>
        <Descriptions />
      </div>
      <div>
        <Options onOptionClick={handleOptionClick} onReset={handlReset} hasFeedBack={hasFeedBack}/>
      </div>
      {hasFeedBack && 
      <div>
      <Feedback feedbackData={FeedbackData} />
  </div>
  }
      
    </>
  );
}

export default App;
