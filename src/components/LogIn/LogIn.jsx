import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Title,
  Paragraph,
  Input,
  Wrap,
  StyledError,
} from './LogIn.styled';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getUser } from '../../redux/UserSlice';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const Login = ({ toggleModal }) => {
  const [emailEntered, setEmailEntered] = useState(false);
  const [passwordEntered, setPasswordEntered] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = data => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(userCredential => {
        const user = userCredential.user;
        toast.success(`Welcome to your account`);

        const UserCreation = {
          id: user.uid,
          token: user.accessToken,
          email: user.email,
          name: user.displayName,
        };

        dispatch(getUser(UserCreation));
        toggleModal();
      })
      .catch(err => {
        toast.error('Wrong email or password. Try again', err.message);
      });
  };

  return (
    <Wrap>
      <Title>Log In</Title>
      <Paragraph>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </Paragraph>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={data => {
          handleSubmit(data);
        }}
      >
        <Form style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <label>
            <Input name="email" placeholder="Email" type="email" />
            <StyledError name="email" component="div" />
          </label>
          <label>
            <Input name="password" placeholder="Password" type="password" />
            <StyledError name="password" component="div" />
          </label>
          <Button type="submit">Log in</Button>
        </Form>
      </Formik>
      <Toaster position="top-right" reverseOrder={false} />
    </Wrap>
  );
};
