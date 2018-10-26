import React, {Component} from 'react'
import { connect } from 'react-redux'

@connect(({accu, op, input}) => ({accu : accu, op : op, input : input}))
export default class App extends Component {
    constructor (props){
        super(props);
    }

    static getStringRepresentation(value){
        if( (value === null) || (isNaN(value)) || (value === undefined)) {
            return "";
        }
        else {
            return String(value);
        }
    }

    static getOPStringRepresentation(value){
        if( (value === null) || (value === undefined)) {
            return "";
        }
        else {
            return String(value);
        }
    }

    render(){
        const {accu, op, input} = this.props;

        return <div>
            <div>
                {'accu  : ' + App.getStringRepresentation(accu)}
            </div>
            <div>
                {'op    : ' + App.getOPStringRepresentation(op)}
            </div>
            <div>
                {'input : ' + input}
            </div>
        </div>
    }
}
