import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass/styled-components'
import TriangleBG from '../../assets/svg/bg-triangle.svg'

const StyledBox = styled(Box)`
  box-shadow:none;
  border-bottom:1px solid ${(props) => props.theme.colors.black};
  background:url(${TriangleBG});
  background-size:200px 200px;
  position:relative;
  z-index:10;
`

interface Props {
  children: JSX.Element
}

const Featured: React.FC<Props> = ({children}) => {
  return (
    <StyledBox px={4} py={6}>
      {children}
    </StyledBox>
  )
}

export default Featured