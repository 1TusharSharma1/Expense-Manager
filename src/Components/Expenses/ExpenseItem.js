import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

export default function ExpenseItem(props) {
  const [amount, Updater] = useState(props.amount);
  const clickHandler = () => {
    Updater('∞');
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>₹{amount}
        <button onClick={clickHandler}>Change Price</button></div>
      </div>
    </Card>
  );
} 