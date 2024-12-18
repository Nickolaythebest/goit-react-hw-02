import { useEffect, useState } from "react";
import Descriptions from "./components/descriptions/Description.jsx";
import Options from "./components/options/Options.jsx";
import Notification from './components/Notification/Notification.jsx'
import Feedback from "./components/feedback/Feedback.jsx";
import "./App.css";

function App() {
  const [FeedbackData, setFeedbackData] = useState(() => {
    const savedData = localStorage.getItem('FeedbackData')
    return savedData ? JSON.parse(savedData) : {
      Good: 0,
      Neutral: 0,
      Bad: 0,

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
    const feedbackDataToSave = {
      Good: FeedbackData.Good,
      Neutral: FeedbackData.Neutral,
      Bad: FeedbackData.Bad,
      
    };

    localStorage.setItem('FeedbackData', JSON.stringify(feedbackDataToSave));
  }, [FeedbackData]); 

  const handleReset = () => {
    const initialState = {
      Good: 0,
      Neutral: 0,
      Bad: 0,
      
    }
    setFeedbackData(initialState);
    localStorage.getItem("feedbackData")

  }
      const TotalFeedbacks = FeedbackData.Good + FeedbackData.Neutral + FeedbackData.Bad;
      const PositivePercentage = TotalFeedbacks > 0 
      ? Math.round((FeedbackData.Good / TotalFeedbacks) * 100) 
      : 0;

  return (
    <>
      <div>
        <Descriptions />
      </div>
      <div>
        <Options onOptionClick={handleOptionClick} onReset={handleReset} hasFeedBack={TotalFeedbacks > 0}/>
      </div>
      {!TotalFeedbacks > 0 &&
      <div>
        <Notification hasFeedBack={TotalFeedbacks > 0} />
        </div>}
      {TotalFeedbacks > 0 && 
      <div>
      <Feedback feedbackData={FeedbackData} total={TotalFeedbacks} positive={PositivePercentage}/>
  </div>
  }
      
    </>
  );
}

export default App;
