import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import { CountryCode } from '../../types';

import { ValidSuggestion } from '../../types/valid';
import { Search } from '../../components/Search/search';
import { getFormattedAddressText } from '../../utils/getFormattedAddressText';

export type SearchIntegrationProps = {
  country: CountryCode;
  validKey: string;
  placeholder?: string;
};

const SContainer = styled.div`
  width: 500px;
  padding: 10px;
`;

const SCard = styled(Card)`
  margin-top: 20px;
`;

export const SearchIntegration = ({ country, validKey, placeholder }: SearchIntegrationProps) => {
  const [selectedSuggestion, setSelectedSuggestion] = useState<ValidSuggestion>();

  const handleSelect = (option: ValidSuggestion) => {
    setSelectedSuggestion(option);
  };

  const handleClear = () => setSelectedSuggestion(undefined);
  return (
    <SContainer>
      <p>Valid key: {validKey}</p>
      <Search country={country} onSelect={handleSelect} validKey={validKey} placeholder={placeholder} />
      {selectedSuggestion && (
        <SCard
          title={getFormattedAddressText(
            selectedSuggestion.street,
            selectedSuggestion.street_number,
            selectedSuggestion.letter,
            selectedSuggestion.postcode,
            selectedSuggestion.locality,
          )}
          extra={<Button icon={<CloseOutlined />} onClick={handleClear} />}
        />
      )}
    </SContainer>
  );
};
