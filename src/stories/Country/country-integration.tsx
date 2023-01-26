import React, { useState } from 'react';
import { Button, Card } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

import { Country, CountryProps } from '../../components/Country/country';
import { CountryCode, countryDictionary } from '../../types';

export type CountryIntegrationProps = CountryProps;

const SContainer = styled.div`
  width: 500px;
  padding: 10px;
`;

const SCard = styled(Card)`
  margin-top: 20px;
`;

export const CountryIntegration = ({ countryMode, countryPlaceholder }: CountryIntegrationProps) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState<CountryCode>();

  const handleSelect = (option: CountryCode) => {
    setSelectedCountryCode(option);
  };

  const handleClear = () => setSelectedCountryCode(undefined);

  const availableCountries: CountryCode[] = [CountryCode.Sweden, CountryCode.Norway];

  const mappedCountry = selectedCountryCode && countryDictionary.find(c => c.code === selectedCountryCode);
  return (
    <SContainer>
      <Country
        onSelect={handleSelect}
        countryPlaceholder={countryPlaceholder}
        countryMode={countryMode}
        countries={availableCountries}
      />

      {mappedCountry && (
        <SCard
          title={
            <>
              {mappedCountry.icon} {mappedCountry.label}
            </>
          }
          extra={<Button icon={<CloseOutlined />} onClick={handleClear} />}
        />
      )}
    </SContainer>
  );
};
