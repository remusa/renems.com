import React from 'react'
import styled from 'styled-components'

const FormStyles = styled.a`
   width: 80%;
    /* margin: 0 auto; */

    form {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;

        margin: 0 auto;
        margin-top: 8px;
        padding: 16px 8px 8px 8px;
        text-align: center;
        max-width: 600px;
        border-radius: 5px;
        box-shadow: 0px 5px 35px 0px rgba(50, 50, 93, 0.17);

        fieldset {
            height: 100%;
            border: 0;
            padding: 0;

            label {
                display: block;
            }

            .name-email-container {
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-items: center;
            }

            input,
            textarea,
            select {
                width: 90%;
                margin: 8px 15px;
                font-size: 1.2rem;
                border: 1px solid black;
                border-radius: 3px;

                &:focus {
                    outline: 0;
                    border-color: ${props => props.theme.colorPrimary};
                    box-shadow: 0 0 10px ${props => props.theme.colorPrimary};
                }
            }

            button {
                /* width: 100px; */
                font-family: 'Montserrat', sans-serif;
                font-weight: bold;
            }

            button[type='submit'],
            input[type='submit'] {
                outline: none;
                width: auto;
                /* background: ${props => props.theme.colorPrimary};
                color: ${props => props.theme.colorWhite}; */
                background: var(--color-primary);
                color: var(--color-white);
                border: 0;
                border-radius: 3px;
                font-size: 1.5rem;
                font-weight: 600;
                /* padding: 0.5rem 1.2rem; */
                padding: 8px 15px;
                margin-right: 8px;
            }
        }
    }
`

// data-netlify-recaptcha='true'
const Contact = () => (
    <FormStyles>
        <form name='contact' method='POST' action='/success' data-netlify='true'>
            <h2>Contact me</h2>

            <fieldset>
                <div className='name-email-container'>
                    <label htmlFor='name'>
                        Name: <input type='text' name='name' required />
                    </label>
                    <label htmlFor='email'>
                        Email: <input type='email' name='email' required />
                    </label>
                </div>

                <label htmlFor='message'>
                    Message: <textarea name='message'></textarea>
                </label>

                <button type='submit'>Send</button>
            </fieldset>
        </form>
    </FormStyles>
)

export default Contact
