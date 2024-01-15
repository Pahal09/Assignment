import axios from "axios"
const objectinia = {
    allcontact: [],
    singlecontact: {},
    age: 31
}

const ALLCONTACT = "ALLCONTACT"
const SINGLECONTACT = "SINGLECONTACT"
const contactSlicer = (state = objectinia, action) => {

    switch (action.type) {
        case 'ALLCONTACT':
            return {
                ...state,
                allcontact: action.payload
            }
        case 'SINGLECONTACT':
            return {
                ...state,
                singlecontact: action.payload
            }

    }

    return state;
}

export default contactSlicer;

export const deletedata = (api) => {
    return function () {
        axios.delete(api)
            .then((res) =>console.log(res));
    }
}

const setcontact = (data) => ({ type: ALLCONTACT, payload: data })

export const selectcontact = (api) => {
    return function (dispatch) {
        axios.get(api)
            .then((res) =>
                dispatch(setcontact(res.data))
            );
    }
}
