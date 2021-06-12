import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

export default function Header() {
    return(
        <View style={styles.header}>
            
            <TouchableOpacity>

                <Image
                    source={require('../images/logo.png')}
                    style={styles.logo}
                />

            </TouchableOpacity>

            <TouchableOpacity>

                <Image
                    source={require('../images/send.png')}
                    style={styles.send}
                />

            </TouchableOpacity>

        </View>
    );
};
