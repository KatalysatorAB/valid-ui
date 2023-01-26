import React from 'react';
import { DrilldownSuggest, DrilldownSuggestProps } from '../DrilldownSuggest/drilldown-suggest';
import { ValidKeyNotProvided } from '../ValidKeyNotProvided/valid-key-not-provided';

export type SearchProps = DrilldownSuggestProps & {};

export const Search = ({ country, validKey, onSelect, placeholder }: SearchProps) =>
  validKey ? (
    <DrilldownSuggest country={country} onSelect={onSelect} validKey={validKey} placeholder={placeholder} />
  ) : (
    <ValidKeyNotProvided />
  );
