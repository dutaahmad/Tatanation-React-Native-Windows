import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigator from './navigation/Navigator';
import { SWRConfig } from 'swr';
import { swrConfig } from './libs/hooks';
import { ThemeProvider, useTheme } from './libs/context/ThemeContext';
import { SafeAreaView } from 'react-native';

const ThemedApp: React.FC = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme === 'dark' ? '#0a0a0a' : '#f5f5f5' }}>
      <StackNavigator />
    </SafeAreaView>
  );
};

const App: React.FC = () => {
  return (
    <SWRConfig value={swrConfig}>
      <ThemeProvider>
        <SafeAreaProvider>
          <ThemedApp />
        </SafeAreaProvider>
      </ThemeProvider>
    </SWRConfig>
  );
};

export default App;
