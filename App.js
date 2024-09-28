import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import fondo from './assets/fondo.jpg'; // Asegúrate de que la imagen exista en esta ruta

export default function App() {
  return (
    <ImageBackground source={fondo} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>DAILY DIARIES</Text>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    alignItems: 'center',
    marginTop: -470, // Ajusta el valor según lo que necesites
  },
  text: {
    color: 'white', 
    fontSize: 40,
    fontFamily: 'Garet',
  },
});