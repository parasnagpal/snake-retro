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
            snakeVertical:1,
            score:0,
            gameState:0
        }
        this.scoreIncrease=this.scoreIncrease.bind(this);
        this.switchKey=this.switchKey.bind(this);
        this.gameOver=this.gameOver.bind(this);
    }

    scoreIncrease(){
        this.setState({
            score:this.state.score+1
        })
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

    switchKey(event){
        if(event.keyCode>=37 && event.keyCode<=40){
            console.log(event.keyCode)
           if(event.keyCode==37)
                this.onSwipeLeft();
            else if(this.keyCode==38)
                this.onSwipeUp();
            else if(this.keyCode==39)
                this.onSwipeRight();
            else    
                this.onSwipeDown();        
        }
    }

    gameOver(){
        this.setState({
            gameState:1
        })
    }

    Grid(){
        if(this.state.gameState)
            return <Text>Game Over!</Text> 
        else if(this.state.gridHeight)
            return(<Grid height={this.state.gridHeight} width={this.state.gridWidth} direction={this.state.snakeDirection} 
                        scoreIncrease={this.scoreIncrease} gameOver={this.gameOver}/>);
        else return <></>;
    }

    componentDidMount(){
        //document.addEventListener("keydown",this.switchKey);
    }

    componentWillUnmount(){
        //document.removeEventListener("keydown",this.switchKey);
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
                    <Text>{this.state.score}</Text>
                    <Text>{this.state.text}</Text>
                    {this.Grid()}
                </View>
            </GestureRecognizer>
        );
    }
}

export default GestureView