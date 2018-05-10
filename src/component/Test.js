import React, { Component } from "react";
import test from "./test.less";
import { connect } from 'react-redux';



class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        const { onChildButtonClick,texts, dispatchs,onChildTextClick} = this.props;
        console.log(this.props);
        // const texts = this.props.reducersTest.texts;
        return (
            <div>
                <div onClick={() => dispatchs({ type: "childTextOnClick" })}>
                    子组件！{texts}
                </div>
                <button onClick={()=>onChildTextClick({type:"textOnClick"})}>child改变父级</button>
                <button onClick={() => onChildButtonClick({ type: "childButtonOnClick" })}>child改变自己</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        texts: state.reducersTest.texts,
        // reducersTest: state.reducersTest
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatchs: dispatch,
        onChildButtonClick: dispatch,
        onChildTextClick: dispatch
    }
}
// const Tests = 

export default connect(mapStateToProps, mapDispatchToProps)(Test);