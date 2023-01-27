import styles from './Contact.module.scss'
import TitleH2 from '../TitleH2/TitleH2';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux'
import validationSchema from '../../store/validation'
import axios from 'axios';
import { log } from 'console';

interface Props {
    formData: object
}

const Contact = ({formData}:Props):JSX.Element => {
    
    const updateFormData = (formData) => ({
        type: "UPDATE_FORM_DATA",
        payload: formData
    });

    const handleSubmit = async (event) => {
        
        event.preventDefault()

        try {
          await validationSchema.validate(formData)
          axios.post('http://localhost:3004/feedback', formData)
        } catch (err) {
          console.log(err)
        }
      }

    const dispatch = useDispatch()

    const handleChange = (event) => {
    const { name, value } = event.target
    dispatch(updateFormData({ [name]: value }))
    }
    return (
        <div className={styles.contact}>
            <div className={styles.content}>
                <TitleH2 title={"Contact us"}/>
                <div className={styles.subtitle}>
                    Do you have any kind of help please contact with us.
                </div>
                <form className="form">
                    <Input name={"name"} handleChange={handleChange} placeholder='name'/>
                    <Input name={"phone"} handleChange={handleChange} placeholder='Phone'/>
                    <Input name={"email"} handleChange={handleChange} placeholder="E-mail"/>
                    <Button handleSubmit={handleSubmit} text={"Send"}/>
                </form>
            </div>
        </div>
    );
};

export default Contact;