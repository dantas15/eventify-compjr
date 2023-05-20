import { isValid, parseISO } from 'date-fns';

export function validateAndParseISODate(date: string) {
  return isValid(date) ? parseISO(date) : false;
}
