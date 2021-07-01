import React from 'react';
import { Container } from './ListsStyled';

function Lists({filters,listFilters,labelFilters,form}) {
    return (
        <Container>
            <div id="label"> 
                {form ? listFilters : labelFilters }
            </div>

            <div id="list">
                {form ? <></> : listFilters}
            </div>
        </Container>
    );
}

export default Lists;