import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1000,
    },
    modalContent: {
        width: '90%',
        maxHeight: '80%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 24,
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        paddingBottom: 64,
    },
    closeButton: {
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 1,
    },
    closeButtonText: {
        fontSize: 32,
        color: '#000',
        fontWeight: 'bold',
    },
    header: {
        marginTop: 32,
        marginBottom: 16,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        width: '100%',
    },
    body: {
        flex: 1,
        marginBottom: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});