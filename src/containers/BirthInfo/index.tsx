import React from 'react';
import Router from 'next/router';
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import styled from 'styled-components';

import { ContainerWrapper, DatePicker } from '../../components';
import { FormButton } from 'src/components/Buttons';

interface Props {
  children?: any;
}

const BirthInfo = (props: Props) => {
  const [selectedValue, setSelectedValue] = React.useState('male');
  const [selectedDate, handleDateChange] = React.useState(new Date());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <ContainerWrapper
      title="Lucky!"
      desc="We have coverage in your city. To snap out your annual healthcare expense tell"
    >
      <GenderRadioGroup
        row
        aria-label="gender"
        name="gender"
        value={selectedValue}
        onChange={handleChange}
      >
        <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
        <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
      </GenderRadioGroup>
      <DatePicker></DatePicker>
      <FormButton variant="contained" color="primary" onClick={() => Router.push('/details-info')}>
        NEXT
      </FormButton>
    </ContainerWrapper>
  );
};

const GenderRadioGroup = styled(RadioGroup)`
  justify-content: space-around;
  .MuiFormControlLabel-root {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .MuiFormControlLabel-label {
    font-size: 1.5rem;
  }
`;

export default BirthInfo;
