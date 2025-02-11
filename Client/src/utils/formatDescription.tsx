import DOMPurify from 'dompurify';

export const formatDescription = (description: string): string => {
  return DOMPurify.sanitize(description.replace(/\n/g, '<br />'));
};