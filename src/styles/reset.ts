import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
 * {
   box-sizing: border-box;
 }
 
 html,
 body {
   font-family: 'Open Sans', sans-serif;
   background-color: ${({ theme }) => theme.colors.background};
   padding: 0;
   margin: 0;
   overflow-x: hidden;
 }

 ul, ol {
  list-style: none;
  margin-block-start: unset;
  margin-block-end: unset;
  padding-inline-start: unset;
 }

 a {
   color: inherit;
   text-decoration: none;
 }

 button {
   font-family: 'Open Sans', sans-serif;
   appearance: none;
   border: unset;
   background: unset;
   padding-inline: unset;
   padding-block: unset;
   cursor: pointer;
  }

 p {
  margin: unset;
 }

 .label--button {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.extrasmall};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: ${({ theme }) => theme.lineHeight.extrasmall};
    text-transform: uppercase;
  }
`;

export default ResetStyles;
