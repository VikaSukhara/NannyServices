import styled from 'styled-components';

export const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  border-radius: 30px;
`;

export const ModalContainer = styled.div`
  position: relative;
  margin: 20px;
  width: 566px;
  min-width: 600px;
  border-radius: 20px;
  background-color: var(--text-color--);
  transform: translateY(-50%);
  transition: opacity 0.3s, transform 0.3s;
`;

export const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  padding: 0;
  background: transparent;
  border: none;
`;

export const ModalCard = styled.div`
  position: relative;
  border-radius: 5px;
  padding: 30px;
  box-sizing: border-box;
  background: var(--text-color--);
  width: 320px;

  @media (min-width: 768px) {
    width: 490px;
  }
  @media (min-width: 1440px) {
    width: 600px;
    padding: 64px;
  }
`;
