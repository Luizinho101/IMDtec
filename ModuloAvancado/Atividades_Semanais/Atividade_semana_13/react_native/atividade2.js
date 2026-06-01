import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (titulo.trim() === '') {
      Alert.alert('Erro', 'Por favor, digite pelo menos o título da tarefa.');
      return;
    }

    const novaTarefa = {
      id: Math.random().toString(),
      titulo: titulo,
      descricao: descricao,
      data: data,
    };

    setListaTarefas((listaAtual) => [...listaAtual, novaTarefa]);

    setTitulo('');
    setDescricao('');
    setData('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloApp}>Minhas Tarefas 📝</Text>

      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Título da tarefa"
          value={titulo}
          onChangeText={(text) => setTitulo(text)}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Descrição da tarefa"
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Data (ex: 12/10/2026 ou Hoje)"
          value={data}
          onChangeText={(text) => setData(text)}
        />

        <Button title="Adicionar Tarefa" color="#28a745" onPress={adicionarTarefa} />
      </View>

      <Text style={styles.subtitulo}>Lista de Atividades:</Text>

      <FlatList
        data={listaTarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardTarefa}>
            <Text style={styles.cardTitulo}>{item.titulo}</Text>
            {item.descricao ? <Text style={styles.cardDescricao}>{item.descricao}</Text> : null}
            {item.data ? <Text style={styles.cardData}>📅 {item.data}</Text> : null}
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.listaVazia}>Nenhuma tarefa cadastrada ainda.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  tituloApp: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  formulario: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: '#fafafa',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 10,
  },
  cardTarefa: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderLeftWidth: 5,
    borderLeftColor: '#007bff',
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  cardDescricao: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  cardData: {
    fontSize: 12,
    color: '#999',
    marginTop: 6,
    fontStyle: 'italic',
  },
  listaVazia: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
    fontSize: 14,
  },
});