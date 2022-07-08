import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from "./context/AuthContext";
import Navigation from './routes/Navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
