import React from 'react'
import styled from '@emotion/styled'
// Import check and error icons
import { MdCheck, MdError } from 'react-icons/md'


// Form Error Msg 
const FormError = styled.div`
  color: red;
  font-size: 0.9rem;
  line-height: 1.5rem;
  text-align: start;
  margin-top: -16px;
  margin-bottom: 10px;
`
// Form Success Msg 
const FormSuccess = styled.div`
  color: #007f00;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  display: none
`
const I = styled.span`
  border: none;
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
  vertical-align: sub;
`

const Error = ({ message }) => {
  if (message) {
    return (
      <FormError>
        <I>
          <MdError />
        </I>{' '}
        {message}
      </FormError>
    );
  }
  return (
    <FormSuccess>
      <I>
        <MdCheck />
      </I>
    </FormSuccess>
  );
};


export default Error
