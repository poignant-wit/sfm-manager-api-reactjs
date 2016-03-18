import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../actions/index';
import { bindActionCreators } from 'redux';

class OrdersTable extends Component {
    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
    }

    renderList() {

        console.log('RENDERLIST', this.props.orders);


            //return <h2>LOADINF</h2>;


        return this.props.orders.map(order => {
            return (
                <li>{ order.body }</li>
            )
        })
    }


    onClickButton() {
        this.props.fetchOrders(5);
    }


    render() {



        return (
            <div>
                <ul>
                    { this.renderList() }
                </ul>
                <button onClick={ this.onClickButton }>FETCH</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        orders: state.orders.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchOrders
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersTable);
