import { useForm, Controller } from 'react-hook-form';
// import css from './Select.module.css';
import { useState } from 'react';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import {
  StyledDatePicker,
  Form,
  DateLabel,
  DescritionLabel,
  DescriptionInput,
  SelectLabel,
  AmountLabel,
  AmountInput,
  StyledCalculatorIcon,
  SubmitBtn,
  ClearBtn,
  InputWrapper,
  DescrWrapper,
  BtnWrapper,
} from './AddingExpensessArea.styled';
// import { addExpenseThunk } from 'redux/transactions/transactions.thunk';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { CalendarIcon } from './calendar';

export const AddingExpensessArea = ({ categories, addFunction }) => {
  const [startDate, setStartDate] = useState(() => new Date());

  const dispatch = useDispatch();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      date: new Date(),
      description: '',
      amount: '',
      // category: {},
    },
  });

  const options = categories.map(category => {
    return { value: category.toLowerCase(), label: category };
  });

  const onSubmit = e => {
    const data = {
      ...e,
      category: e.category.label,
      date: format(e.date, 'yyyy-MM-dd'),
    };
    dispatch(addFunction(data));
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <DateLabel htmlFor="">
            <CalendarIcon />
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <StyledDatePicker
                  {...field}
                  selected={startDate}
                  onChange={date => {
                    return setStartDate(date);
                  }}
                  dateFormat="MM.dd.yyyy"
                />
              )}
            />
          </DateLabel>
          <DescrWrapper>
            <DescritionLabel htmlFor="">
              <Controller
                value={control._defaultValues.description}
                name="description"
                control={control}
                render={({ field }) => (
                  <DescriptionInput
                    {...field}
                    type="text"
                    placeholder="Product description"
                  />
                )}
              />
            </DescritionLabel>

            <SelectLabel htmlFor="">
              <Controller
                value={control._defaultValues.category}
                name="category"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={options}
                    placeholder="Category"
                    styles={{
                      container: (baseStyles, state) => ({
                        ...baseStyles,
                        border: 'none',
                        outline: 'none',
                      }),
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        border: 'none',
                        outline: 'none',
                        backgroundColor: 'transparent',
                      }),
                    }}
                    classNames={{
                      control: state =>
                        state.isFocused ? 'border-red-600' : 'border-grey-300',
                    }}
                  />
                )}
              />
            </SelectLabel>
          </DescrWrapper>
          <AmountLabel htmlFor="">
            <StyledCalculatorIcon />
            <Controller
              value={control._defaultValues.number}
              name="amount"
              control={control}
              render={({ field }) => (
                <AmountInput {...field} type="number" placeholder="0,00" />
              )}
            />
          </AmountLabel>
        </InputWrapper>
        <BtnWrapper>
          <SubmitBtn type="submit">Input</SubmitBtn>
          <ClearBtn type="button" onClick={() => reset()}>
            Clear
          </ClearBtn>
        </BtnWrapper>
      </Form>
    </>
  );
};
