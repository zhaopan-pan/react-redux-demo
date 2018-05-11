import React, { Component } from 'react';
import { connect } from 'react-redux';
import app from '@/App.less';
import Test from "@/component/Test"

class App extends Component {

  componentDidMount() {
    const onButtonClick = {
      type: "1"
    }
    // console.log(this.props);
    // this.props.onButtonClick(onButtonClick); 
    // store.dispatch({type:"1"})
  }
  dispatchs = () => {
    const onButtonClcik = {
      type: "buttonOnClick"
    }
    // dispatch({onButtonClcik});
  }

  render() {
    const { text, onButtonClick, onTextClick,onChildTextClick} = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <h1 onClick={() => onTextClick({type:"textOnClick"})}>{text}</h1>
        <button onClick={() => onButtonClick({type:"buttonOnClick"})}>ded</button>
        <button onClick={() => onChildTextClick({type:"childTextOnClick"})}>改变儿子</button>
        <Test></Test>
      </div>
    );
  }
}

//state转props
function mapStateToProps(state) {
  console.log(state);
  return { text: state.reducerApp.text }
}
// const onButtonClick = {
//   type: "buttonOnClick"
// }
// const onTextClick = {
//   type: "textOnClick"
// }
// const lala = {
//   type: "1"
// }
//把action映射到props
function mapDispatchToProps(dispatch) {
  return {
    onButtonClick:  dispatch,
    onTextClick:  dispatch,
    lala: dispatch,
    onChildTextClick: dispatch
    
  }
}
//connect连接组件和reducer
const Apps = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
// https://blog.csdn.net/chenhaifeng2016/article/details/66475364
export default Apps;
