import styled from "styled-components";

const Widget = styled.div`
margin-top: 24px;
margin-bottom: 24px;
background-color: ${({ theme }) => theme.colors.primary};
border-radius:4px;
overflow:hidden;
h1{
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
  margin-bottom:0;
  color: ${({ theme }) => theme.colors.title};
}
h2, h3 {
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  margin-bottom:0;
  color: ${({ theme }) => theme.colors.title};
 }
 p{
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text};
 }
 `;

Widget.Header = styled.header`
 display:flex;
 justify-content:flex-start;
 align-items:center;
 margin: 0;
 padding-left: 10px ;
 padding-bottom: 3px ;

 
 `
 Widget.Content = styled.div`
 padding: 24px 32px 32px 32px ;

 & > *:first-child{
   margin-top: 0;

 }
 & >*:last-child{
   margin-bottom:0;

 }
 ul{
   list-style:none;
   padding:0 ;
 }
 `;

export default Widget;