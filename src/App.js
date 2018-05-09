import React, { Component } from 'react';
import { connect } from 'react-redux';
import '@/App.less';
import Test from "@/component/Test"

class App extends Component {

  componentDidMount() {
    const onButtonClick = {
      type: "1"
    }
    console.log(this.props);
    this.props.lala(onButtonClick); 
  }
  dispatchs = () => {
    const onButtonClcik = {
      type: "buttonOnClick"
    }
    // dispatch({onButtonClcik});
  }

  render() {
    const { text, onButtonClick, onTextClick } = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <h1 onClick={() => onTextClick()}>{text}</h1>
        <button onClick={() => onButtonClick()}>clike</button>
        <Test></Test>
      </div>
    );
  }
}

//state转props
function mapStateToProps(state) {
  return { text: state.text }
}
const onButtonClick = {
  type: "buttonOnClick"
}
const onTextClick = {
  type: "textOnClick"
}
const lala = {
  type: "1"
}
//把action映射到props
function mapDispatchToProps(dispatch) {
  return {
    onButtonClick: () => dispatch(onButtonClick),
    onTextClick: () => dispatch(onTextClick),
    lala: () => dispatch(lala),
  }
}
//connect连接组件和reducer
const Apps = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
// https://blog.csdn.net/chenhaifeng2016/article/details/66475364
export default Apps;
