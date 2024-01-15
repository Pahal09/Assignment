import axios from "axios";

const objectUser = {
    alluser: [],
    singleuser: {},
    name: "pahal bhawsar"
}

const ALLUSER = "ALLUSER"
const SINGLEUSER = "SINGLEUSER"
const userSlicer = (state = objectUser, action) => {
    switch (action.type) {
        case 'ALLUSER':
            return {
                ...state,
                alluser: action.payload
            }
        case 'SINGLEUSER':
            return {
                ...state,
                singleuser: action.payload
            }
    }

    return state;

}
export default userSlicer;


export const insert = (api, formvalue) => {
    return function () {
        axios.post(api, formvalue)
            .then((resp) => console.log(resp));
    }
}
const setuser = (data) => ({ type: ALLUSER, payload: data })

export const selectuser = (api) => {
    return function (dispatch) {
        axios.get(api)
            .then((obj) =>
                dispatch(setuser(obj.data))
            );
    }
}
// +++++++++++++++
const setsingleuser=(data)=>({type:SINGLEUSER,payload:data});

export const singlefetch=(api)=>{
    return function(dispatch){
        axios.get(api)
        .then((obj)=> 
            dispatch(setsingleuser(obj.data))
        );
    }
}
// ------------------------
export const update=(api,formvalue)=>{
    return function(){
        axios.patch(api,formvalue)
        .then((resp)=> console.log(resp));
    }
}