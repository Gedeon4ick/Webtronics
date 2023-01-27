import * as Yup from 'yup'

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Это поле обязательно к заполнению"),
    phone: Yup.string().matches(phoneRegExp, 'Invalid phone number format').required('Обязательно введите номер'),
    email: Yup.string().email().required("Это поле обязательно к заполнению")
})

export default validationSchema