import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from "styled-components";
import { 
  useFonts, 
  SpaceMono_400Regular,
  SpaceMono_700Bold
} from "@expo-google-fonts/space-mono";

import { Routes } from './src/router';
import { colors } from './src/uteis/colors';

export default function App() {

  const [LoadingFonts] = useFonts({
    SpaceMono_400Regular,
    SpaceMono_700Bold
  })

  if (!LoadingFonts){
    return <ActivityIndicator size={"large"} color='#5700AF'/>
  }
  
  return (
    <ThemeProvider theme={colors}> 
      <Routes/>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
