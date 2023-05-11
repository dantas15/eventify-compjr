import s from 'slugify';

export function slugify(str: string) {
  return s(str, {
    lower: true,
    replacement: '-',
    remove: /[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]/g
  });
}
