import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, Platform } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
            <Image source={require('../../assets/youtube.png')} style={styles.logo} resizeMode="contain" />
                <Text style={styles.text}>YouTube</Text>
            </View>
        
        <View style={styles.right}>
            <TouchableOpacity>
                <Image source={require('../../assets/cast.png')} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.notificationWrapper}>
                <Image source={require('../../assets/sino.png')} style={styles.icon} />
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../../assets/lupa.png')} style={styles.icon} />
             </TouchableOpacity>
        </View>
        </View>
    );


}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 10,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 5
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 18,
        tintColor: '#fff'
    },
    notificationWrapper: {
        position: 'relative'
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -10,
        backgroundColor: 'red',
        borderRadius: 10,
        minWidth: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 3
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold'
    }
});