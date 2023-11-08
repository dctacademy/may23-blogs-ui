const initialState = {
    data: [],
    serverErrors: [],
    isLoading: true 
}

export default function blogsReducer(state=initialState, action){
    switch(action.type) {
        case 'SET_MY_BLOGS' : {
            return {...state, data: action.payload }
        }

        default: {
            return {...state}
        }
    }
}