const initStateVal={
    texts:"好"
}
const reducerTest=(state=initStateVal,action)=>{
    console.log(action);
    switch(action.type){
        case "childButtonOnClick":
        return {
            texts:"好 的"
        }
        case "childTextOnClick":
        return {
           texts: state.texts==="好"?"的":"好"
        }
        case "3":
        return {
           texts: "haha"
        }
        default:
        return state;
    }
}
export default reducerTest;