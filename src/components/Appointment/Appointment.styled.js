import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 15px;
`;

export const Wrap = styled.div`
  width: 100%;
  height: auto;
`;

export const Title = styled.h2`
  color: var(--span-color--);
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -2%;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 25px;
    line-height: 35px;
  }
  @media (min-width: 1440px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const Text = styled.p`
  color: var(--paragraph-color--);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 40px;
  }
`;

export const NannyWrap = styled.div`
  display: flex;
  gap: 14px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Img = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 15px;
  background: rgb(224, 224, 224);
`;

export const Paragraph = styled.p`
  color: rgb(138, 138, 137);

  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0%;
`;
export const NannyName = styled.h3`
  color: var(--span-color--);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
`;

export const Forma = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  gap: 4px;

  @media (min-width: 768px) {
    margin-top: 30px;
    gap: 8px;
  }

  @media (min-width: 1440px) {
    margin-top: 40px;
    gap: 8px;
  }
`;

export const Input = styled(Field)`
  display: block;
  width: 270px;
  height: 30px;
  padding: 5px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 10px;

  &::placeholder {
    color: var(--span-color--);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 40px;

    border-radius: 12px;
    &::placeholder {
      font-size: 16px;
      line-height: 20px;
    }
  }

  @media (min-width: 1440px) {
    width: 100%;
    height: 52px;
    /* padding: 16px; */
    border-radius: 12px;
    &::placeholder {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const InputBig = styled(Field)`
  width: 270px;
  height: 30px;
  padding: 5px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 10px;
  &::placeholder {
    color: var(--span-color--);
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0%;
  }

  @media (min-width: 768px) {
    height: 40px;
    width: 430px;
    padding: 16px;
    border-radius: 12px;

    &::placeholder {
      font-size: 14px;
      line-height: 20px;
    }
    @media (min-width: 768px) {
      ::placeholder {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
`;

export const InputAria = styled(Field)`
  width: 270px;
  height: 70px;
  padding: 5px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 10px;
  margin-bottom: 10px;

  &::placeholder {
    color: var(--span-color--);
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0%;
    transform: translateY(-20px);
  }

  @media (min-width: 768px) {
    width: 430px;
    height: 100px;
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 24px;

    &::placeholder {
      height: 116px;
      font-size: 16px;
      line-height: 20px;
    }
  }

  @media (min-width: 768px) {
    &::placeholder {
      transform: translateY(-30px);
    }
  }
`;

export const Button = styled.button`
  display: block;
  border-radius: 30px;
  padding: 10px 100px;

  background: var(--main-color--);
  color: var(--text-color--);

  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -1%;
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 25px; */
  &:hover {
    background: #a1b3a8;
    color: var(--main-color--);
  }
`;
