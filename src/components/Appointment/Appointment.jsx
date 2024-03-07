import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Title,
  Text,
  Img,
  NannyName,
  NannyWrap,
  TextWrap,
  Paragraph,
  Wrap,
  Forma,
  Input,
  InputBig,
  InputAria,
  Button,
} from './Appointment.styled';

const AppointmentSchema = Yup.object().shape({
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  childAge: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  time: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  parents: Yup.string().required('Required'),
  comment: Yup.string().required('Required'),
});

export const Appointment = ({ nanny, toggleModal }) => {
  return (
    <Wrap>
      <Title>Make an appointment with a babysitter</Title>
      <Text>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </Text>
      <NannyWrap>
        <Img src={nanny.avatar_url} alt="nany" />
        <TextWrap>
          <Paragraph>Your nanny</Paragraph>
          <NannyName>{nanny.name}</NannyName>
        </TextWrap>
      </NannyWrap>
      <Formik
        initialValues={{
          address: '',
          phone: '',
          childAge: '',
          time: '',
          parents: '',
          email: '',
          comment: '',
        }}
        validationSchema={AppointmentSchema}
        onSubmit={values => {
          toggleModal()
        }}
      >
        <Forma>
          <label>
            <Input name="address" placeholder="Address" />
          </label>
          <label>
            <Input name="phone" placeholder="+380" />
          </label>
          <label>
            <Input name="childAge" placeholder="Child's age" />
          </label>
          <label>
            <Input name="time" placeholder="00:00" type="time" />
          </label>

          <label>
            <InputBig name="parents" placeholder="Father's or mother's name" />
          </label>

          <label>
            <InputBig name="email" placeholder="jane@acme.com" type="email" />
          </label>

          <label>
            <InputAria name="comment" placeholder="Comment" />
          </label>

          <Button type="submit">Send</Button>
        </Forma>
      </Formik>
    </Wrap>
  );
};
