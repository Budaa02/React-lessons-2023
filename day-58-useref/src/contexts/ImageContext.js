import { createContext, useState } from "react";

const ImageContext = createContext(null);

const ImageContextProvider = ({ children }) => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <ImageContext.Provider value={[isLarge, setIsLarge]}>
      {children}
    </ImageContext.Provider>
  );
};
export { ImageContextProvider, ImageContext };
