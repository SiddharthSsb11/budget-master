import React from 'react';

const isIncome = Math.round(Math.random());
//50% chance for user to see a different infoMessage on opening
const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' }}>
      <u><strong> Try Saying:</strong></u> &nbsp;  
      Add {isIncome ? 'Income ' : 'Expense '} 
      for {isIncome ? '₹1000 ' : '₹500 '}  
      in Category {isIncome ? 'Salary ' : 'Rent '}
      for {isIncome ? 'Monday ' : 'Thursday '}
    </div>
  );
};

export default InfoCard;