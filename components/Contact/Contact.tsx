import styles from './Contact.module.scss'
import TitleH2 from '../TitleH2/TitleH2'
import Input from '../Input/Input'
import Button from '../Button/Button'
import axios from 'axios'
import Gradient from '../Gradient/Gradient'
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Star from '../Star/Star'
import * as Yup from 'yup'

const Contact = (): JSX.Element => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(
        /^(?:\+\d{1,2})?\d{11}$/,
        "Phone number must be in the format: 88888888888"
      )
      .required("Phone number is required"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const onSubmit = async (data: FieldValues) => {
    try {
      axios.post("http://localhost:3004/feedback", data)
      reset()
    } catch (err) {
      console.log(err)
      return err
    }
  }

  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <TitleH2 title="Contact us"/>
        <div className={styles.subtitle}>
          Do you have any kind of help please contact with us.
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            textError={errors.name?.message}
            register={register}
            placeholder="name"
            name="name"
          />
          <Input
            textError={errors.phone?.message}
            register={register}
            name="phone"
            placeholder="Phone"
          />
          <Input
            textError={errors.email?.message}
            register={register}
            name="email"
            placeholder="E-mail"
          />
          <Button text="Send"/>
        </form>
      </div>
      <Gradient top={-20} right={-20} background="#2A3E84"/>
      <Star top={-65} right={30} width={30}/>
      <Star top={-35} right={45}/>
      <Star top={-15} right={75}/>
    </div>
  )
}

export default Contact
