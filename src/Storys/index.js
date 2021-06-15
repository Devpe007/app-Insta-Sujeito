import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';

import styles from './styles';

export default function App(props) {
    const [modalVisible, setModalVisible] = useState(false);

    function openModal() {
        setModalVisible(true);
    };

    function closeModal (){
        setModalVisible(false);
    };

    return(
        <View>

            <TouchableOpacity style={styles.areaStory} onPress={ openModal }>

                <Image
                    style={styles.imgStorys}
                    source={{ uri: props.data.imgperfil }}
                />

                <Text style={styles.nameStorys}>{props.data.nome}</Text>

            </TouchableOpacity>

            <Modal animationType='slide' visible={ modalVisible }>

                <View>

                    <TouchableOpacity onPress={ closeModal }>

                        <Image
                            style={styles.photoStory}
                            source={{ uri: props.data.igmStory }}
                        />

                    </TouchableOpacity>

                </View>

            </Modal>

        </View>
    );
};