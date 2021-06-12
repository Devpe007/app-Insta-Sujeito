import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function List(props) {

    function carregaIcone(likeada) {
        return likeada ? require('../images/likeada.png') : require('../images/like.png')
    };

    function mostraLikes(likers) {
        if(likers === 0) {
            return;
        };

        return(
            <Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>  
        );
    };

    return(
        <View>
            
            <View style={styles.viewPerfil}>

                <Image
                    style={styles.fotoPerfil}
                    source={{ uri: props.data.imgperfil }}
                />

                <Text style={styles.nomeUsuario}>{props.data.nome}</Text>

            </View>

            <Image
                resizeMode="cover"
                source={{ uri: props.data.imgPublicacao }}
                style={styles.fotoPublication}
            />

            <View style={styles.areaBtn}>

                <TouchableOpacity>

                    <Image
                        source={carregaIcone(props.data.likeada)}
                        style={styles.iconLike}
                    />

                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend}>

                    <Image
                        source={require('../images/comment.png')}
                        style={styles.iconLike}
                    />

                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend}>

                    <Image
                        source={require('../images/send.png')}
                        style={styles.iconLike}
                    />

                </TouchableOpacity>

            </View>

            {mostraLikes(props.data.likers)}

            <Text style={styles.nomeRodape}>
                {props.data.nome}
            </Text>

            <Text style={styles.descRodape}>
                {props.data.descricao}
            </Text>

        </View>
    );
};