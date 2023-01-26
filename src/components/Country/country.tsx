import React, { useMemo } from 'react';
import { Select } from 'antd';
import { CountryCode, countryDictionary, CountryEntity } from '../../types/country';
import styled from '@emotion/styled';

export type CountryMode = 'text' | 'icons' | 'text-icons' | 'icons-text';

export type CountryProps = {
  countries?: CountryCode[];
  onSelect: (country: CountryCode) => void;
  countryMode?: CountryMode;
  countryPlaceholder?: string;
};

const SSelect = styled(Select)`
  width: 100%;
`;

export const Country = ({
  countries = [CountryCode.Sweden, CountryCode.Germany, CountryCode.Denmark, CountryCode.Norway, CountryCode.Finland],
  onSelect,
  countryMode = 'text',
}: CountryProps) => {
  const availableCountries = useMemo(
    () => countryDictionary.filter(c => countries.some(code => code === c.code)),
    [countries],
  );

  const handleSelect = (country: CountryCode) => {
    onSelect(country);
  };

  const renderLabel = (countryEntity: CountryEntity) => {
    switch (countryMode) {
      case 'text':
        return countryEntity.label;
      case 'icons':
        return <>{countryEntity.icon}</>;
      case 'icons-text':
        return (
          <>
            {countryEntity.icon} {countryEntity.label}
          </>
        );
      case 'text-icons':
        return (
          <>
            {countryEntity.label} {countryEntity.icon}
          </>
        );
      default:
        return countryEntity.label;
    }
  };

  return (
    <SSelect placeholder="Please select" onSelect={handleSelect as any}>
      {availableCountries.map(c => (
        <Select.Option value={c.code} key={c.code}>
          {renderLabel(c)}
        </Select.Option>
      ))}
    </SSelect>
  );
};
