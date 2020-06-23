import React from 'react';
import {View,StyleSheet} from 'react-native';

class Grid extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rows:40,
            cols:40
        }
    }

    addcols(){
        let columns=[];
        const style=StyleSheet.create({
            pixel:{
                borderColor:"grey",
                borderWidth:0.5,
                height:10,
                width:10,
            }
        })
        for(let i=0;i<this.state.cols;i++)
            columns.push(<View key={i} style={style.pixel}></View>);
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
            grid_layout.push(<View key={i} style={style.row}>{this.addcols()}</View>);
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