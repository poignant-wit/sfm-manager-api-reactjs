import { combineReducers } from 'redux';
import OrdersReducer from './reducer_order';
import ActiveOrderReducer from './reducer_active_order';

const rootReducer = combineReducers({
    orders: OrdersReducer,
    activeOrder: ActiveOrderReducer
});

export default rootReducer;