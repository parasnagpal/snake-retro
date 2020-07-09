import React from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            level:1,
        }
    }
    render(){
        const styles=StyleSheet.create({
            home:{
                flex:1,
                justifyContent:"center",
                flexDirection:"column",
                backgroundColor:"black"
            },
            textBox:{
                flex:1,
                justifyContent:"flex-end",
                flexDirection:"column"
            },
            textCenter:{
                textAlign:"center",
                color:"white"
            },
            buttonBox:{
                flex:1,
                padding:10,
                justifyContent:"flex-end",
            },
            button:{
                backgroundColor:"grey"
            }
        })
        return(
            <View style={styles.home}>
                <View style={styles.textBox}>
                        <Text style={styles.textCenter}>Snake Retro</Text>
                </View>
                <View style={styles.buttonBox}>
                    <Button color="grey" title="Start" onPress={()=>this.props.navigation.navigate('Arena')}/>
                </View>
            </View>
        );
    }
}
export default Home;