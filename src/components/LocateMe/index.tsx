import React from 'react';
import styled from 'styled-components';
import { NearMe } from '@material-ui/icons';

import { InputBase, Button, InputBaseProps } from '@material-ui/core';

interface Props extends InputBaseProps {
  placeholder?: string;
  label: string;
  full?: boolean;
}

const LocateMe = (props: Props) => {
  const { label, ...otherProps } = props;

  return (
    <Container>
      <InputBase {...otherProps}></InputBase>
      <Button variant="contained" color="secondary">
        <NearMe />
        {label}
      </Button>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color-white);
  border-radius: 50px;
  padding: 0.5rem;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 4px 26px -6px rgba(0, 0, 0, 0.75);
  input {
    font-size: 1.5rem;
    padding-left: 1rem;
  }
  button {
    color: var(--color-white);
    border-radius: 20px;
  }
  div {
    flex: 1;
  }
`;

export default LocateMe;
