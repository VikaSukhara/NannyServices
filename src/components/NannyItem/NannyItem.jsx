import {
  addFavourites,
  deleteFavourites,
  selectFavorites,
} from '../../redux/FavoriteSlice';
import {
  Button,
  ButtonAppointment,
  HeartButn,
  HeartIcon,
  Img,
  ImgWrap,
  Li,
  MapIcon,
  NannyText,
  OnlineIcon,
  Paragraph,
  RatingWrap,
  ReviewerImg,
  ReviewerLetter,
  SpanColour,
  StarIcon,
  StickIcon,
  TitleName,
  Ul,
  WrapDetails,
  WrapIcons,
  WrapIconsBlock,
  WrapText,
} from './NannyItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectNannies } from '../../redux/NannySlice';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { Appointment } from 'components/Appointment/Appointment';
import { selectIsLogin } from '../../redux/UserSlice';
import toast from 'react-hot-toast';

export const NannyItem = ({ nanny, id }) => {
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const favoritesList = useSelector(selectFavorites);
  const allNannies = useSelector(selectNannies);

  const handleFavorite = event => {
    const id = +event.currentTarget.id;
    const index = favoritesList.findIndex(item => item.id === id);
    const favoriteNanny = allNannies.find(item => item.id === id);

    if (!isLogin) {
      toast.error('Please log in to choose the nanny');
    } else if (index !== -1) {
      dispatch(deleteFavourites(id));
    } else {
      dispatch(addFavourites(favoriteNanny));
    }
  };

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const dataNow = new Date().getFullYear();
  return (
    <div>
      <Ul>
        <Li key={id}>
          <ImgWrap>
            <Img src={nanny.avatar_url} alt="" />
            <OnlineIcon />
          </ImgWrap>
          <WrapText>
            <WrapIcons>
              <p>Nanny</p>

              <WrapIconsBlock>
                <MapIcon />
                {nanny.location}
                <StickIcon />
                <StarIcon />
                Rating:{nanny.rating}
                <StickIcon />
                <p>
                  <span>Price / 1 hour: {nanny.price_per_hour}$</span>
                </p>
              </WrapIconsBlock>
            </WrapIcons>

            <HeartButn type="button" id={nanny.id} onClick={handleFavorite}>
              <HeartIcon
                fill={
                  favoritesList.some(item => item.id === nanny.id) && isLogin
                    ? 'rgb(16, 57, 49)'
                    : 'none'
                }
              />
            </HeartButn>

            <TitleName>{nanny.name}</TitleName>

            <WrapDetails>
              <Paragraph>
                Age:
                <SpanColour>
                  {dataNow - new Date(nanny.birthday).getFullYear()}
                </SpanColour>
                {nanny.age}
              </Paragraph>
              <Paragraph>
                Experience:<SpanColour>{nanny.experience}</SpanColour>
              </Paragraph>
              <Paragraph>
                Kids age: <SpanColour>{nanny.kids_age}</SpanColour>
              </Paragraph>
              <Paragraph>
                Characters:{' '}
                <SpanColour>{nanny.characters.join(', ')}</SpanColour>
              </Paragraph>
              <Paragraph>
                Education: <SpanColour>{nanny.education}</SpanColour>
              </Paragraph>
            </WrapDetails>

            <p>{nanny.about}</p>
            {!isOpenMore && (
              <Button type="bitton" onClick={() => setIsOpenMore(true)}>
                Read more
              </Button>
            )}
            {isOpenMore && (
              <div style={{ marginTop: '48px' }}>
                {nanny.reviews.map(review => {
                  return (
                    <div style={{ marginBottom: '25px' }}>
                      <RatingWrap>
                        <ReviewerImg>
                          <ReviewerLetter>
                            {review.reviewer.slice(0, 1)}
                          </ReviewerLetter>
                        </ReviewerImg>

                        <div>
                          <h3>
                            <SpanColour>{review.reviewer}</SpanColour>
                          </h3>
                          <RatingWrap>
                            <StarIcon />
                            <p>
                              <SpanColour>{review.rating}</SpanColour>
                            </p>
                          </RatingWrap>
                        </div>
                      </RatingWrap>

                      <p>{review.comment}</p>
                    </div>
                  );
                })}
                <ButtonAppointment
                  type="button"
                  onClick={() => setIsOpenModal(true)}
                >
                  Make an appointment
                </ButtonAppointment>
                {isOpenModal && (
                  <Modal toggleModal={toggleModal}>
                    <Appointment nanny={nanny} toggleModal={toggleModal} />
                  </Modal>
                )}
              </div>
            )}
          </WrapText>
        </Li>
      </Ul>
    </div>
  );
};
