import { NativeBaseProvider } from "native-base";
import { Home } from "./src/Screens/Home";

export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}
