const initialState = {
    data: [],
    serverErrors: [],
    isLoading: true 
}

export default function blogsReducer(state=initialState, action){
    switch(action.type) {


        default: {
            return {...state}
        }
    }
}