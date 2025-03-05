import React from 'react';
import Btn from './Btn';

const Card = ({title , description , image}) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    textAlign: 'center',
    backgroundColor: '#fff'
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '16px'
  };

  return (
    <div style={cardStyle}>
      <img 
        src={image} 
        alt="Placeholder" 
        style={imageStyle}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <Btn title="purchase"/>
    </div>
  );
};

export default Card;
