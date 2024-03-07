import styled from 'styled-components';
import { ReactComponent as Map } from '../../img/map.svg';
import { ReactComponent as Star } from '../../img/star.svg';
import { ReactComponent as Heart } from '../../img/heart.svg';
import { ReactComponent as Stick } from '../../img/stick.svg';
import { ReactComponent as Online } from '../../img/online.svg';

export const MapIcon = styled(Map)`
  width: 10px;
  height: 10px;
  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
export const StarIcon = styled(Star)`
  margin-right: 4px;
  width: 10px;
  height: 10px;
  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const HeartButn = styled.button`
  position: absolute;
  top: 16px;
  right: 24px;
  background: transparent;
  @media (min-width: 768px) {
    top: 24px;
  }
`;

export const HeartIcon = styled(Heart)`
  width: 10px;
  height: 10px;
  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
export const StickIcon = styled(Stick)``;

export const Ul = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;
export const Li = styled.li`
  gap: 22px;
  position: relative;

  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  border-radius: 15px;

  padding: 15px 15px;
  width: 310px;
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
  color: rgb(138, 138, 137);
  background-color: #fbfbfb;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    border-radius: 18px;
    width: 721px;
    padding: 20px 20px;
  }

  @media (min-width: 1440px) {
    width: 1184px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 24px;
    padding: 24px 24px;
  }
`;

export const ImgWrap = styled.div`
  padding: 4px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(240, 63, 59, 0.2);
  border-radius: 15px;

  position: relative;

  @media (min-width: 768px) {
    border-radius: 15px;
    padding: 8px;
    height: 88px;
  }

  @media (min-width: 1440px) {
    border-radius: 30px;
    padding: 12px;
    height: 122px;
  }
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 15px;

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
    border-radius: 15px;
  }

  @media (min-width: 1440px) {
    width: 96px;
    height: 96px;
    border-radius: 15px;
  }
`;

export const WrapText = styled.div``;

export const WrapIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    padding-right: 50px;
  }
`;

export const WrapIconsBlock = styled.div`
  display: none;

  @media (min-width: 1440px) {
    padding-right: 98px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
  }
`;

export const OnlineIcon = styled(Online)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 8px;
  height: 8px;
  @media (min-width: 768px) {
    width: 14px;
    height: 14px;
    top: 3px;
    right: 3px;
  }

  @media (min-width: 1440px) {
    width: 14px;
    height: 14px;
    top: 11px;
    right: 11px;
  }
`;

export const TitleName = styled.h2`
  color: var(--span-color--);

  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  margin-bottom: 15px;
  margin-top: 8px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 24px;
    margin-top: 8px;
  }
`;

export const SpanColour = styled.span`
  color: var(--span-color--);

  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0%;

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0%;
  }
`;

export const WrapDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Paragraph = styled.div`
  width: auto;
  padding: 4px 8px;
  border-radius: 24px;
  background: rgb(243, 243, 243);
`;

export const Button = styled.button`
  color: var(--span-color--);
  border: none;

  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  text-decoration-line: underline;
  background-color: transparent;
  margin-top: 16px;

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
`;

export const RatingWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const ReviewerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(16, 57, 49, 0.2);
  margin-right: 8px;

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
export const ReviewerLetter = styled.span`
  color: var(--span-color--);

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
`;

export const ButtonAppointment = styled.button`
  display: block;
  border-radius: 15px;
  background: var(--main-color--);
  padding: 10px 20px;
  color: var(--text-color--);

  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -1%;
  margin-top: 25px;

  @media (min-width: 768px) {
    border-radius: 30px;
    padding: 14px 40px;
    font-size: 16px;
  }
`;
