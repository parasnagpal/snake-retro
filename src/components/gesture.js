import React , {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

class GestureView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:"Check swipe",
        }
    }

    onSwipeUp(){
        this.setState({
            text:"Up"
        })
    }

    onSwipeDown(){
        this.setState({
            text:"Down"
        })
    }

    onSwipeLeft(){
        this.setState({
            text:"Left"
        })
    }

    onSwipeRight(){
        this.setState({
            text:"Right"
        })
    }

    render(){
        const styles=StyleSheet.create({
            gestureAreaStyle:{
                backgroundColor:"white",
                borderRadius: 10,
                borderColor:"grey",
                borderWidth: 3,
                margin:10,
                flex:1
            }
        })
        return(
            <GestureRecognizer
                onSwipeUp={(state)=>{this.onSwipeUp(state)}}
                onSwipeDown={(state)=>{this.onSwipeDown(state)}}
                onSwipeLeft={(state)=>{this.onSwipeLeft(state)}}
                onSwipeRight={(state)=>{this.onSwipeRight(state)}}
                style={{
                    flex:1
                }}
            >
                <View style={styles.gestureAreaStyle}>
                    <Text>{this.state.text}</Text>
                </View>
            </GestureRecognizer>
        );
    }
}

export default GestureView