import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ title, content, onClick }) => (
  <div className="col-md-6 mb-4">
    <div className="card" onClick={onClick}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  </div>
);

const App = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    // If the clicked card is already expanded, return early
    if (index === expandedCardIndex) return;
    
    // Otherwise, toggle the expanded state
    setExpandedCardIndex(index);
  };

  const cards = [
    { title: 'Card 1', content: 'This is the content of Card 1' },
    { title: 'Card 2', content: 'This is the content of Card 2' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 4', content: 'This is the content of Card 4' },
  ];

  const remainingCards = cards.filter((_, index) => index !== expandedCardIndex);

  return (
    <div className="container">
      <div className="row">
        {remainingCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      {expandedCardIndex !== null && (
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {cards[expandedCardIndex].title}
                </h5>
                <p className="card-text">
                  {cards[expandedCardIndex].content}
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => setExpandedCardIndex(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
