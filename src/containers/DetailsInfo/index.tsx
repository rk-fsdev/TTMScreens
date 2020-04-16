import React from 'react';
import styled from 'styled-components';
import { List, ListItem, ListItemText } from '@material-ui/core';
import classNames from 'classnames';

import { ContainerWrapper } from 'src/components';
import { FormButton } from 'src/components/Buttons';
import { dummyDetails } from './constants';

interface Props {
  children?: any;
}

const DetailsInfo = (props: Props) => {
  const [activeItem, setActiveItem] = React.useState(0);

  return (
    <ContainerWrapper title="Would you say you are">
      <DetailList>
        {dummyDetails.map((detail, index) => (
          <ListItem
            button
            key={index}
            onClick={() => setActiveItem(index)}
            className={classNames({ active: index === activeItem })}
          >
            <ListItemText primary={detail} />
          </ListItem>
        ))}
      </DetailList>
      <FormButton variant="contained" color="primary" type="submit">
        Submit
      </FormButton>
    </ContainerWrapper>
  );
};

const DetailList = styled(List)`
  .MuiListItem-root {
    border-radius: 20px !important;
    margin-bottom: 1.5rem !important;
    box-shadow: 3px 4px 10px -6px rgba(0, 0, 0, 0.75);
    .MuiListItemText-root {
      span {
        font-size: 1.5rem !important;
      }
    }
  }
  .active {
    border: 3px solid var(--color-primary) !important;
  }
`;

export default DetailsInfo;
