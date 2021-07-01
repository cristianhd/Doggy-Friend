import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './SelectStyled';


function Select({temperaments,filters,setFilters}) {
    const dispatch = useDispatch();

    const optionTemp =  temperaments.map((temperament,index)=>(
        <option  key={index} value={temperament.name}>{temperament.name}</option>
    ));

    function handlerOnChange(e){
        const name = e.target.value;
        var id = undefined;
       
        temperaments.forEach(item => {
            document.ready = document.getElementById("temp").value = false; // quita la seleccion para poder seleccionar
            if(item.name === name){
               id = item.id;
               const temp = {
                   id,
                   name
               }
               setFilters([...filters,temp])
            }
        });

        dispatch({type:"ADD_FILTER", payload: {id,name}})
    }

     
    return (
        <Container>
             <select  id ="temp" multiple onChange={(e)=>handlerOnChange(e)}>
                <optgroup label="Temperaments">
                    {optionTemp}
                </optgroup>
            </select>
        </Container>
    );
}

export default Select;