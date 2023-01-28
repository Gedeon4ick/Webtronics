import { useState } from 'react'; 
import styles from './Contact.module.scss'
import TitleH2 from '../TitleH2/TitleH2';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux'
import validationSchema from '../../store/validation'
import axios from 'axios';
import { useForm  } from 'react-hook-form'
import * as Yup from 'yup'


interface Props {
    formData: object
}
const Contact = ({formData}:Props):JSX.Element => {

    const phone = Yup.string()
        .matches(/^\d{3}-\d{3}-\d{4}$/, 'Phone number must be in the format: 555-555-5555')
        .required('Phone number is required');

    const email= Yup.string()
    .email('Invalid email address')
    .required('Email is required');

    const name = Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required');

    let [nameError, setNameError] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        } = useForm();
    
        // const updateFormData = (formData) => ({
        //     type: "UPDATE_FORM_DATA",
        //     payload: formData
        // });
        
        const onSubmit = async (formData) => {
            console.log(formData);
            
            try {
            await validationSchema.validate(formData).catch(function (err) {
                console.log(err);
                
                // err.name; // => 'ValidationError'
                // err.errors; // => ['Deve ser maior que 18']
              });

              axios.post('http://localhost:3004/feedback', formData)
              reset() 
            } catch (err) {
              console.log(err)
              return err
            }
          }
        
        // const dispatch = useDispatch()
        
        // const handleChange = (event) => {
        // const { name, value } = event.target
        // dispatch(updateFormData({ [name]: value }))
        // }

        const handleChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target.value);
            name.validate(event.target.value).then(() => {
                setNameError(null)
            }).catch(err => {
                console.log(err.message);
                setNameError(err.message)
            })
            // Дополнительная логика
          }

        return (
            <div className={styles.contact}>
                <div className={styles.content}>
                    <TitleH2 title={"Contact us"}/>
                    <div className={styles.subtitle}>
                        Do you have any kind of help please contact with us.
                    </div>
                    <form className="form">
                        <Input textError={nameError} name={"name"} register={register} errors={errors.name}  placeholder='name' handleChange={handleChange}/>
                        <Input textError={errors.name && errors.name.message} name={"phone"} register={register} errors={errors.phone}  placeholder='Phone' handleChange={handleChange}/>
                        <Input textError={errors.name && errors.name.message} name={"email"} register={register} errors={errors.email}  placeholder="E-mail" handleChange={handleChange}/>
                        <Button handleSubmit={handleSubmit(onSubmit)} text={"Send"}/>
                    </form>
                </div>
            </div>
        );
}


export default Contact;