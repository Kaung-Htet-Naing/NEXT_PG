import { registerActionTypes } from "./register.type";

export const setformregister = item =>({
    type:registerActionTypes.SET_FORMVALUES,
    payload:item
}) 