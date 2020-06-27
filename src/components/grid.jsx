import React from 'react';
import {View,StyleSheet} from 'react-native';

class Grid extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rows:0,
            cols:0,
            snakeGrid:[],
            snakeCoordinates:[[0,0]],
            dir:'R'
        }
    }

    prepareSnakeState(){
        let snakeGrid=[[0]];
        let rows=this.state.rows;
        let cols=this.state.cols;
        let snakeCoordinates=this.state.snakeCoordinates;

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
        })
    }

    snakeMovement(){
        var snakeGrid=this.state.snakeGrid;
        var snakeCoordinates=this.state.snakeCoordinates;
        setInterval(()=>{
            let firstx=snakeCoordinates[0][0];
            let firsty=snakeCoordinates[0][1];
            let lastx=snakeCoordinates[snakeCoordinates.length-1][0];
            let lasty=snakeCoordinates[snakeCoordinates.length-1][1];
            //console.log(firstx+1)
            snakeCoordinates.push([firstx+1,firsty]);
            snakeCoordinates.shift();
            snakeGrid[firstx+1][firsty]=1;
            snakeGrid[lastx][lasty]=0;
            console.log(snakeCoordinates)
        },1000);
    }

    componentDidMount(){
        this.setState({
            rows:this.props.height-4,
            cols:this.props.width-4
        },()=>{
            let p=new Promise((resolve,reject)=>{
                this.prepareSnakeState();
                resolve();
            })
            p.then(()=>{
                this.snakeMovement();
            })
        })
    }

    addcols(row){
        let columns=[];
        const style=StyleSheet.create({
            pixel:{
                borderColor:"grey",
                borderWidth:1,
                height:10,
                width:10,
            },
            snake:{
                borderColor:"grey",
                borderWidth:1,
                height:10,
                width:10,
                backgroundColor:"black"
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

    render(){
        const style=StyleSheet.create({
            grid:{
                overflow:'hidden'
            }
        })
        return(
            <View style={style.grid}>
                {this.addrows()}
            </View>
        );
    }
}
export default Grid