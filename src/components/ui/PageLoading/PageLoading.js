import React from 'react';
import styled from 'styled-components';

import Page from '../Page';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const PageLoading = ({ children }) => (
  <Page>
    <Container>{children}</Container>
  </Page>
);

export default PageLoading;
