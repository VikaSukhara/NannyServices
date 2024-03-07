import styled from 'styled-components';
import { Field } from 'formik';
export const Wrap = styled.div`
  width: 100%;
  height: auto;
`;

export const Title = styled.h1`
  color: var(--span-color--);

  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -2%;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const Paragraph = styled.p`
  color: var(--paragraph-color--);

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  margin-bottom: 40px;
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
  &:hover {
    background: rgba(16, 57, 49, 0.2);
    color: var(--main-color--);
  }

  @media (min-width: 768px) {
    padding: 16px 190px;
    border-radius: 30px;
  }
`;
export const Label = styled.label``;
export const Input = styled(Field)`
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 12px;
  margin-bottom: 18px;
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
