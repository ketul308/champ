import React from 'react';
import { Text } from 'react-native';
import './src/utils/i18n';
import RootNavigator from './src/navigation/RootNavigator';

import { AuthProvider } from './src/context/AuthContext';
import { ThemeProvider } from './src/context/ThemeContext';
import { apiConfig } from './src/config/apiConfig';

const App = () => (
  <AuthProvider>
    <ThemeProvider>
      <Text>{apiConfig.BASE_URL}</Text>
      <RootNavigator />
    </ThemeProvider>
  </AuthProvider>
);

export default App;
