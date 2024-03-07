import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Title, Paragraph, Input, Wrap } from './LogIn.styled';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getUser } from '../../redux/UserSlice';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

export const Login = ({ toggleModal }) => {
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
        console.error(toast.error('Login problem', err.message));
      });
  };

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

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
        <Form>
          <label>
            <Input name="email" placeholder="Email" type="email" />
          </label>
          <label>
            <Input name="password" placeholder="Password" type="password" />
          </label>
          <Button type="submit">Log in</Button>
        </Form>
      </Formik>
      <Toaster position="top-right" reverseOrder={false} />
    </Wrap>
  );
};
