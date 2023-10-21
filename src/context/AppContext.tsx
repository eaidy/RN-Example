import { createContext, useState } from 'react';
import { NetworkHandler } from '@services';
import { ClientCredentials } from '@models';

interface AppContextType {
  networkHandler: NetworkHandler | null;
  clientCredentials: ClientCredentials | null;
  appTheme: string | null;
  setClientCredentials: ((credentials: ClientCredentials) => void) | null;
  setAppTheme: ((theme: string) => void) | null
}

const AppContext = createContext<AppContextType>({
  networkHandler: null,
  clientCredentials: null,
  appTheme: null,
  setAppTheme: null,
  setClientCredentials: null
});

const AppProvider = (props: { 
    children: React.ReactNode, 
    defaultTheme: string, 
}) => {

  const [appTheme, setAppTheme] = useState<string>(props.defaultTheme)
  const [clientCredentials, setClientCredentials] = useState<ClientCredentials>(null)

  const networkHandler = NetworkHandler.shared(null)

  return (
    <AppContext.Provider
      value={{
        networkHandler,
        clientCredentials,
        appTheme,
        setAppTheme,
        setClientCredentials
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
