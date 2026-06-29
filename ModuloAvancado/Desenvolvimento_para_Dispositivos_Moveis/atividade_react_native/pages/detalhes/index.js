import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function Detalhes({ route, navigation }) {
  const { usuario } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.tituloPrincipal}>{usuario.name}</Text>
      
      <View style={styles.blocoInfo}>
        <Text style={styles.secao}>Contato Adicional</Text>
        <Text style={styles.texto}> Telefone: {usuario.phone}</Text>
        <Text style={styles.texto}> Website: {usuario.website}</Text>
      </View>

      <View style={styles.blocoInfo}>
        <Text style={styles.secao}>Endereço</Text>
        <Text style={styles.texto}> Rua: {usuario.address.street}, {usuario.address.suite}</Text>
        <Text style={styles.texto}> Cidade: {usuario.address.city}</Text>
        <Text style={styles.texto}> CEP: {usuario.address.zipcode}</Text>
      </View>

      <View style={styles.blocoInfo}>
        <Text style={styles.secao}>Empresa</Text>
        <Text style={styles.texto}> Nome: {usuario.company.name}</Text>
        <Text style={styles.texto}> Slogan: "{usuario.company.catchPhrase}"</Text>
      </View>

      <View style={styles.espacoBotao}>
        <Button 
          title="Voltar para Usuários" 
          onPress={() => navigation.goBack()} 
          color="red"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  tituloPrincipal: { fontSize: 24, fontWeight: 'bold', color: '#111', marginBottom: 20 },
  blocoInfo: { marginBottom: 20, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  secao: { fontSize: 16, fontWeight: 'bold', color: '#0000ff', marginBottom: 8 },
  texto: { fontSize: 15, color: '#444', marginBottom: 4, lineHeight: 20 },
  espacoBotao: { marginTop: 10, marginBottom: 40 }
});