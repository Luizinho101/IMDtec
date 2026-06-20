
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';

const Item = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.titulo}>{props.item.title}</Text>
    </View>
  )
}

export default function App() {

  const getPostsNaAPI = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json()
      setPosts(posts)
    } catch (error) {
      setPosts([])
      alert('Falha ao acessar servidor. Tente novamente mais tarde!')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPostsNaAPI()
  }, [])

  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)

  return (
    <SafeAreaView style={styles.container}>
      {isLoading
        ? <ActivityIndicator />
        : <FlatList data={posts} renderItem={Item} keyExtractor={item => item.id} />
      }
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#0AE',
    padding: 20,
    margin: 8
  },
  titulo: {
    color: 'white'
  }
});
