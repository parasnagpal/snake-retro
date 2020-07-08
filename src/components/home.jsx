import React from 'react';
import {Text,View,Button} from 'react-native';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            level:1,
        }
    }
    render(){
        return(
            <View>
                <Text>Snake Retro</Text>
                <Button title="Start" onPress={()=>this.props.navigation.navigate('Arena')}/>
            </View>
        );
    }
}
export default Home;