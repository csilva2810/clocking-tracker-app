import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  margin: 0 auto;
`;

export const TitleSection = styled.section`
  margin-bottom: 24px;
`;

export const InputSection = styled.section`
  margin-bottom: 16px;

  ${({ horizontal = false }) =>
    horizontal &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
`;

export const InputGroup = styled.section`
  margin-bottom: 32px;
`;

export const FileInput = styled.input`
  position: absolute;
  left: -1000px;
  top: -1000px;
  height: 1px;
  width: 1px;
  overflow: hidden;
  opacity: 0;
`;
