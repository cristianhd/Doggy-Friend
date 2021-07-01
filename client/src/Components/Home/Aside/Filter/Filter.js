import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Wrapper } from './FilterStyled';
import Select from '../../Select/Select.js';
import Lists from '../../Select/Lists';


function Filter({temperaments}) {

  const dispatch = useDispatch()
  const [filters,setFilters] = useState([])  

  const listFilters = filters.map((filter,index)=>(
        <ul key={index}>{filter.name}
        (<span onClick={()=>{handlerOnClick(filter.id,filter.name)}}>x</span>)
        </ul>
    ));

    const labelFilters = filters.map((filter,index)=>(
        <label key={index}>{filter.name}, </label>
    ));

function handlerOnClick(id,name){
    setFilters(item=>item.filter(f => f.id !== id))
    var aux = filters.filter(f => f.id !== id)
    var aux2 = aux.map(item=>item.name)
    dispatch({type:'REMOVE_FILTER', payload: {aux2,remove: {id,name}}})
}

    return (
        <Container>
            <Select
                temperaments={temperaments}
                filters={filters}
                setFilters={setFilters}
            />

            <Lists
                filters ={filters}
                listFilters={listFilters}
                labelFilters={labelFilters}
            />
        </Container>
    );
}

export default Filter;