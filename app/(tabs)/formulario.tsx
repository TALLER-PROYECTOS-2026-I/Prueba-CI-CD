import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Formulario() {
  const router = useRouter();

  const [destinatario, setDestinatario] = useState('');
  const [cc, setCc] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const enviar = () => {
    if (!destinatario || !asunto || !mensaje) {
      alert("Todos los campos son obligatorios");
      return;
    }

    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.label}>1. Destinatario</Text>
      <TextInput style={styles.input} onChangeText={setDestinatario} />

      <Text style={styles.label}>2. CC</Text>
      <TextInput style={styles.input} onChangeText={setCc} />

      <Text style={styles.label}>3. Asunto</Text>
      <TextInput style={styles.input} onChangeText={setAsunto} />

      <Text style={styles.label}>4. Mensaje al Docente</Text>
      <TextInput
        style={[styles.input, { height: 120 }]}
        multiline
        onChangeText={setMensaje}
      />

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btnBack} onPress={() => router.back()}>
          <Text style={styles.btnText}>Volver</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend} onPress={enviar}>
          <Text style={styles.btnText}>Enviar</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de éxito */}
      <Modal transparent visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              Acción realizada con éxito
            </Text>
            <Text style={{ fontSize: 30 }}>✔️</Text>

            <TouchableOpacity
              style={styles.btnSend}
              onPress={() => {
                setModalVisible(false);
                router.back();
              }}
            >
              <Text style={styles.btnText}>Finalizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btnBack: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  btnSend: {
    backgroundColor: '#d32f2f',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
});