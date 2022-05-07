
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';


export default function Dashboard() {
    const [text, setText] = useState("");
    return (
        <View style={styles.container}>
             <Text>DASHBOARD</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }    
});