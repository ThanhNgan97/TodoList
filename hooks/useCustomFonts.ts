import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export const useCustomFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        bold: require('../assets/fonts/Bold.ttf'),
        italic: require('../assets/fonts/Italic.ttf'),
        medium: require('../assets/fonts/Medium.ttf'),
        semibold: require('../assets/fonts/SemiBold.ttf'),
        regular: require('../assets/fonts/Regular.ttf'),
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  return fontsLoaded;
};
