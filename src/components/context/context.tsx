import React from 'react';

interface Genre {
  id?: number;
  name?: string;
}

type GenreList = Genre[];

const { Provider, Consumer } = React.createContext<GenreList>([{}]);

export { Provider, Consumer };
