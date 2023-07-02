import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import firebase from '../../firebase/fire';

import { AsyncStorage , View} from 'react-native';


const SigninScreen = ({navigation})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signIn = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Navv');
            //await AsyncStorage.setItem('firstTime', 'yes');
            AsyncStorage.setItem('once', 'yes');
        } catch (err) {
            setError(err.message);
        }

    }
    return <>


    
    <View style={{ backgroundColor: '#f2f0fe' , flex : 1, padding: 50,}}>


<Text style = {{fontSize: 30, padding : 20,
    fontWeight: 'bold',
    color : '#7a20b3'
    }}>Sign In</Text>

    <View style={{ backgroundColor: '#f2f0fe' , flex : 1, padding: 30,}}>



        <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            labelStyle ={{color: '#7a20b3'}} 
        />
        <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            labelStyle ={{color: '#7a20b3'}} 
        />
        {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }
        <Button   buttonStyle={{backgroundColor: '#7a20b3'}} title="SignIn" onPress={() => signIn()} />
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style = {{color : '#7a20b3'}}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>

        </View></View>
    </>
};

export default SigninScreen;