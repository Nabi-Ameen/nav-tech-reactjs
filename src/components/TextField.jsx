import { Field } from 'formik'

const TextField = ({ name, type, placeholder }) => {
    return (
        <Field
            type={type}
            name={name}
            placeholder={placeholder}
            className='border-2 p-2 rounded-md'
        />
    )
}

export default TextField