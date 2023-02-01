import { Box } from 'components/Box/Box.styled';
import Modal from 'components/Modal';
import ModalContent from 'components/Modal/ModalContent/ModalContent';
import { useState, useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserBalance } from 'redux/user/user.selectors';
import { addUserBalanceThunk } from 'redux/user/user.thunk';
import {
  BalanceConfirmButton,
  BalanceContainer,
  BalanceInput,
  BalanceLabel,
} from './Balance.styled';

export default function Balance(props) {
  const dispatch = useDispatch();
  const userBalance = useSelector(selectUserBalance);
  const [balance, setBalance] = useState(userBalance);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = evt => {
    evt.target.blur();

    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const updateBalanceHandler = () => {
    dispatch(addUserBalanceThunk(balance));
    setIsModalOpen(false);
  };

  useEffect(() => {
    setBalance(userBalance);
  }, [userBalance]);

  return (
    <BalanceContainer {...props}>
      <BalanceLabel as="label" htmlFor="balance">
        Balance:
      </BalanceLabel>

      <Box width="100%" display="flex">
        <NumericFormat
          displayType="input"
          value={balance.toFixed(2)}
          customInput={BalanceInput}
          valueIsNumericString={true}
          allowNegative
          decimalScale={2}
          thousandSeparator=" "
          suffix={' UAH'}
          id="balance"
          onValueChange={({ value }) => {
            setBalance(Number(value));
          }}
        />
        <BalanceConfirmButton variant="whiteOutline" onClick={clickHandler}>
          Confirm
        </BalanceConfirmButton>
      </Box>
      {isModalOpen && (
        <Modal onClose={closeModalHandler}>
          <ModalContent
            message={`Are you sure you want to change the balance by ${balance} UAH?`}
            onClose={closeModalHandler}
            onClick={updateBalanceHandler}
          />
        </Modal>
      )}
    </BalanceContainer>
  );
}
