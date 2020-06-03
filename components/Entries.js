import React from 'react';
import {AsyncStorage, View, Text, StyleSheet} from 'react-native'
import AddEntry from "./AddEntry";

export default function Entries ({entries, callBack}){
    const [localEntries,setLocalEntries] = React.useState([]);
    React.useEffect(()=>{

        if(localEntries.length < 1){
            setLocalEntries(entries);
        }

    })

    const processEntry = (newEntry) =>{
        callBack([newEntry]);
        console.log('catch')
        setLocalEntries(exist => [newEntry,...exist]);
    }
    return(
        <View style={{flex:1}}>
            <AddEntry callBack={processEntry}/>
            <View style={styles.panel}>
                {localEntries.map(entry => (
                    <View style={styles.row}>
                        <Text style={styles.column}>{entry.date}</Text>
                        <Text style={styles.column}>{entry.note}</Text>
                    </View>

                ))}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    panel:{
        flex:1,
        overflowY:'auto'
    },
    row:{
        display:'flex',
        flexDirection: 'row',

    },
    column:{
        flex:1,
        padding: '5px',
        fontWeight: '700',
        fontSize: '120%'
    }
})