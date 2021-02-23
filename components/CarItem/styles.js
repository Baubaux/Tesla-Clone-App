import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: windowHeight,
    },

    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },

    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },

    subtileCTA: {
        textDecorationLine: 'underline',
        
    },

    subtitle: {
        fontSize: 16,
        color: '#5c5e62'
    },

    image: {
        width: '100%',
        height:'100%',
        resizeMode: 'cover',
        position: 'absolute',
    },

    buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    }
});

export default styles;