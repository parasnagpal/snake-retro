import React , {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Grid from './grid'

class GestureView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:"Check swipe",
            gridWidth:0,
            gridHeight:0
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

    findDimensions(layout){
        this.setState({
            gridHeight:Math.floor(layout.height/10),
            gridWidth:Math.floor(layout.width/10)
        })
    }

    Grid(){
        if(this.state.gridHeight)
            return(<Grid height={this.state.gridHeight} width={this.state.gridWidth}/>);
        else return <></>;
    }

    render(){
        const styles=StyleSheet.create({
            gestureAreaStyle:{
                backgroundColor:"white",
                borderRadius: 10,
                borderColor:"grey",
                borderWidth: 3,
                margin:10,
                flex:1,
                alignItems:'center'
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
                <View onLayout={(event)=>this.findDimensions(event.nativeEvent.layout)}
                    style={styles.gestureAreaStyle}>
                    <Text>{this.state.text}</Text>
                    {this.Grid()}
                </View>
            </GestureRecognizer>
        );
    }
}

export default GestureView