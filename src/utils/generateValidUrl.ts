import { VALID_API_URL, VALID_API_VERSION, ValidEndpoint, ValidQuery } from '../consts/valid';
import { CountryCode } from '../types';
import { CountryCodes } from '../types/country';

export type ValidParams = {
  query?: string;
  street?: string;
  street_number?: string;
  extra_number?: string;
  letter?: string;
  locality?: string;
  postcode?: string;
  group?: string;
  group_path?: string;
  max_rows?: string;
};

export type GenerateValidUrl = {
  country: CountryCode | CountryCodes;
  endpoint: ValidEndpoint;
  query: ValidQuery;
  apiKey?: string;
  coordinate?: boolean;
  administrative?: boolean;
  property_designation?: boolean;
  params: ValidParams;
};

export const generateValidUrl = ({
  country,
  query,
  endpoint,
  apiKey,
  coordinate,
  administrative = true,
  property_designation,
  params,
}: GenerateValidUrl) => {
  const url = new URL(`${VALID_API_URL}/${VALID_API_VERSION}/${country}/${endpoint}/${query}`);

  if (apiKey) url.searchParams.append('api_key', apiKey);

  if (administrative) {
    url.searchParams.append('administrative', 'true');
  }

  if (coordinate) {
    url.searchParams.append('coordinate', 'true');
  }

  if (property_designation) {
    url.searchParams.append('property_designation', 'true');
  }

  const entries = Object.entries(params).filter(([, value]) => value);
  for (const [key, value] of entries) {
    url.searchParams.append(key, value);
  }

  return url.href;
};
