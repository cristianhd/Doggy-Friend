import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './PagedStyled';

function Paged({lenght,statePage}) {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    const pages = Math.trunc(lenght/9)+1
    const pageCurrent = state.Page;
    var numbers = []
    for (let index = 1; index <= pages; index++) {
        numbers.push(index)
    }
    
    const listNumbers = numbers.map((number,index)=>(
        <ul key={index}>
            <label onClick={()=>handlerOnClick(number)}>{number}</label>
        
        </ul>
    ));

    function handlerOnClick(number){
        switch (number) {
            case 'siguiente':
                return dispatch({type:'SEARCH_PAGE', payload: pageCurrent+1})

            case 'anterior':
                return dispatch({type:'SEARCH_PAGE', payload: pageCurrent-1})

            default:
                return dispatch({type:'SEARCH_PAGE', payload: number})
        }
    }


    function Page(pageCurrent){
        if(pageCurrent===1){
            return (
                <div id = "label">
                    {listNumbers}
                    <span id="span" onClick={()=>handlerOnClick('siguiente')}>siguiente</span>
                </div>
            )
        }else{
            if(pageCurrent===pages){
                return (
                    <div id = "label">
                        <span id="span" onClick={()=>handlerOnClick('anterior')}>anterior</span>
                        {listNumbers}
                    </div>
                )
            }
        }
            return (
                <div id = "label">
                    <span id="span" onClick={()=>handlerOnClick('anterior')}>anterior</span>
                    {listNumbers}
                    <span id="span" onClick={()=>handlerOnClick('siguiente')}>siguiente</span>
                </div>
            )
    }

    return (
        <Container>
           {Page(pageCurrent)}
        </Container>
    );
}

export default Paged;