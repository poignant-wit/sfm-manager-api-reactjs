//export function selectOrder(order){
//
//    return{
//        type: 'ORDER_SELECTED',
//        payload: order
//    };
//}
import axios from 'axios';
export const FETCH_ORDERS = 'FETCH_ORDERS';

export function fetchOrders(id = ''){

    console.log('ID = ', id);
    const url = 'api/order';
    const request = axios.get(url);
    return{
        type: FETCH_ORDERS,
        payload: request
    };
}



