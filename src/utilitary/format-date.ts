import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';

export const formatDate = (date: string) => {
  const preformattedDate = Date.parse(date);
  return format(new Date(preformattedDate), 'MMMM d, yyyy', { locale: enGB });
};
