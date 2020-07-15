import styled from '@emotion/styled'
import React from 'react'

const FormStyles = styled.div`
  form {
    /* display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center; */

    margin: 12px auto;
    padding: 8px;
    text-align: center;
    max-width: 600px;
    border-radius: 5px;
    /* box-shadow: 0px 5px 35px 0px rgba(50, 50, 93, 0.17); */
    box-shadow: 0px 5px 35px 0px rgba(0, 0, 0, 0.17);

    h2 {
      font-size: 2.5rem;
    }

    fieldset {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      height: 100%;
      border: 0;
      padding: 0;

      label {
        display: block;
        padding: 12px;
        font-size: 1.8rem;
      }

      input,
      textarea,
      select {
        font-size: 1.6rem;
        padding: 8px 12px;
        border: 1px solid transparent;
        border-radius: 3px;

        &:focus {
          outline: 0;
          border: 1px solid var(--blue); /* props => props.theme.colorPrimary */
          box-shadow: 0 0 10px var(--blue); /* props => props.theme.colorPrimary */
        }
      }

      .name-email-container {
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
      }

      .message-container {
        margin: 6px auto;
        display: flex;
        flex-flow: column;
        align-items: center;

        textarea {
          display: block;
          margin: 0 auto;
          padding: 8px 12px;
          width: 460px;
        }
      }

      .submit-btn {
        width: auto;
        padding: 8px 16px;
        margin: 16px 0;
        background: var(--primary);
        color: var(--white);
        border: 0;
        border-radius: 3px;
        font-size: 1.6rem;
        font-weight: 500;
        outline: none;
        transition: var(--transitionThreeMs);
      }
    }
  }
`

// data-netlify-recaptcha='true'
const Contact: React.FC = () => (
  <FormStyles id='contact'>
    <form
      name='contact'
      method='POST'
      action='/success'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      // data-netlify-recaptcha='true'
    >
      <h2>Contact me</h2>

      <fieldset>
        <div className='name-email-container'>
          <label htmlFor='name'>Name: </label>
          <input type='text' id='name' name='name' placeholder='Your name' required />

          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' name='email' placeholder='example@email.com' required />
        </div>

        <div className='message-container'>
          <label htmlFor='message' className='message'>
            Message:
          </label>
          <textarea id='message' name='message' placeholder='Your message' required />
        </div>

        <button className='submit-btn' type='submit'>
          Submit
        </button>
      </fieldset>
    </form>
  </FormStyles>
)

export default Contact
