import React from 'react';
import  { Component } from 'react';
import OrdersTable from '../containers/orders_table';

export default class App extends Component{
    render(){
        return(
        <div>
            <OrdersTable/>
        </div>
        )
    }
}