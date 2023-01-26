import React, { MouseEventHandler } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { ValidSuggestion } from '../../types/valid';

type DrilldownOptionProps = {
  option: ValidSuggestion;
  onMore: (option: ValidSuggestion) => void;
};

const SOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;

  p {
    margin: 0;
  }
  svg {
    fill: rgba(0, 0, 0, 0.45);
  }
`;

const SStreet = styled.p`
  font-weight: 500;
`;

export const DrilldownOption = ({ option, onMore }: DrilldownOptionProps) => {
  const handleMore: MouseEventHandler<HTMLDivElement> = event => {
    event.preventDefault();
    event.stopPropagation();
    onMore(option);
  };

  return option.capturable ? (
    <div>
      <SOption>
        <SStreet>
          {option.street}
          {option.street_number ? ` ${option.street_number}` : ''}
          {option.extra_number ? `- ${option.extra_number}` : ''}
          {option.letter ? ` ${option.letter}` : ''}
          {option.extra ? ` ${option.extra}` : ''},
        </SStreet>
        <p>
          {option.postcode} {option.locality}
        </p>
      </SOption>
    </div>
  ) : (
    <SOption onClick={handleMore}>
      <div>
        <SStreet>{option.street}</SStreet>
        <p>
          {option.postcode} {option.locality} - {option.group_count} Results
        </p>
      </div>
      <ArrowRightOutlined />
    </SOption>
  );
};
