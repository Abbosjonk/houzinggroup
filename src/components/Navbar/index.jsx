import React from 'react'
import {  Navigate, Outlet ,useNavigate} from 'react-router-dom';
import {Link, Container, Logo, Section, Wrapper } from './style'
import {navbar} from '../../utils/navbar'

export const Home = () => {
  return (
    <Container>
      <Wrapper>
      <Section onClick={()=>Navigate('./home')}>
       <Logo/>
        <h3>Houzing</h3>
      </Section>
      <Section>
       {
        navbar.map(({title,path},index)=>{
          return(
            <Link key={index} to={path}>{title}</Link>
          )
        })
       }
      </Section>
      <Section><button>Login</button></Section>
      </Wrapper>
      <Outlet/>
    </Container>
  )
}
export default Home