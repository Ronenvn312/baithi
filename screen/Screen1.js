import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'


export default function Screen1() {
    const navigation = useNavigation()
    return (
        <View style={{display:'flex', flex: 1, backgroundColor: 'white', alignItems:'center', justifyContent: 'center'}}>
          <View style={{display:'flex', flex: 0.8, backgroundColor: 'white', alignItems:'center', justifyContent: 'center'}}>
          <TouchableOpacity style={{flex: 0.6}}>
                <Image 
                    source={require('../assets/head.png')}/>
            </TouchableOpacity>
            <Text style={{flex: 0.08, fontWeight: 'bold', fontSize: 25}}>
                Welcome To Your Plant
            </Text>
            <Text>
                He who plant a tree love
            </Text>
            <Text>
                no one but himselt
            </Text>

          </View>
            

            <TouchableOpacity 
            onPress={() => navigation.navigate('Screen2')}
            style= {{backgroundColor:"green" , flex: 0.08, width: 370, justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
                <Text style={{ color: 'white', fontSize: 16}}>Get Stated</Text>
            </TouchableOpacity>
        </View>
    )
}
