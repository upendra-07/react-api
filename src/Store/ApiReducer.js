import { createStore} from "redux";


const initialData = {
    data:[]
}

const ApiReducerfn =(state=initialData,action)=>{
    console.log(action);

    switch(action.type){
        case 'Fetch_Data':
            return{
            ...state,
            data:action.data

        }
        default : return state;
    }
}


const ApiStore = createStore(ApiReducerfn);

export default ApiStore;

