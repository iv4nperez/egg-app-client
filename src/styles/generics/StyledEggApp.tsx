import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Main = styled(motion.main)`
  --content-max-width: 700px;
  width: 100%;
  max-width: var(--content-max-width);
  margin: 3.5rem auto 1rem;
  @media screen and (max-width: 768px) {
    & {
      padding: 0 1rem;
    }
  }
`

export const Text = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.body.secondText};
  margin: 1rem 0;
  
  strong {
    color: ${({ theme }) => theme.colors.body.primaryText};
    text-shadow: ${({ theme }) => theme.colors.body.primaryTextShadow};
  }
`

export const Greeting = styled.h1`
  margin: 0;
  /* background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(29,29,167,1) 35%, rgba(0,212,255,1) 100%); */

background: rgb(255,207,0);
background: linear-gradient(90deg, rgba(255,207,0,1) 53%, rgba(126,104,6,1) 79%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  display: inline-block;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    & {
      --h1: 2.75rem;
      line-height: 1.2;
    }
  }
`

export const ActualDate = styled.h3`
  font-weight: 300;
  margin: 0;
  text-transform: capitalize;
`

