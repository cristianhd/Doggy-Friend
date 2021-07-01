import React from 'react';
import { ButtonWrapper, Container } from './NavStyled';
import logo from '../../assets/LogoNav.svg'
import { LogoWrapper } from '../Home/NavStyled.js';
import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';


function Nav(props) {
    return (
        
        <Container>
        <NavLink id="link" to='/home'>

                <LogoWrapper>
                        <img src={logo} alt="logo"/>
                        <div id="s">
                            <span>DOGGY</span>
                            <span>FRIEND</span>
                        </div>
                    <div>
                    <NavLink to="/home/add">

                        <h4>Create Breed</h4>
                    </NavLink>
                    </div>
                    </LogoWrapper>
        </NavLink>
                    <SearchBar/>
                    <NavLink id = "link" to='/'>
                            <ButtonWrapper>
                                <button>
                                    Sign In
                                </button>
                            </ButtonWrapper>
                    </NavLink>
        </Container>
        
    );
}

export default Nav;