import React, { useState } from 'react';
import { DrilldownSuggest, DrilldownSuggestProps } from '../DrilldownSuggest/drilldown-suggest';
import { Country, CountryProps } from '../Country/country';
import { CountryCode } from 'react-vite-library';
import styled from '@emotion/styled';
import { ValidKeyNotProvided } from '../ValidKeyNotProvided/valid-key-not-provided';

export type SearchWithCountryProps = Omit<DrilldownSuggestProps, 'country'> & Omit<CountryProps, 'onSelect'> & {};

const SContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SCountryContainer = styled.div`
  width: 150px;
`;

export const SearchWithCountry = ({ validKey, onSelect, placeholder, countryMode }: SearchWithCountryProps) => {
  const [country, setCountry] = useState<CountryCode>();

  const handleCountryChange = (changedCountry: CountryCode) => {
    setCountry(changedCountry);
  };

  return validKey ? (
    <SContainer>
      <SCountryContainer>
        <Country onSelect={handleCountryChange} countryMode={countryMode} />
      </SCountryContainer>
      <DrilldownSuggest country={country} onSelect={onSelect} validKey={validKey} placeholder={placeholder} />
    </SContainer>
  ) : (
    <ValidKeyNotProvided />
  );
};
