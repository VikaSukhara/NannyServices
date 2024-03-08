import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
export const Wrap = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  color: var(--span-color--);
  font-size: 18px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -2%;
  margin-bottom: 20px;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 48px;
  }
  @media (min-width: 1440px) {
    font-size: 40px;
    line-height: 48px;
  }
`;
export const Paragraph = styled.p`
  color: var(--paragraph-color--);

  font-size: 12px;
  font-weight: 400;
  width: 100%;

  letter-spacing: 0%;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 100px;
  border-radius: 10px;
  background: var(--main-color--);
  color: var(--text-color--);
  margin-top: 22px;
  border-radius: 30px;

  &:hover {
    background: #a1b3a8;
    color: var(--main-color--);
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 190px;
    margin-top: 22px;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 12px;

  padding: 18px 18px;

  &::placeholder {
    color: var(--span-color--);

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
  }
`;
export const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 15px;
`;
