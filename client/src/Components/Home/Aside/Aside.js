import React from 'react';
import {AsideWrapper} from './AsideStyled.js'

import { useSelector } from 'react-redux';
import Filter from '../Aside/Filter/Filter.js';
import Order from './Order.js';

function Aside(props) {
const state = useSelector(state=>state)


    return (
        <AsideWrapper>
            <div>
               <Order/>
            </div>

            <div>
                <div>
                   <Filter temperaments={state.temperaments}/>
                </div>
            </div>
        </AsideWrapper>
    );
}

export default Aside;