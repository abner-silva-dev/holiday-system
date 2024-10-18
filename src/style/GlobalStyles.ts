import { createGlobalStyle } from 'styled-components';
import { media } from './media';

/* Colors adapted from https://tailwindcss.com/docs/customizing-colors */
const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode{
/* Indigo */

  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

    --color-blue-100: #e7f5ff;
    --color-blue-300: #175691;
  

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-600: #16a34a;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-200: #fecaca;
  --color-red-300: #fca5a5;
  --color-red-400: #f87171;
  --color-red-500: #ef4444;
  --color-red-600: #dc2626;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;
  --color-red-900: #7f1d1d;



  --backdrop-color: rgba(255, 255, 255, 0.1);
  
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --image-grayscale: 0;
  --image-opacity: 100%;
}
  
 ::-webkit-scrollbar{
  width: 6px;
  height: 6px;
 }

 ::-webkit-scrollbar-thumb{
  background-color: var(--color-brand-800);
  border-radius: 9px;
 }
  
 ::-webkit-scrollbar-track{
  background-color: var(--color-grey-200);
  border-radius: 9px;
  padding: 10px;
 }

  /* For dark mode */
  &.dark-mode{
    --color-grey-0: #18212f;
    --color-grey-50: #111827;
    --color-grey-100: #1f2937;
    --color-grey-200: #374151;
    --color-grey-300: #4b5563;
    --color-grey-400: #6b7280;
    --color-grey-500: #9ca3af;
    --color-grey-600: #d1d5db;
    --color-grey-700: #e5e7eb;
    --color-grey-800: #f3f4f6;
    --color-grey-900: #f9fafb;

    --color-blue-100: #075985;
    --color-blue-700: #e0f2fe;
    --color-yellow-100: #854d0e;
    --color-yellow-700: #fef9c3;
    --color-silver-100: #374151;
    --color-silver-700: #f3f4f6;
    --color-indigo-100: #3730a3;
    --color-indigo-700: #e0e7ff;

    --color-red-0:  #7f1d1d
    --color-red-50: #991b1b; 
    --color-red-100: #b91c1c;
    --color-red-200: #dc2626;
    --color-red-300: #ef4444;
    --color-red-400: #f87171;
    --color-red-500: #fca5a5;
    --color-red-600: #fecaca;
    --color-red-700: #fee2e2;
    --color-red-800: #fee2e2; 
    --color-red-900: #fef2f2; 

  --color-brand-50:  #312e81;
  --color-brand-100: #3730a3;
  --color-brand-200: #4338ca;
  --color-brand-500: #4f46e5;
  --color-brand-600: #6366f1;
  --color-brand-700: #c7d2fe;
  --color-brand-800: #e0e7ff;
  --color-brand-900: #eef2ff;
  
  --color-blue-300: #9bcae9;
  
    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;
  }
   /* Indigo */


  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  
  font-size: 62.5%;

  @media ${media.smallTablet} {
    font-size: 54%;
  }

  @media ${media.landscape} {
    font-size: 47%;
  }

  @media ${media.tablet} {
    font-size: 43.7%;
  }

  @media ${media.mobile} {
    font-size: 37.5%
  }

/* 
  @media ${media.desktop} {
    font-size: 7%;
  } */
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem; 
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}
textarea:disabled,  
select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}



input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-red-200);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: none;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;

export default GlobalStyles;
