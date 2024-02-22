import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
 html,
 body {
   font-family: 'Open Sans', sans-serif;
   background-color: #2f2e41;
   padding: 0;
   margin: 0;
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
   cursor: pointer;
 }

 p {
  margin: unset;

 * {
   box-sizing: border-box;
 }
`;

export default ResetStyles;
