import React, { ReactComponentElement } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import { device } from '../../styles/mixins';

interface Props {
  title: string;
  desc?: string;
  children?: any;
}

const ContainerWrapper = (props: Props) => {
  const { children, title, desc = '' } = props;
  return (
    <Container>
      <HeaderWrapper>
        <Typography variant="h1" align="center">
          {title}
        </Typography>
        <Typography variant="body1">{desc}</Typography>
      </HeaderWrapper>
      <FormWrapper>{children}</FormWrapper>
    </Container>
  );
};
const Container = styled.div`
  padding: 5rem;
  background-color: var(--background-color);
  height: 100vh;
  position: relative;
  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${device.mobileL} {
    display: block;
  }
`;

const HeaderWrapper = styled.div`
  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
    font-weight: 600;
    color: var(--color-white);
  }
  p {
    font-size: 2rem;
    color: var(--color-white);
    @media ${device.desktop} {
      text-align: center;
    }
    @media ${device.mobileL} {
      text-align: left;
    }
  }
  @media ${device.mobileL} {
    margin-top: 5rem;
    width: 100%;
  }
`;

const FormWrapper = styled.form`
  background-color: var(--color-white);
  border-radius: 30px;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;
  @media ${device.desktop} {
    padding: 50px;
    width: 100%;
  }
  @media ${device.mobileL} {
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: auto;
    width: 100%;
    padding: 20px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export default ContainerWrapper;
