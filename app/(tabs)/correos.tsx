import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function CorreosScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sílabos desaprobados</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/formulario')}
      >
        <Text style={styles.icon}>✉️</Text>
        <Text style={styles.text}>Enviar correos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  icon: {
    fontSize: 30,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});