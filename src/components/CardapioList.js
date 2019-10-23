import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, FlatList, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

import api from '../services/api';

function CardapioList({ navigation }) {
    const [cardapio, setCardapio] = useState();
    const rm = navigation.getParam('rm');

    useEffect(() => {
        async function loadCardapio() {
            const response = await api.get('/cardapios', {
                params: { user_id: "5dae7f16dc2e0727c8940922" }
            })

            setCardapio(response.data)
        }

        loadCardapio();
    }, []);

    function handleNavigate(id, dia, ing , desc, thumb, rm) {
        navigation.navigate('Confirm', { id, dia, desc, ing, thumb, rm });
    }

    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
                data={cardapio}
                keyExtractor={ cardapio =>  cardapio._id }
                showsVerticalScrollIndicator={true}
                renderItem={({ item }) => (
                    <View style={styles.listItem}> 
                        <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
                        <Text style={styles.dia}>{item.dia}</Text>
                        <TouchableOpacity onPress={() => handleNavigate(item._id, item.dia, item.descricao, item.ingredientes, item.thumbnail_url, rm)} style={styles.button}>
                            <Text style={styles.buttonText}>Ver Cardapio do Dia</Text>
                        </TouchableOpacity>
                    </View>
                )} 
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        marginTop: 30, 
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
        marginLeft:'13%',
        borderRadius:2,
    }, 

    dia: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    },


    button: {
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
});

export default withNavigation(CardapioList);