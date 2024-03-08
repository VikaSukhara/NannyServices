import {
  ArrowIcon,
  Button,
  CheckMarkIcon,
  CheckMarkWrap,
  ExperienceNumber,
  ExperienceText,
  ExperienceTextWrap,
  ExperienceWrap,
  GetStartLink,
  H1,
  H3,
  Img,
  Wrap,
  WrapText,
} from './HomeDef.styled';
import backgroundImage from '../../img/backgroundImage.png';

export const HomeDef = () => {
  return (
    <Wrap>
      <WrapText>
        <H1>Make Life Easier for the Family:</H1>
        <H3>Find Babysitters Online for All Occasions</H3>
        <div>
          <Button>
            <GetStartLink to="/nannies">
              Get started
              <ArrowIcon className="something" />
            </GetStartLink>
          </Button>
        </div>
      </WrapText>

      <ExperienceWrap>
        <CheckMarkWrap>
          <CheckMarkIcon />
        </CheckMarkWrap>
        <ExperienceTextWrap>
          <ExperienceText>Experienced nannies</ExperienceText>
          <ExperienceNumber>1500</ExperienceNumber>
        </ExperienceTextWrap>
      </ExperienceWrap>
      <Img src={backgroundImage} alt="backgroundImage" />
    </Wrap>
  );
};
