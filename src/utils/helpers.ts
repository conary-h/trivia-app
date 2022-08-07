import { isBoolean } from 'lodash';

export const sanitizeBoolean = (value: string) => {
  if (!value) {
    throw new Error('Empty value');
  }
  if (isBoolean(value)) {
    return value;
  }
  return value.toLowerCase() === 'true';
};
