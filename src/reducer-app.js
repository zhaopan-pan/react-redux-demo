const initStateVal={
    text:"你"
}
const reducer=(state=initStateVal,action)=>{
    console.log(action);
    switch(action.type){
        case "buttonOnClick":
        return {
            text:"你 好"
        }
        case "textOnClick":
        return {
           text: state.text==="你"?"好":"你"
        }
        case "1":
        return {
           text: "lala"
        }
        case "2":
        return {
           text: "keke"
        }
        default:
        return state;
    }
}
export default reducer