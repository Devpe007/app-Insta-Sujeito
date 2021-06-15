import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewPerfil:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    fotoPerfil:{
        width: 30,
        height: 30,
        borderRadius: 25,
    },
    nomeUsuario:{
       paddingLeft: 5,
       fontSize: 22,
       color: '#000000',
    },
    fotoPublication:{
        height: 400,
        alignItems: 'center',
    },
    areaBtn:{
        flexDirection: 'row',
        padding: 5,
    },
    iconLike:{
        width: 25,
        height: 25,
    },
    btnSend:{
        paddingLeft: 5,
    },
    likes:{
        fontWeight: 'bold',
        marginLeft: 5,
    },
    nomeRodape:{
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5,
    },
    descRodape:{
        paddingLeft: 5,
        paddingBottom: 10,
        fontSize: 15,
    },
});

export default styles;