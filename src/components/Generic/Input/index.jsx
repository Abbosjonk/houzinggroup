import React from 'react'
import { Container } from './style'


export const Button = ({children,type,height,onChange,placeholder,name,value,defaultValue}) => {
  return (
    <Container
    placeholder={placeholder}
    onChange={onChange} type={type}
    name={name}
    value={value}
    defaultValue={defaultValue}
    height={height}>{children}
    </Container>
  )
}
export default Button