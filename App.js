import React from 'react';
import { SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import WebView from 'react-native-webview';

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://jstris.jezevec10.com/' }} />
    </SafeAreaView>
  );
}

export default App;
