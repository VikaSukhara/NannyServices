import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Title,
  Input,
  Wrap,
  Paragraph,
  StyledError,
} from './Registration.styled';
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import toast from 'react-hot-toast';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const Registration = ({ toggleModal }) => {
  const onSubmit = data => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(userCredential => {
        updateProfile(auth.currentUser, {
          displayName: data.name,
        });
        toast.success(
          `You have successfully registered, log in to your account`
        );
        toggleModal();
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <Wrap>
      <Title>Registration</Title>
      <Paragraph>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </Paragraph>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={data => {
          onSubmit(data);
        }}
      >
        <Form style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <label>
            <Input name="name" placeholder="Enter your name" />
            <StyledError name="name" component="div" />
          </label>

          <label>
            <Input name="email" placeholder="jane@acme.com" type="email" />
            <StyledError name="email" component="div" />
          </label>
          <label>
            <Input name="password" placeholder="Password" type="password" />
            <StyledError name="password" component="div" />
          </label>
          <Button type="submit">Sign Up</Button>
        </Form>
      </Formik>
    </Wrap>
  );
};
