import { useForm, Controller } from 'react-hook-form';
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
  ErrorMessage,
} from './AddingExpensessArea.styled';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { CalendarIcon } from './calendar';

export const AddingExpensessArea = ({ categories, addFunction }) => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      date: new Date(),
      description: '',
      amount: '',
      category: null,
    },
  });

  const options = categories?.map(category => {
    return { value: category.toLowerCase(), label: category };
  });

  const onSubmit = data => {
    dispatch(
      addFunction({
        ...data,
        amount: Number(data.amount),
        category: data.category.label,
        date: format(data.date, 'yyyy-MM-dd'),
      })
    );

    reset();
  };
  const err = Object.values(errors);

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
                  selected={getValues(field.name)}
                  onChange={date => {
                    setValue(field.name, date);
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
                rules={{
                  required: 'Description is requiered',
                }}
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
                rules={{
                  validate: data => (data ? true : 'Category is requires'),
                }}
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
              rules={{
                validate: data =>
                  data > 0 ? true : 'Amount must be greater than 0',
              }}
              render={({ field }) => (
                <AmountInput {...field} type="number" placeholder="0,00" />
              )}
            />
          </AmountLabel>
          {err.length > 0 && <ErrorMessage>{err[0].message}</ErrorMessage>}
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
