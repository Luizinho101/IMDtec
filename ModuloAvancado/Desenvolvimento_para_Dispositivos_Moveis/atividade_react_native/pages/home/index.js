import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const buscarUsuarios = async () => {
    try {
     
      const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
      const dados = await resposta.json();
      setUsuarios(dados);
    } catch (erro) {
      alert('Erro ao carregar usuários');
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarUsuarios();
  }, []);

  if (carregando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.cartao}
            onPress={() => navigation.navigate('Detalhes', { usuario: item })}
          >
            <Text style={styles.nome}>{item.name}</Text>
            <Text style={styles.subtitulo}>User: {item.username}</Text>
            <Text style={styles.subtitulo}>Email: {item.email}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
  centro: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  cartao: { backgroundColor: '#fff', padding: 15, borderRadius: 5, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' },
  nome: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  subtitulo: { fontSize: 14, color: '#666' }
});