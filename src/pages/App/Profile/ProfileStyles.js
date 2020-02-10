import styled from 'styled-components';

import BasePage from '../../../components/ui/Page';

export const Page = styled(BasePage)`
  background-color: #fafafa;
`;

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

export const Title = styled.b`
  font-weight: bold;
  font-size: 1.1rem;
`;

export const BottomMenu = styled.div`
  flex: 1;
  display: block;
  width: 100%;
  padding: 24px 16px;
  background-color: white;
  border-radius: 30px / 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0 -3px 12px 0 rgba(0, 0, 0, 0.05);
`;

export const TitleSection = styled.section`
  margin-bottom: 24px;
`;

export const InputSection = styled.section`
  margin-bottom: 16px;
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
