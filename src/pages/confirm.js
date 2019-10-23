import React, { useState } from 'react';
import { Text,TouchableOpacity, Image, StyleSheet, SafeAreaView, AsyncStorage } from 'react-native';

import logo from '../Assets/logo.png';



export default function Confirm({ navigation }) {
    const rm = navigation.getParam('rm');
    const thumb = navigation.getParam('thumb');
    const dia = navigation.getParam('dia');
    const desc = navigation.getParam('desc');
    const ing = navigation.getParam('ing');

    async function handleSubmit() {
        navigation.navigate('List');
    }

    async function handleSubmiter(dia, rm) {

        navigation.navigate('Pratos', { dia, rm });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source= {logo} style={styles.img}/>
            <Text style={styles.dia}>{dia}</Text>
            <Image style={styles.thumbnail} source={{ uri: thumb }} />
            <Text style={styles.desc}>{ing}</Text>
            <Text style={styles.negr}>Ingredientes: <Text style={styles.ing}>{desc}</Text></Text>
            <TouchableOpacity onPress={() => handleSubmiter(dia, rm)} style={styles.button}>
                <Text style={styles.buttonText}>Vou Comer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} style={styles.buttonw}>
                <Text style={styles.buttonText}>Não Vou Comer</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60, 
    },

    img: {
        height:100 ,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 10,
    },

    list: {
        textAlign: 'center',
        paddingVertical: 20,
        marginLeft: 50,
        marginRight: 50,
    },

    listItem: {
        marginBottom: 15,
    },  

    thumbnail: {
        width: 200, 
        height: 120,
        resizeMode: 'cover',
        borderRadius:2,
        marginLeft: '22%'
    }, 

    dia: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
        marginBottom: 10,
        textAlign:'center',
    },

    desc: {
        fontSize: 20,
        color: '#000',
        marginTop: 10,
        marginBottom: 10,
        textAlign:'center',
    },

    ing: {
        fontSize: 12,
        color: '#333',
        fontWeight: 'normal',
        marginTop:10,
        marginBottom: 10,
        marginHorizontal:'10%',
        textAlign: 'center'   
    },

    negr: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
        marginTop:10,
        marginBottom: 10,
        marginHorizontal: '10%',
        textAlign: 'center'   
    },

    button: {
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