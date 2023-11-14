import { createContext, useContext } from "react";
import { Youtube } from "../api/youtube";

const YoutubeAPIContenxt = createContext();

const youtube = new Youtube();
export function YoutubeAPIProvider({children}) {
  return(
    <YoutubeAPIContenxt.Provider value={{youtube}}> 
      {children}
    </YoutubeAPIContenxt.Provider>
  )
}

export function useYoutubeAPI(){
  return useContext(YoutubeAPIContenxt);
}
