import 'react-native-gesture-handler';

import { AppProvider } from './context/AppContext';
import Container from './navigations/Container';

export default function App(): JSX.Element {
  return (
    <AppProvider 
      defaultTheme='light'
    >
      <Container />
    </AppProvider>
  );
}