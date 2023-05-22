import * as yup from 'yup';

export const notificationsValidationSchema = yup.object().shape({
  message: yup.string().required(),
  created_at: yup.date().required(),
  read_at: yup.date(),
  user_id: yup.string(),
});
