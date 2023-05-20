import { isValid, parseISO } from 'date-fns';

export function validateAndParseISODate(date: string) {
  return isValid(new Date(date)) ? parseISO(date) : false;
}
