import React from 'react';
import {View, TextInput, Text, Button, StyleSheet} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
export default function AddEntry({callBack}){
    let today = new Date();
    const [date,setDate] = React.useState((today.getMonth()+1) + '/' + today.getDay());
    const [note,setNote] = React.useState('');

    const submit = ()=>{
        callBack({
            note,
            date
        });
        setNote('');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.headline}>
                New entry
            </Text>
            <TextInput
                value={date}
                onChangeText={(input) => setDate(input)}
                pattern={'/d{2}\/d{2}/'}
                placeholder={'Date'}
                style={styles.input}
            />
            <TextInput
                value={note}
                onChangeText={(input) => setNote(input)}
                placeholder={'Note'}
                style={styles.input}
            />
            <Button
                title={'Capture new entry'}
                style={styles.input}
                onPress={submit}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        borderColor: '#ccc',
        borderWidth: '1px',
        padding: '8px',
    },
    headline:{
        textAlign:'center',
        fontWeight:'900',
        paddingBottom: '7px',
        paddingTop: '7px'
    },
    input: {
        width: '100%',
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});