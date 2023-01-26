import React, { MouseEventHandler, ReactNode, useEffect, useState } from 'react';
import { AutoComplete, Spin, AutoCompleteProps } from 'antd';
import styled from '@emotion/styled';
import { DrilldownOption } from '../DrilldownOption/drilldown-option';
import { ValidResponse, ValidSuggestion } from '../../types/valid';
import { useDebounce } from '../../utils/useDebounce';
import { generateValidUrl } from '../../utils/generateValidUrl';
import { CountryCode } from '../../types';
import { ValidEndpoint, ValidQuery } from '../../consts/valid';
import { request } from '../../utils/request';
import { getFormattedAddressText } from '../../utils/getFormattedAddressText';
import { DrilldownHeader } from '../DrilldownHeader/drilldown-header';
import { CountryCodes } from '../../types/country';

export type AutocompleteOption = {
  value: string;
  label: ReactNode;
  suggestion: ValidSuggestion;
};

export type DrilldownSuggestOption = {
  value: string;
  suggestion: ValidSuggestion;
};

export type DrilldownSuggestProps = {
  country?: CountryCodes | CountryCode;
  validKey: string;
  onSelect: (suggestion: ValidSuggestion) => void;
  placeholder?: string;
};

const SAutocomplete = styled(AutoComplete)`
  width: 100%;
`;

const SLoaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DrilldownSuggest = ({ country, onSelect, validKey, placeholder }: DrilldownSuggestProps) => {
  const [options, setOptions] = useState<DrilldownSuggestOption[]>([]);
  const [value, setValue] = useState('');
  const [moreText, setMoreText] = useState('');
  const [moreOptions, setMoreOptions] = useState<DrilldownSuggestOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchText, setSearchText] = useState('');

  const debounceSearchText = useDebounce(searchText, 300);

  const handleClear = () => {
    setOptions([]);
    setMoreOptions([]);
    setMoreText('');
  };

  const fetchData = async (group_path?: string) => {
    if (!country) {
      return;
    }

    if (!group_path) {
      handleClear();
    }
    const additionalParams = group_path ? { group_path } : {};
    const url = generateValidUrl({
      country,
      endpoint: ValidEndpoint.Suggest,
      query: ValidQuery.Address,
      apiKey: validKey,
      params: {
        query: debounceSearchText as string,
        group: 'true',
        max_rows: '100',
        ...additionalParams,
      },
    });

    const setterFunction = group_path ? setMoreOptions : setOptions;

    try {
      setIsLoading(true);

      const response = await request<ValidResponse>(url);
      const addresses = response?.suggestions;
      setterFunction(
        addresses
          ? addresses.map(address => {
              const { street, street_number, letter, postcode, locality } = address;
              return {
                value: getFormattedAddressText(street, street_number, letter, postcode, locality),
                suggestion: address,
              } as DrilldownSuggestOption;
            })
          : [],
      );
      setIsLoading(false);
    } catch (error) {
      setterFunction([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (debounceSearchText === '' || debounceSearchText === null) {
      setOptions([]);
      return;
    }

    if (country) {
      fetchData();
    }
  }, [debounceSearchText, country]);

  const handleSearch = (searchText: string) => {
    handleClear();
    setSearchText(searchText);
  };

  const handleChange: AutoCompleteProps<string, AutocompleteOption>['onChange'] = newValue => {
    setValue(newValue);
  };

  const handleMore = async ({ street, street_number, letter, postcode, locality, group_path }: ValidSuggestion) => {
    fetchData(group_path);
    setMoreText(getFormattedAddressText(street, street_number, letter, postcode, locality));
  };

  const handleBack = () => {
    setMoreText('');
    setMoreOptions([]);
  };

  const handlePreventDefault: MouseEventHandler<HTMLElement> = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  const opt = [
    moreText
      ? {
          // all values had to be the same because otherwise antd did not rerender options correctly
          value: 'option',
          label: <DrilldownHeader name={moreText} onBack={handleBack} />,
        }
      : undefined,
    ...(moreText && moreOptions
      ? moreOptions.map(o => ({
          value: o.value,
          label: <DrilldownOption option={o.suggestion} onMore={handleMore} />,
          suggestion: o.suggestion,
        }))
      : []),
    ...(!moreText && options
      ? options.map(o => ({
          value: o.value,
          label: <DrilldownOption option={o.suggestion} onMore={handleMore} />,
          suggestion: o.suggestion,
        }))
      : []),
    isLoading
      ? {
          value: 'option',
          label: (
            <SLoaderContainer onClick={handlePreventDefault}>
              <Spin />
            </SLoaderContainer>
          ),
        }
      : undefined,
  ].filter(o => o) as AutoCompleteProps['options'];

  const handleSelect: AutoCompleteProps<string, AutocompleteOption>['onSelect'] = (value, option) => {
    setValue(value);
    setSearchText('');
    onSelect(option.suggestion);
    handleClear();
  };

  return (
    <SAutocomplete
      disabled={!country}
      value={value}
      allowClear={true}
      onSearch={handleSearch}
      onChange={handleChange as any}
      onSelect={handleSelect as any}
      options={opt}
      placeholder={placeholder}
    />
  );
};
