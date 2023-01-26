import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from "@expo-google-fonts/ubuntu";
import { Loading } from "./loading";

export const UseFonts = () => {
  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return {
      Ubuntu_300Light,
      Ubuntu_300Light_Italic,
      Ubuntu_400Regular,
      Ubuntu_400Regular_Italic,
      Ubuntu_500Medium,
      Ubuntu_500Medium_Italic,
      Ubuntu_700Bold,
      Ubuntu_700Bold_Italic,
    };
  }
};
