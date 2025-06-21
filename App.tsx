import React from 'react';
import './src/utils/i18n';
import RootNavigator from './src/navigation/RootNavigator';

import { AuthProvider } from './src/context/AuthContext';
import { ThemeProvider } from './src/context/ThemeContext';

const App = () => (
  <AuthProvider>
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  </AuthProvider>
);

export default App;
