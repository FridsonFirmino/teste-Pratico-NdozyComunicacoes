import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { 
  useFonts, 
  SpaceMono_400Regular,
  SpaceMono_700Bold
} from "@expo-google-fonts/space-mono";

import { Routes } from './src/router';

export default function App() {

  const [LoadingFonts] = useFonts({
    SpaceMono_400Regular,
    SpaceMono_700Bold
  })

  if (!LoadingFonts){
    return <ActivityIndicator size={"large"} color='#5700AF'/>
  }
  
  return (
    <>
      <Routes/>
      <StatusBar style="auto" />
    </>
  );
}
