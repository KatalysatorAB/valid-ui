import React, { ReactNode } from 'react';
import { DenmarkFlagIcon, FinlandFlagIcon, GermanyFlagIcon, NorwayFlagIcon, SwedenFlagIcon } from '../assets/country';

export enum CountryCode {
  Sweden = 'se',
  Norway = 'no',
  Finland = 'fi',
  Denmark = 'dk',
  Germany = 'de',
}

export type CountryCodes = 'se' | 'no' | 'fi' | 'dk' | 'de';

export const countryLabel = {
  [CountryCode.Sweden]: 'Sweden',
  [CountryCode.Norway]: 'Norway',
  [CountryCode.Finland]: 'Finland',
  [CountryCode.Denmark]: 'Denmark',
  [CountryCode.Germany]: 'Germany',
};

export type CountryEntity = {
  code: CountryCode;
  icon: ReactNode;
  label: string;
};

export const countryDictionary: CountryEntity[] = [
  { label: countryLabel[CountryCode.Sweden], code: CountryCode.Sweden, icon: <SwedenFlagIcon /> },
  { label: countryLabel[CountryCode.Norway], code: CountryCode.Norway, icon: <NorwayFlagIcon /> },
  { label: countryLabel[CountryCode.Denmark], code: CountryCode.Denmark, icon: <DenmarkFlagIcon /> },
  { label: countryLabel[CountryCode.Finland], code: CountryCode.Finland, icon: <FinlandFlagIcon /> },
  { label: countryLabel[CountryCode.Germany], code: CountryCode.Germany, icon: <GermanyFlagIcon /> },
];
