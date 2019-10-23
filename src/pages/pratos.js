import React, { useState, useEffect }from 'react';
import { SafeAreaView, TouchableOpacity, Text, AsyncStorage, Image, StyleSheet } from 'react-native';

import api from '../services/api';

import logo from '../Assets/logo.png';
export default function Login({ navigation }) {

    const dia = navigation.getParam('dia');
    const rm = navigation.getParam('rm');

    async function handleSubmit(rm) {
        const response = await api.post('/soma', {
            soma: 1,
            dia: dia,
            rm: rm,
        })

        navigation.navigate('List', { rm });
    }

    async function handleSubmit2(rm) {
        const response = await api.post('/soma', {
            soma: 2,
            dia: dia,
            rm: rm,
        })

        navigation.navigate('List', { rm });
    }

    async function handleSubmit3(rm) {
        const response = await api.post('/soma', {
            soma: 3,
            dia: dia,
            rm: rm,
        })

        navigation.navigate('List',{ rm });
    }
    
    async function handleReturn(rm) {
        navigation.navigate('List', { rm });
    }

    return(
        console.log(rm),
        console.log(dia),
    <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.text}>Quantos pratos deseja comer?</Text>
        <TouchableOpacity onPress={() => handleSubmit(rm)} value={soma=1} style={styles.button}>
                <Text style={styles.buttonText}>1 Prato</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSubmit2(rm)} style={styles.button}>
            <Text style={styles.buttonText}>2 Pratos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSubmit3(rm)} style={styles.button}>
            <Text style={styles.buttonText}>3 Pratos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleReturn(rm)} style={styles.buttonw}>
            <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    logo:{
        height: 100,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: '7%',
    },

    text: {
        marginHorizontal: '12%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'auto',
        marginTop: 25,
    },  

    button: {
        display: 'flex',
        marginHorizontal: '10%',
        marginVertical: 10,
        height: 35,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginBottom: 10,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize:16,
    },    

    buttonw: {
        marginHorizontal: '10%',
        marginVertical: 10,
        height: 35,
        backgroundColor: '#C0C0C0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginBottom: 10,
    },

    buttonwText: {
        color: '#333',
        fontWeight: 'bold',
        fontSize:16,
    },  
});