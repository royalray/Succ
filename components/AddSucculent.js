import React,{useEffect,useState} from 'react';
import TakePicture from "./TakePicture";

import Colors from '../constants/Colors';
import {TextInput,Text, TouchableOpacity, View, StyleSheet, AsyncStorage} from "react-native";

export default function AddSucculents(props) {
    const [name,setName] = useState("");
    const [picture,setPicture] = useState(null);
    const create=(e)=>{
        AsyncStorage.setItem("MySucculent",JSON.stringify({
            name: name,
            picture: picture
        }))
        console.log(name)
        console.log(picture)
    }
    return (
       <View style={{flex:1}}>
           <TextInput style={style.my} onChangeText={name=>setName(name)}/>
          <TakePicture onPictureTaken={setPicture}/>
          <TouchableOpacity style={style.button} onPress={create}>
              <Text>Create</Text>
          </TouchableOpacity>
       </View>
    );
}
const style=StyleSheet.create({
    my:{
        marginTop: "7px",
        marginBottom: "7px"
    },
    button: {
        padding: "4px",
        backgroundColor: "blue",
        color: "white"


    }


})