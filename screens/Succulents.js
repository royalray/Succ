import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, AsyncStorage } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AddSucculent from "../components/AddSucculent";


import { MonoText } from '../components/StyledText';
import Entries from "../components/Entries";

export default function Succulents() {
    const [mySucculent,setMySucculent]=React.useState({name:'',picture:{uri:''},entries:[]})
    React.useEffect(()=>{
        try {
            AsyncStorage.getItem("MySucculent").then(Succulent=>{
                if(Succulent !== null){
                    setMySucculent(JSON.parse(Succulent))
                } else {
                    setMySucculent({
                        name:'No image yet',
                        picture:{
                            uri: ''
                        },
                        entries:[]
                    })
                }

            })

        }catch (e) {

        }
    },[])
    const updateEntries = (entries) => {
        mySucculent.entries = [...entries,...mySucculent.entries];
        console.log(mySucculent);
        setMySucculent(mySucculent);
        AsyncStorage.setItem('MySucculent',JSON.stringify(mySucculent));
    }
    return (
        <View style={styles.container}>
            <Text style={styles.succulentName}>{mySucculent.name}</Text>
            <Image style={styles.succulentImage} source={mySucculent.picture.uri}/>
            <Entries entries={mySucculent.entries} callBack={updateEntries}/>
        </View>
    );
}


Succulents.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    succulentName:{
        paddingLeft: '30px',
        fontSize: '160%',
        marginTop: '20px'
    },
    succulentImage:{
        width: '100%',
        height: '200px',
        marginTop: '20px',
        minHeight: '300px'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '90%',
        marginLeft: '5%'
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        flex: 1,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
