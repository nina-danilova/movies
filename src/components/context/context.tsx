import React from 'react';

interface GenreListType {
  id: number;
  name: string;
}

const { Provider, Consumer } = React.createContext<GenreListType[]>([{ id: 1, name: 'GenreName' }]);

export { Provider, Consumer };
