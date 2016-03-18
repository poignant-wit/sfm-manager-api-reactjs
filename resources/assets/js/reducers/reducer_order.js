const initialState = {
  data: [

        { body: 12 },
        { body: 12 },
        { body: 12 }
  ]
};

export default function (state, action){

    if (typeof state === 'undefined') {
        console.log('initial state', initialState);
        return initialState
    }

    switch (action.type) {
        case 'FETCH_ORDERS':
            console.log('REDUCER ORDERS: ', action.payload.data);
            return Object.assign({}, state, {
                data: action.payload.data
            })

    }
    return state;
}


//export default function (){
//    return [
//        { body: 12 },
//        { body: 12 },
//        { body: 12 }
//
//    ]
//}