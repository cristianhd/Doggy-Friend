import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import iconA from '../../../assets/orderA.svg'
import iconD from '../../../assets/orderD.svg'
import { Container } from './OrderStyled';

function Order(props) {
    const [order,setOrder] = useState({value:"Orden By"});
    const dispatch = useDispatch();
    const state = useSelector(state=>state);
    const typeOrder =  state.addOrder.typeOrder;


    function handlerOnChange(e){
        setOrder({
            value: e.target.value
        })
    }

    function handlerOnClick(e){
        if(order.value!=="Orden By"){
            dispatch({type:'ADD_ORDER',payload: {
                                                    order:order.value,
                                                    typeOrder}
                                                })
        }else{
            alert("Select First a Orden")
        }
    }

    return (
        <Container>
                <select defaultValue={order.value} onChange={(e)=>handlerOnChange(e)}>
                    <option value="Orden By" disabled hidden>Orden By</option>
                    <option name="Breed" value="Breed">Breed</option>
                    <option name ="Wight" value="Weight">Weight</option>
                </select>

                <button onClick={(e)=>handlerOnClick(e)}>
                    <img src={typeOrder ? iconD: iconA} alt="icon"></img>
                </button>
        </Container>
    );
}

export default Order;