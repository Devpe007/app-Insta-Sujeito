import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{
        height: 55,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 0.2,
        shadowColor: '#000000',
        elevation: 1,
    },
    send:{
        width: 23,
        height: 23,
    },
});

export default styles;