import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { MouseEventHandler } from 'react';

type DrilldownHeaderProp = {
  name: string;
  onBack: () => void;
};

export const DrilldownHeader = ({ name, onBack }: DrilldownHeaderProp) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = event => {
    event.preventDefault();
    event.stopPropagation();
    onBack();
  };

  return (
    <div onClick={handleClick}>
      <ArrowLeftOutlined /> {name}
    </div>
  );
};
