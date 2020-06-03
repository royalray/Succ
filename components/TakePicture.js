import {Camera} from "expo-camera";
import React,{useEffect,useState} from 'react';

import Colors from '../constants/Colors';
import {View, TouchableOpacity, Text, StyleSheet, Image} from "react-native";

export default function TakePicture(props) {
    const [hasPermission,setHasPermission] = useState(null);
    const [type,setType] = useState(Camera.Constants.Type.back);
    const [picture,setPicture] = useState({});
    const [currentCamera,setCurrentCamera] = useState(null);
    useEffect(()=>{
        (async ()=>{
            const {status} = await Camera.isAvailableAsync();
            setHasPermission(status==='granted')
        })();
    },[])
    const takePicture = async ()=>{
        let lastPic = await currentCamera.takePictureAsync();
        setPicture(lastPic);
        props.onPictureTaken(lastPic);
    }
    const showPreview = () =>{
        if(typeof picture.uri !== 'undefined'){
            return(
                <TouchableOpacity style={styles.takePic} onPress={()=>{setPicture({})}}>
                    <Image style={{flex:1}} source={picture.uri}/>
                    <Text style={styles.button}>Take new picture</Text>
                </TouchableOpacity>

                )
        } else {
            return (
                <Camera ref={ref=>{setCurrentCamera(ref)}} style={{flex:1}} type={type}>
                    <TouchableOpacity style={styles.takePic} onPress={()=>{takePicture()}}>
                        <Text style={styles.button}>Take picture</Text>

                    </TouchableOpacity>
                </Camera>
            )
        }
    }
    return (
        <View style={styles.container}>
            {showPreview()}
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    takePic:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        alignContent:'flex-end'
    },
    button:{
        marginBottom: '12px',
        marginLeft:'auto',
        marginRight:'auto',
        position:'relative',
        color:'white',
        width: '100px',
        height: '100px',
        textAlign: 'center center',
        paddingLeft: '8px',
        paddingTop: '45px',
        paddingRight: '8px',
        paddingBottom: '6px',
        borderLeft: '1px solid rgba(0,0,0,.30)',
        borderTop: '1px solid rgba(0,0,0,.30)',
        borderRight: '1px solid rgba(0,0,0,.30)',
        borderBottom: '1px solid rgba(0,0,0,.30)',
        borderRadius: '50%',
        backgroundColor: 'rgba(0,0,0,.66)'
    }
})