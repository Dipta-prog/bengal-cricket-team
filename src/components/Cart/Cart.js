import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        total = total + player.salary;
    }
    return (
        <div>
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontWeight: 'bold' }}>Team Info</h2>
                    <h4 style={{ fontWeight: '600' }}>Total club players: {cart.length}</h4>
                    <table>
                        <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Player Name</th>
                            <th style={{ textAlign: 'center' }}>Player salary(in taka)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            cart.map(data => {
                                const { name, salary } = data;
                                return (<tr key={data.id}>
                                    <td><p>{name}</p></td>
                                    <td>{salary} lakh</td>
                                </tr>);
                            })
                        }
                        </tbody>
                    </table>
                    <h4 style={{ fontWeight: '600', padding: '5px 0 5px 0' }}>Total Team Budget: {total} lakh taka</h4>
                </div>
            </div>

        </div>
    );
};

export default Cart;