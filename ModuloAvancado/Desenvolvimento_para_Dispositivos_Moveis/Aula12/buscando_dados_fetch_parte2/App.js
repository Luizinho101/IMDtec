import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar , ActivityIndicator} from 'react-native';



export default function App() {

    const [posts, setPosts] = useState([])
    const [isLoading, setLoading] = useState(true)

const getPostsNaAPI = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      //coloquei o if ,pois, só o fato de trocar  a url não fazia o código entrar no catch e disparar o alerta
      // Esse if faz o código se comportar do jeito que eu quero que é jogar o erro 400, 404 e 500 para o catch

      if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

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

  return (
    <View style={styles.container}>
      {isLoading
        ? <ActivityIndicator />
        : <Text style={{ fontSize: 20 }} > {posts.length > 0 ? posts[0].title : 'Não possui postagens carregadas'}</Text>
      }
      <StatusBar style="auto" />
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
