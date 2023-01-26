export const getFormattedAddressText = (
  street?: string,
  street_number?: string,
  letter?: string,
  postcode?: string,
  locality?: string,
): string => {
  let address = street;
  if (street_number && street_number !== '') {
    address += ` ${street_number}`;
  } else {
    address += '';
  }
  if (letter && letter !== '') {
    address += `${letter},`;
  } else {
    address += ',';
  }
  if (postcode && postcode !== '') address += ` ${postcode}`;
  if (locality && locality !== '') address += ` ${locality}`;

  return address || '';
};
