import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {

   const [posts, setPosts] = useState([])

    const getPostsNaAPI = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json()
      setPosts(posts)
    } catch (error) {
      setPosts([])
      alert('Falha ao acessar servidor. Tente novamente mais tarde!')
    }
  }

  useEffect(() => {
    getPostsNaAPI()
  }, [])


  return (
    <View style={styles.container}>
          <Text>{posts.length > 0 ? posts[0].title : 'Não possui postagens carregadas'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
