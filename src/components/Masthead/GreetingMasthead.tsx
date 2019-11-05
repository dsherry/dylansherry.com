import * as React from 'react';
import styled from "styled-components"
import { Box, Heading } from 'rebass/styled-components'
import SpectrvmJpg from '@assets/img/spectrvm_pic.jpg'
import MastheadSVG from '@assets/svg/masthead-circles.svg'

interface IGreetingMastheadProps {
  className: string
}

const GreetingMasthead: React.FunctionComponent<IGreetingMastheadProps> = ({className}) => {
  return(
  <section className={className}>
    <Box mb={4}>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </Box>
  </section>
  )
};


const StyledGreetingMasthead = styled(GreetingMasthead)`
  padding:4rem;
  border-bottom:1px solid ${(props) => props.theme.colors.black};

  //background-image:url('spectrvm_pic.jpg');
  //background-image:url(${MastheadSVG});
  background-image:url(${SpectrvmJpg});
  background-repeat:no-repeat;

  ${(props) => props.theme.mediaQueries.mobile} {
    background-size:150%;
    background-position:30% 30%;
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    background-size:75%;
    background-position:-30% 30%;
  }
`

export default StyledGreetingMasthead;
