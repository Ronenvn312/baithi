import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Screen2() {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}>
            <View style={{ flex: 0.1, flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 0.1, justifyContent: 'flex-start' }}>
                    <Image
                        source={require('../assets/menu.png')} />
                </TouchableOpacity>
                <Text style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
                    Welcome
                </Text>
                <TouchableOpacity style={{ flex: 0.1, justifyContent: 'flex-start' }}>
                    <Image
                        style={{ width: 40, height: 40 }}
                        source={require('../assets/anh1.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.12 }}>
                <View style={{ flex: 0.4, flexDirection: 'row' }}>
                    <Text
                        style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}
                    >
                        Chose </Text>
                    <Text style={{ color: 'green', fontSize: 30, fontWeight: 'bold' }} >
                        Your</Text>
                </View>
                <View style={{ flex: 0.4, flexDirection: 'row' }}>
                    <Text
                        style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}
                    >
                        Favorite </Text>
                    <Text style={{ color: 'green', fontSize: 30, fontWeight: 'bold' }} >
                        Plant</Text>
                </View>
            </View>
            <View style={{ flex: 0.07, flexDirection: 'row', width: 390, marginLeft: 10 }}>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', backgroundColor: '#f0f8ff', alignItems: 'center', borderRadius: 10 }}>
                    <TouchableOpacity
                        style={{ width: 20, height: 15, justifyContent: 'flex-start' }}>
                        <Image

                            source={require('../assets/search.png')} />
                    </TouchableOpacity>

                    <TextInput
                        style={{ flex: 0.9, justifyContent: 'flex-start' }}
                    >Search Product</TextInput>
                    <Image
                        style={{ justifyContent: 'flex-start' }}
                        source={require('../assets/zero.png')}
                    ></Image>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.04, flexDirection: 'row' }}>
                <Text
                    style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}
                >
                    Categories </Text>
            </View>
            <View style={{ flex: 0.05, flexDirection: 'row', margin: 5 }}>
                <TouchableOpacity style={{ marginRight: 30 }}>
                    <Text
                        style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
                        Plant
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 30 }}>
                    <Text
                        style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
                        Planters
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 30 }}>
                    <Text
                        style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
                        Tools
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 30 }}>
                    <Text
                        style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
                        Tropical
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 30 }}>
                    <Text
                        style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
                        Decor
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.8, margin: 20 }}>
                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Screen3')}
                        style={{ flex: 0.5, alignItems: 'center' }}>
                        <Image
                            style={{ justifyContent: 'flex-start', width: 150, height: 150 }}
                            source={require('../assets/anh1.png')} />
                        <Text>Green Leafed</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 0.6 }}> $20</Text>
                            <Image
                                source={require('../assets/shop.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.5, alignItems: 'center' }}>
                        <Image
                            style={{ justifyContent: 'flex-start', width: 150, height: 150 }}
                            source={require('../assets/anh2.png')} />
                        <Text>Green Leafed</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 0.6 }}> $20</Text>
                            <Image
                                source={require('../assets/shop.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ flex: 0.5, alignItems: 'center' }}>
                        <Image
                            style={{ justifyContent: 'flex-start', width: 150, height: 150 }}
                            source={require('../assets/anh3.png')} />
                        <Text>Green Leafed</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 0.6 }}> $20</Text>
                            <Image
                                source={require('../assets/shop.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.5, alignItems: 'center' }}>
                        <Image
                            style={{ justifyContent: 'flex-start', width: 150, height: 150 }}
                            source={require('../assets/anh4.png')} />
                        <Text>Green Leafed</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 0.6 }}> $20</Text>
                            <Image
                                source={require('../assets/shop.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.1, flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/home.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/Explore.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/Articles.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/Profile.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
