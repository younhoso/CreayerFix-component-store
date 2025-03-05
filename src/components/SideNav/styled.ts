'use client';

import styled from 'styled-components';

export const SideNavStyled = styled.div`
  position: fixed;
  top: 84px;
  left: 0;
  background-color: ${props => props.theme.colors.gray7f7};
  border-right: 1px solid ${props => props.theme.colors.gray4e4};
  padding: 20px;
`;
