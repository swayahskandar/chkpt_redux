const initialState=[{
    id : Math.random(),
    text : 'piano',
    isDone : false
},
{
    id : Math.random(),
    text : 'guitar',
    isDone : false
},
{
    id : Math.random(),
    text : 'violon',
    isDone : false
}]

const Reducer=(state=initialState , {type,payload})=>{
 
    switch (type) {
        case "ADD":
            return 
            
        default:
            return state
    }
};
export default Reducer