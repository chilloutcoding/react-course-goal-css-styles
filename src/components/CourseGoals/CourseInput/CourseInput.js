import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValidGoal, setIsValidGoal] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValidGoal(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValidGoal(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValidGoal ? '' : 'invalid'}`}>
        <label style={{color: isValidGoal ? 'black' : 'red'}}>Course Goal</label>
        <input 
          style={{
            borderColor: isValidGoal ? 'black' : 'red',
            background: isValidGoal ? 'transparent' : 'salmon'}} type="text" onChange={goalInputChangeHandler} 
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
