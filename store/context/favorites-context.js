import { createContext } from "react";

const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  return <FavoriteContext.Provider>{children}</FavoriteContext.Provider>;
}

export default FavoritesContextProvider;
