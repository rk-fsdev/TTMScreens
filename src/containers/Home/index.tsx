import React from 'react';
import Router from 'next/router';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

import { LocateMe, ContainerWrapper } from 'src/components';
import { FormButton } from 'src/components/Buttons';

interface Props {
  children?: any;
}

const Home = (props: Props) => {
  return (
    <ContainerWrapper
      title="Where are you located"
      desc="To better personalize your experience let us know where you are"
    >
      <LocateMe label="Locate me" placeholder="Type location..." required />
      <FormButton variant="contained" color="primary" onClick={() => Router.push('/birth-info')}>
        Next
      </FormButton>
    </ContainerWrapper>
  );
};

export default Home;
