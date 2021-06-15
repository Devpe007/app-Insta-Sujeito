import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

export default function BaseBoard() {
    return(
        <View style={styles.button}>

            <TouchableOpacity style={styles.bbtn}>

                <Image
                    style={styles.bbtn}
                    source={require('../images/home.png')}
                />

            </TouchableOpacity>

            <TouchableOpacity>

                <Image
                    style={styles.bbtn}
                    source={require('../images/shared.png')}
                />

            </TouchableOpacity>

            <TouchableOpacity>

                <Image
                    style={styles.bbtn}
                    source={require('../images/new.png')}
                />

            </TouchableOpacity>

            <TouchableOpacity>

                <Image
                    style={styles.bbtn}
                    source={require('../images/cvazio.png')}
                />

            </TouchableOpacity>

            <TouchableOpacity>

                <Image
                    style={styles.perfil}
                    source={require('../images/perfil.jpeg')}
                />

            </TouchableOpacity>

        </View>
    );
};