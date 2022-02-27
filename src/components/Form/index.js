import React from 'react'
import PropTypes from 'prop-types'
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

const StyledTextarea = styled(Textarea)`
margin-left: 16px;
`

const StyledButton1 = styled(Button1)`
margin-left: auto;
width: 100px;
`

export default function Form({ user, submitHandler, changeHandler, ...props }) {
  return (
    <StyledForm
      onSubmit={submitHandler}
      theme={theme}
      {...props}
    >
      <Icon1 src={user.icon} />
      <StyledTextarea change={changeHandler} />
      <Footer>
        <StyledButton1
          type={'submit'}
          text={'ツイート'}
        />
      </Footer>
    </StyledForm>
  )
}


Form.propTypes = {
  user: PropTypes.shape({
    icon: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string
  }),
  submitHandler: PropTypes.func,
  changeHandler: PropTypes.func
}

Form.defaultProps = {
  user: {
    icon: '',
    id: '',
    name: ''
  },
  submitHandler: () => {},
  changeHandler: () => {}
}
