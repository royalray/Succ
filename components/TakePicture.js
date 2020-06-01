import {Camera} from "expo-camera";
import React,{useEffect,useState} from 'react';

import Colors from '../constants/Colors';
import {View,TouchableOpacity, Text} from "react-native";

export default function TakePicture(props) {
    const [hasPermission,setHasPermission] = useState(null);
    const [type,setType] = useState(Camera.Constants.Type.back);
    const [currentCamera,setCurrentCamera] = useState(null);
    useEffect(()=>{
        (async ()=>{
            const {status} = await Camera.isAvailableAsync();
            setHasPermission(status==='granted')
        })();
    },[])
    const takePicture=async ()=>{
        let picture=await currentCamera.takePictureAsync();
        props.onPictureTaken(picture)
    }
    return (
        <View style={{flex:1}}>
            <Camera ref={ref=>{setCurrentCamera(ref)}} style={{flex:1}} type={type}>
                <TouchableOpacity onPress={()=>{takePicture()}}>
                    <Text>Take Picture</Text>
                </TouchableOpacity>
            </Camera>
        </View>
    );
}
