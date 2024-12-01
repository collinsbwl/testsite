import { useState, useEffect} from 'react';
import '../styles/financeCoach.css';
import happyImg from '../happy.png';
import neutralImg from '../neutral.png';
import angryImg from '../angry.png';

function FinanceCoach() {
  const [coachStatus, setCoachStatus] = useState('neutral'); // default status neutral

  const statusToImage = {
    happy: happyImg,
    neutral: neutralImg, 
    grumpy: angryImg         
  };

  const statusText = {
    happy: "Happy :)",
    neutral: "Online",
    grumpy: "Grumpy!"
  };

  const statusColors = {
    happy: "#4CAF50",  // green
    neutral: "#808080", // grey
    grumpy: "#FF0000"  // red
  };

  const getRandomStatus = (currentStatus) => {
    const states = Object.keys(statusToImage).filter(state => state !== currentStatus);
    return states[Math.floor(Math.random() * states.length)];
  };

  useEffect(() => {
    // Set initial random status
    getRandomStatus();

    // Change status every 10 seconds
    const interval = setInterval(() => {
      setCoachStatus(prevStatus => getRandomStatus(prevStatus));
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="coach-info">
        <div 
          className="coach-avatar"
          style={{ 
            '--coach-image': `url(${statusToImage[coachStatus]})`,
            backgroundImage: `url(${statusToImage[coachStatus]})`,
          }}
        ></div>
          <div className="coach-details">
            <h3 className="coach-name">Cubby Coach</h3>
            <span 
              className="coach-status"
              style={{ color: statusColors[coachStatus],
                ['--dot-color']: statusColors[coachStatus]
               }}
            > Status: {statusText[coachStatus]}</span>
          </div>
        </div>
      </div>
      <div className="chat-content">
        <div className="chat-title">
          <h1>Hey, what do you want to do today?</h1>
        </div>
      </div>
    </div>
  );
}

export default FinanceCoach;
