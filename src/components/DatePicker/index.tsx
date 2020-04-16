import React from 'react';
import styled from 'styled-components';
import { InputBase } from '@material-ui/core';

interface Props {
  children?: any;
}

const DatePicker = (props: Props) => {
  return (
    <DatePickerWrapper>
      <InputBase placeholder="MM" type="number" inputProps={{ min: '1', max: '12' }}></InputBase>
      <InputBase placeholder="DD" type="number" inputProps={{ min: '1', max: '31' }}></InputBase>
      <InputBase
        placeholder="YYYY"
        type="number"
        inputProps={{ min: '1900', max: new Date().getFullYear() }}
      ></InputBase>
    </DatePickerWrapper>
  );
};

const DatePickerWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white);
  width: 100%;
  box-shadow: 3px 4px 26px -6px rgba(0, 0, 0, 0.75);
  border-radius: 30px;
  padding: 1rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input {
    font-size: 2rem;
    text-align: center;
  }
  input::placeholder {
    padding: 5px 0 5px;
  }
  div {
    flex: 1;
  }
  div:nth-child(2) {
    border: 2px solid var(--color-gray);
    border-bottom: 0px;
    border-top: 0px;
  }
`;

export default DatePicker;
