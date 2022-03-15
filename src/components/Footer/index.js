import styled from 'styled-components'

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
 background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 

  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: red;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
      


    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
    
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}

          <span>Imersão React da Alura</span>

        {' '}
        pelo
        {' '}
        Cyacer.
      </p>
    </FooterWrapper>
  );
}