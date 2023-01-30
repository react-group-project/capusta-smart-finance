import { useForm } from 'react-hook-form';
// import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledDatePicker } from './AddingExpensessArea.styled';

export const AddingExpensessArea = () => {
  const { register, handleSubmit, reset } = useForm();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = e => {
    reset();
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledDatePicker
        // selected={startDate}
        // onChange={date => setStartDate(date)}
        {...register('date')}
      />
      <label>
        Product description
        <input type="text" {...register('description')} />
      </label>
      <select name="" id="" {...register('category')}>
        <option value="xs">Extra Small</option>
        <option value="s">Small</option>
        <option value="m" selected>
          Medium
        </option>
        <option value="l">Large</option>
      </select>
      <input type="number" {...register('number')} />
      <button type="submit">Input</button>
      <button type="button" onClick={() => reset()}>
        clear
      </button>
    </form>
  );
};
