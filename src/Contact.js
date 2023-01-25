import styled from "styled-components";
import { Button } from "./styles/Button";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
const {isAuthenticated ,user} = useAuth0();
  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
    text-align: center;


    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            background-color: #FFB200;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid #FFB200;;
              background-color: #FFB200;
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 style={{"font-size": "64px",margin: "0 0 4rem 0","font-family": "'Sofia Sans Semi Condensed', sans-serif"}}>Contact Page </h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.3865776416387!2d77.2168118!3d28.528098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f4d9f62005%3A0x3aee569514ba9326!2sDLF%20Avenue%20Saket!5e0!3m2!1sen!2sin!4v1672489250129!5m2!1sen!2sin" 
    width="100%" 
    height="450" 
    style= {{border:"0"}} 
    allowPullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"></iframe>
  
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xzbqbpnj" method="POST" className="contact-inputs">
            <input type="text" placeholder=" Enter your Username.." value={isAuthenticated ? user.name : ""} name="username" required autoComplete="off"/>
            <input type="email" placeholder=" Enter your E-mail.." value={isAuthenticated ? user.email : ""} name="email" required autoComplete="off"/>
            <textarea placeholder="Enter your message" name="message" cols="30" row="30" autoComplete="off" required> </textarea>
            <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>;
};

export default Contact;
