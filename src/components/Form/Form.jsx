import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { shorten } from 'store/slices/linksSclice'
import FormContainer from './FormContainer'
import Label from './Label'
import Input from './Input'
import InputError from './InputError'
import Submit from './Submit'
import regexPattern from './regexPattern'

export default function Form () {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()

  const onSubmit = ({ url }) => {
    dispatch(shorten(url))
    resetField('url')
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Input
          type='url'
          placeholder='Add the link'
          isValid={!errors.url?.message}
          {...register('url',
            {
              required: true,
              pattern: {
                value: regexPattern,
                message: 'Please enter a valid url',
              },
            })}
        />
        <InputError>{errors.url?.message}</InputError>
      </Label>
      <Submit text='Shorten' />
    </FormContainer>
  )
}
