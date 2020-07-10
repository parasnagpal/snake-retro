import React from 'react';
import {View,StyleSheet, CheckBox} from 'react-native';

class Grid extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rows:0,
            cols:0,
            snakeGrid:[],
            snakeCoordinates:[[0,0]],
        }
        this.moveDown=this.moveDown.bind(this);
        this.snakeMovement=this.snakeMovement.bind(this);
        this.prepareSnakeState=this.prepareSnakeState.bind(this);
        this.grid=this.grid.bind(this);
        this.addcols=this.addcols.bind(this);
        this.addrows=this.addrows.bind(this);
        this.gridUpdateOnMovement=this.gridUpdateOnMovement.bind(this);
    }

    placeFood(){
        let snakeGrid=this.state.snakeGrid;
        let I=Math.floor(Math.random()*this.props.height-4);
        let J=Math.floor(Math.random()*this.props.width-4);
        while(snakeGrid[I][J]){
            I=Math.floor(Math.random()*this.props.height-4);
            J=Math.floor(Math.random()*this.props.width-4);
        }
        snakeGrid[I][J]=1;
        this.setState({
            snakeGrid
        })
    }

    checkIfValid(push){
        let x=push[0],y=push[1];
        if(x<0 || x>=this.props.height-4 || y<0 || y>=this.props.width-4){
            this.props.gameOver();
            return false;
        }
        return true;    
    }

    gridUpdateOnMovement(snakeCoordinates,pop,push){
        let snakeGrid=this.state.snakeGrid;
        let promise=new Promise((resolve,reject)=>{
            if(this.checkIfValid(push))
                resolve();
            else reject();    
        }) 
        
        promise.then(()=>{
            if(snakeGrid[push[0]][push[1]]){
                this.props.scoreIncrease();
                this.placeFood();
            }
            else{
                snakeCoordinates.shift();
                snakeGrid[pop[0]][pop[1]]=0;
            }
            snakeGrid[push[0]][push[1]]=1;
            this.setState({
                snakeGrid,
                snakeCoordinates
            })
        })
        .catch(()=>{
            console.log("Game Over!");
        })
    }

    moveDown(){
        let snakeCoordinates=this.state.snakeCoordinates;
        let length=snakeCoordinates.length;
        let first=snakeCoordinates[0];
        let last=snakeCoordinates[length-1];
        snakeCoordinates.push([last[0]+1,last[1]]);
        this.gridUpdateOnMovement(snakeCoordinates,first,[last[0]+1,last[1]]);
    }

    moveUp(){
        let snakeCoordinates=this.state.snakeCoordinates;
        let length=snakeCoordinates.length;
        let first=snakeCoordinates[0];
        let last=snakeCoordinates[length-1];
        snakeCoordinates.push([last[0]-1,last[1]]);
        this.gridUpdateOnMovement(snakeCoordinates,first,[last[0]-1,last[1]]);
    }

    moveRight(){
        let snakeCoordinates=this.state.snakeCoordinates;
        let length=snakeCoordinates.length;
        let first=snakeCoordinates[0];
        let last=snakeCoordinates[length-1];
        snakeCoordinates.push([last[0],last[1]+1]);
        this.gridUpdateOnMovement(snakeCoordinates,first,[last[0],last[1]+1]);
    }

    moveLeft(){
        let snakeCoordinates=this.state.snakeCoordinates;
        let length=snakeCoordinates.length;
        let first=snakeCoordinates[0];
        let last=snakeCoordinates[length-1];
        snakeCoordinates.push([last[0],last[1]-1]);
        this.gridUpdateOnMovement(snakeCoordinates,first,[last[0],last[1]-1]);
    }

    snakeDirectionSwitch(){
        if(this.props.direction=="down")
            this.moveDown();
        else if(this.props.direction=="up")
            this.moveUp();
        else if(this.props.direction=="right")
            this.moveRight();
        else    
            this.moveLeft();  
    }

    snakeMovement(){
        this.interval=setInterval(()=>{
            this.snakeDirectionSwitch();           
        },500);
    }

    prepareSnakeState(){
        let snakeGrid=[[0]];
        let rows=this.state.rows;
        let cols=this.state.cols;
        let snakeCoordinates=this.state.snakeCoordinates;
        console.log(rows);
        console.log(cols);    
        for(let i=0;i<rows;i++){
            let newRow=[]
            for(let j=0;j<cols;j++){
                newRow.push(0);
            }
            snakeGrid.push(newRow);
        }

        for(let i=0;i<snakeCoordinates.length;i++){
            let u=snakeCoordinates[i][0],v=snakeCoordinates[i][1];
            snakeGrid[u][v]=1;
        }
        
        this.setState({
            snakeGrid:snakeGrid,
            snakeCoordinates:snakeCoordinates
        },()=>{
            this.placeFood();
        })
    }

    addcols(row){
        let columns=[];
        const style=StyleSheet.create({
            pixel:{
                borderColor:"black",
                borderWidth:1,
                height:10,
                width:10,
            },
            snake:{
                borderColor:"white",
                borderWidth:1,
                height:10,
                width:10,
                backgroundColor:"white"
            }
        })
        for(let i=0;i<this.state.cols;i++){
            if(row<this.state.snakeGrid.length && this.state.snakeGrid[row][i])
                columns.push(<View key={i} style={style.snake}></View>);
            else    
                columns.push(<View key={i} style={style.pixel}></View>);
        }
        return columns;    
    }

    addrows(){
        let grid_layout=[];
        const style=StyleSheet.create({
            row:{
                flexDirection:'row'
            }
        })
        for(let i=0;i<this.state.rows;i++)
            grid_layout.push(<View key={i} style={style.row}>{this.addcols(i)}</View>);
        return grid_layout;
    }

    grid(){
        return this.addrows();
    }

    componentDidMount(){
        this.setState({
            rows:this.props.height-4,
            cols:this.props.width-4
        },()=>{
            let p=new Promise((resolve)=>{
                this.prepareSnakeState();
                resolve();
            })
            p.then(()=>{
                this.snakeMovement();
            })
        })
    }

    render(){
        const style=StyleSheet.create({
            grid:{
                overflow:'hidden',
                borderColor:"white",
                borderWidth:3,
            }
        })
        return(
            <View style={style.grid}>
                {this.grid()}
            </View>
        );
    }
}
export default Grid