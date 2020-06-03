import React,{useEffect,useState} from 'react';
import TakePicture from "./TakePicture";

import Colors from '../constants/Colors';
import {TextInput,Text, TouchableOpacity, View, StyleSheet, AsyncStorage} from "react-native";

export default function AddSucculents({navigation}) {

    const [name,setName] = useState("");
    const [picture,setPicture] = useState(null);
    const create=(e)=>{
        AsyncStorage.setItem("MySucculent",JSON.stringify({
            name: name,
            picture: picture,
            entries:[]
        }))
        console.log(navigation);
        navigation.navigate('my-succulent')
    }
    return (
       <View style={style.container}>
           <TextInput placeHolder="Succulent Name" style={style.my} onChangeText={name=>setName(name)}/>
          <TakePicture onPictureTaken={setPicture}/>
          <TouchableOpacity style={style.button} onPress={create}>
              <Text style={{color:'white'}}>Create succulent</Text>
          </TouchableOpacity>
       </View>
    );
}
const style=StyleSheet.create({
    container:{
        flex:1,
        width: '90%',
        marginLeft: '5%'
    },
    my:{
        marginTop: "7px",
        marginBottom: "7px",
        borderBottom:"1px solid #ccc",
        height: "25px",
        padding: "3px"
    },
    button: {
        padding: "4px",
        textAlign:"center",
        backgroundColor: 'rgba(0,0,0,.66)',
        fontSize: "120%",
        color: "white",
        marginTop: "12px",
        borderRadius: "5px"
    }


})