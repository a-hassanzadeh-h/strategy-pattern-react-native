import 'reflect-metadata';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Application} from "../infrastructure/di/Application";
import {ITodoService, TODO_SERVICE_TOKEN} from "./todo/ITodoService";


export default function App() {


    const todoService = Application.getBean<ITodoService>(TODO_SERVICE_TOKEN)

    console.log('client', todoService.fetchAll())
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
