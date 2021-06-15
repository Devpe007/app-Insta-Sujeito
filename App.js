import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

import Header from './src/Header';
import Storys from './src/Storys';
import List from './src/List';

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: '1', 
      nome: 'Lucas Silva', 
      descricao: 'Mais um dia de muitos bugs :)', 
      imgperfil: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
      likeada: true, 
      likers: 1
     },
    {
      id: '2', 
      nome: 'Matheus', 
      descricao: 'Isso sim é ser raiz!!!!!', 
      imgperfil: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
      likeada: false, 
      likers: 0
    },
    {
      id: '3', 
      nome: 'Jose Augusto', 
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend', 
      imgperfil: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
      likeada: false, 
      likers: 3
    },
    {
      id: '4', 
      nome: 'Gustavo Henrique', 
      descricao: 'Isso sim que é TI!', 
      imgperfil: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
      likeada: false, 
      likers: 1
    },
    {
      id: '5', 
      nome: 'Guilherme', 
      descricao: 'Boa tarde galera do insta...', 
      imgperfil: 'https://images.pexels.com/photos/8090153/pexels-photo-8090153.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: false, 
      likers: 32
    }
  ]);

  const [storys, setStorys] = useState([
    {
      id: '0',
      nome: 'Seu Story',
      imgperfil: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      igmStory: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png'
    },
    {
      id: '1',
      imgperfil: 'https://images.pexels.com/photos/8090153/pexels-photo-8090153.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      nome: 'Guilherme',
      
      igmStory: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
    },
    {
      id: '2',
      nome: 'Gustavo',
      imgperfil: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      igmStory: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
    },
    {
      id: '3',
      nome: 'Jose',
      imgperfil: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      igmStory: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
    },
    {
      id: '4',
      nome: 'Matheus',
      imgperfil: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      igmStory: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
    },
    {
      id: '5',
      nome: 'Lucas',
      imgperfil: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      igmStory: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
    },
    {
      id: '6',
      nome: 'Pedro',
      imgperfil: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      igmStory: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
    },
  ]);
  
  return(
    <View style={styles.container}>

      <Header/>

      <View>

        <ScrollView>

        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={ (item) => item.id }
          horizontal={true}
          data={storys}
          renderItem={ ({ item }) => <Storys data={item} /> }
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={ (item) => item.id }
          data={feed}
          renderItem={ ({ item }) => <List data={item} /> }
        /> 

        </ScrollView>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});