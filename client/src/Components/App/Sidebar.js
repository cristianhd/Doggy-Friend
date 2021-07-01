import React, { useState } from 'react';
import { Container, LogoWrapper, Input, Submit, Form, Social,FormWrapper } from './SidebarStyled';
import logo from '../../assets/Logo.svg'
import githublogo from '../../assets/Github.svg'
import iglogo from '../../assets/Ig.svg'
import inlogo from '../../assets/In.svg'
import { NavLink } from 'react-router-dom';

function Sidebar(props) {

    const [email,SetEmail] = useState({value: ''});
    const [password,SetPassword] = useState('');


    function handleOnChange(e){
        e.target.name==='email'
            ? SetEmail({value: e.target.value})
            : SetPassword({value: e.target.value});
    }

    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt="logo"/>
                <span>DOGGY </span>
                <span>FRIEND</span>
            </LogoWrapper>

            <FormWrapper>
                <p>Sign In</p>
                <Form>
                        <Input
                            name = "email"
                            type="email"
                            value= {email.value}
                            onChange={(e)=>{handleOnChange(e)}}
                            placeholder="Enter your email"
                            autoComplete = "off"
                            required/>
                        <Input
                            name="password"
                            type="password"
                            value={password.value}
                            onChange={(e)=>{handleOnChange(e)}}
                            placeholder="Enter your password"
                            autoComplete = "off"
                            required/>

                        <NavLink to="/home">
                            <Submit 
                                type="Submit" 
                                value="Join">
                                <span >Join</span>
                            </Submit>
                        </NavLink>

                        <span id="s1">If you want join without Sign In</span>
                        <NavLink to='/app'>
                            <span id='s2'>Enter how invited ↗</span>
                        </NavLink>
                </Form>
            </FormWrapper>

            <Social>
                <a href="https://github.com/cristianhd" target= "blank">
                        <img src={githublogo} alt="gitlogo"/>
                </a>

                <a href="https://www.instagram.com/cris.elparce/" target= "blank">
                    <img src={iglogo} alt="iglogo"/>
                </a>

                <a href="https://www.linkedin.com/in/cristian-hernandez-2a5989156/" target= "blank">
                    <img src={inlogo} alt="inlogo"/>
                </a>
            </Social>
        </Container>
    );
}

export default Sidebar;