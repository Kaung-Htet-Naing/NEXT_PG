import { registerActionTypes } from './register.type';

const initialState={
    formValues:{},
    message:'',
}

const registerFormReducer =(state=initialState,action)=>{
    switch(action.type){
        case registerActionTypes.SET_FORMVALUES:
            return {
                ...state,
                formValues:(state.formValues,action.payload)
            };    
        default:
            return state;
    }
}

export default registerFormReducer