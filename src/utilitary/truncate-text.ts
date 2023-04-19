export const truncateText = (text: string): string => {
  let truncatedText = text;

  if (!truncatedText) {
    return '';
  }
  if (truncatedText.length > 120) {
    truncatedText = truncatedText.substring(0, 120);
    const textArray = truncatedText.split(' ');
    textArray.pop();
    truncatedText = textArray.join(' ');
  }
  return `${truncatedText} ...`;
};
