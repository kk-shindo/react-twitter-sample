import React from 'react'
import styled from 'styled-components'

/** theme */
import { theme } from '../../lib/theme'

/** components */
import Textarea from './Textarea'
import Icon1 from '../Icon/Icon1'
import Button1 from '../Button/Button1'
import Footer from './Footer'

const StyledForm = styled.form`
padding: 16px;
width: 100%;
border: 1px solid ${props => props.theme.dark.colors.color3};
border-radius: 8px;
display: flex;
flex-wrap: wrap;
`

export default function Form({ user, submitHandler, changeHandler, ...props }) {
  return (
    <StyledForm
      onSubmit={submitHandler}
      theme={theme}
      {...props}
    >
      <Icon1 src={user.icon} />
      <Textarea
        change={changeHandler}
        style={{marginLeft: '16px'}}
      />
      <Footer>
        <Button1
          type={'submit'}
          text={'ツイート'}
          style={{marginLeft: 'auto', width: '100px'}}
        />
      </Footer>
    </StyledForm>
  )
}
