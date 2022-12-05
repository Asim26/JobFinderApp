import * as Yup from 'yup';

const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please provide valid email')
    .required('Email Required'),
  password: Yup.string()
    .required('Password Required')
    .min(6, 'Password Too Short'),
});

export const SignUPSchema = Yup.object().shape({
  userName: Yup.string().required('User Name Required'),
  email: Yup.string().email('Invalid Email Address').required('Email Required'),
  password: Yup.string()
    .required('Password Required')
    .min(6, 'Password Too Short')
    .matches(
      passwordRegExp,
      'Password must be a combination of letters and numbers',
    ),
});

export const jobApplicationSchema = Yup.object().shape({
  firstName: Yup.string().required('User Name Required'),
  lastName: Yup.string().required('User Name Required'),
  email: Yup.string().email('Invalid Email Address').required('Email Required'),
  country: Yup.string().required('Country Name Required'),
  message: Yup.string().required('Message Required'),
});

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password Required')
    .min(6, 'Password Too Short')
    .matches(
      passwordRegExp,
      'Password must be a combination of letters and numbers',
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

export const VerifyPhoneSchema = Yup.object().shape({
  mobilePhone: Yup.string().required('Mobile Phone Required'),
});

export const ForgotPasswordPhoneSchema = Yup.object().shape({
  phone: Yup.string().min(10, 'Invalid Phone Number'),
});
export const ForgotPasswordEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please provide valid email')
    .required('Email Required'),
});

export const ProfileInfoSchema = Yup.object().shape({
  keywords: Yup.array().min(1, 'Keyword(s) Required').nullable(),
});

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Please provide valid email')
    .required('Please enter your email address'),
  phone: Yup.string().required('Please enter your phone number'),
  // location: Yup.string().required('Please add your location'),

  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});
export const UpdatePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  newPassword: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('newPassword'), null],
    'Passwords must match',
  ),
});
export const UpdateProfile = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Please provide valid email')
    .required('Please enter your email address'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  // phone: Yup.string()('Please enter your phone number'),
});
