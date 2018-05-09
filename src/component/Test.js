import React,{Component} from "react";
import test from "./test.less";
import { connect } from 'react-redux';



class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        console.log(this.props);
    }
    render() { 
        return ( 
            <div>
                进来了！
            </div>
         )
    }
}
 
function mapStateToProps(state){
    return { text: state.text }
}
function mapDispatchToProps(dispatch){
    return{
        dispatchs:()=>dispatch()
    }
}
const Tests=connect(mapStateToProps,mapDispatchToProps)(Test);
export default Tests;