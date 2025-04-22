import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export const useCustomFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          // Đăng ký font với tên bạn muốn sử dụng
          'bold': require('../assets/fonts/Bold.ttf'),
          'italic': require('../assets/fonts/Italic.ttf'),
          'medium': require('../assets/fonts/Medium.ttf'),
          'semibold': require('../assets/fonts/SemiBold.ttf'),
          'regular': require('../assets/fonts/Regular.ttf'),
        });
        console.log('Fonts loaded successfully');
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    };
    loadFonts();
  }, []);

  return fontsLoaded;
};