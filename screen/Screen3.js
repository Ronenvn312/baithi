import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'


export default function Screen3() {
    return (
        <View style={{ display: 'flex', flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
             <View style={{ flex: 0.1, flexDirection: 'row' }}>
                <TouchableOpacity
                
                style={{ flex: 0.9, justifyContent: 'flex-start' }}>
                    <Image
                        source={require('../assets/menu.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.1, justifyContent: 'flex-start' }}>
                    <Image
                        style={{ width: 40, height: 40 }}
                        source={require('../assets/Favourite-on.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.3, flexDirection: 'row' }}>
                <Image
                    style={{flex:1, width: 400, height: 400 }}
                    source={require('../assets/anh1.png')}>
                </Image>
            </View>
            <View style={{ flex: 0.6 }}>
                <View style={{ flex: 0.88}}>
                <Text
                        style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}
                    >
                        Potted plant </Text>
                </View>
                <View style={{ flex: 0.1}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Screen2')}
                    style={{ backgroundColor: "green", flex: 1, width: 370, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Buy now</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
