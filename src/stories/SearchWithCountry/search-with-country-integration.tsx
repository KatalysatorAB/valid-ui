import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';

import { ValidSuggestion } from '../../types/valid';
import { SearchWithCountry, SearchWithCountryProps } from '../../components/SearchWithCountry/search-with-country';
import { getFormattedAddressText } from '../../utils/getFormattedAddressText';

export type SearchWithCountryIntegrationProps = {
  validKey: string;
  placeholder?: string;
  countryMode?: SearchWithCountryProps['countryMode'];
};

const SContainer = styled.div`
  width: 500px;
  padding: 10px;
`;

const SCard = styled(Card)`
  margin-top: 20px;
`;

export const SearchWithCountryIntegration = ({
  validKey,
  placeholder,
  countryMode,
}: SearchWithCountryIntegrationProps) => {
  const [selectedSuggestion, setSelectedSuggestion] = useState<ValidSuggestion>();

  const handleSelect = (option: ValidSuggestion) => {
    setSelectedSuggestion(option);
  };

  const handleClear = () => setSelectedSuggestion(undefined);
  return (
    <SContainer>
      <p>Valid key: {validKey}</p>
      <SearchWithCountry
        onSelect={handleSelect}
        validKey={validKey}
        placeholder={placeholder}
        countryMode={countryMode}
      />
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
