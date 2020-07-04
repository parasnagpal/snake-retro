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
            gridHeight:0,
            snakeDirection:'down',
            snakeHorizontal:0,
            snakeVertical:1
        }
    }

    onSwipeUp(){
        if(this.state.snakeHorizontal)
            this.setState({
                text:"Up",
                snakeDirection:"up",
                snakeHorizontal:0,
                snakeVertical:1
            })
    }

    onSwipeDown(){
        if(this.state.snakeHorizontal)
            this.setState({
                text:"Down",
                snakeDirection:"down",
                snakeHorizontal:0,
                snakeVertical:1
            })
    }

    onSwipeLeft(){
        if(this.state.snakeVertical)
            this.setState({
                text:"Left",
                snakeDirection:"left",
                snakeHorizontal:1,
                snakeVertical:0
            })
    }

    onSwipeRight(){
        if(this.state.snakeVertical)
            this.setState({
                text:"Right",
                snakeDirection:"right",
                snakeHorizontal:1,
                snakeVertical:0
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
            return(<Grid height={this.state.gridHeight} width={this.state.gridWidth} direction={this.state.snakeDirection}/>);
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