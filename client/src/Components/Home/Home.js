import React, { useEffect } from 'react';
import { BodyContainer, Container, ImgWrapper, DogsWrapper } from './HomeStyled.js';
import Dogs from './Dogs/Dogs.js';
import {useDispatch, useSelector} from 'react-redux'
import { getDogs, getTemperaments } from '../../actions/index.js';
import Aside from '../Home/Aside/Aside.js';
import Paged from './Paged/Paged.js';
import Dog from '../../assets/Dog-nav.png'

function Home() {
    const state = useSelector(state=>state)
    const dispatch = useDispatch();  
    console.log(state.page);
    useEffect(()=>{
        dispatch(getDogs())
        dispatch(getTemperaments())
    }
    ,[])

    return (
        <Container>
            {/* <ImgWrapper>
                <img src={Dog} alt="Dog-nav"></img>
            </ImgWrapper> */}
        <BodyContainer>
            <div>
                <div id="a">
                    <Aside/>
                </div>
            </div>

            <div id="dogs">
                <DogsWrapper>
                    <Dogs dogs = {state.dataRender.slice(state.page*9-9 ,state.page*9)}/>
                </DogsWrapper>

                {state.dataRender.length > 0 ? (

                    <div id="page">
                        <Paged
                            lenght={state.dataRender.length}
                            statePage={state.page}
                        />
                    </div>

                    ):<></>}
            </div>
        </BodyContainer>
    </Container>
    );
}

export default Home;