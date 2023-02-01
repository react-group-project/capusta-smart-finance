export const authValidation = {
  email: {
    required: 'Email is required',
    minLength: {
      value: 3,
      message: 'Minimum 3 letters',
    },
    maxLength: {
      value: 256,
      message: 'Maximum 256 letters',
    },
    pattern: {
      value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'Invalid email',
    },
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 8,
      message: 'Minimum 8 letters',
    },
    maxLength: {
      value: 100,
      message: 'Maximum 100 letters',
    },
  },
};
