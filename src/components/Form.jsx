import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {  shorten } from 'store/slices/linksSclice'
import {
  Error,
  Input, Label,
  StyledForm,
  Submit,
} from '../styles/styles.sc'

const regex = /[(http(s)?):(www)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/

export default function Form () {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (link) => {
    dispatch(shorten(link.url))
    resetField('url')
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Input
          type='url'
          placeholder='Add the link'
          isValid={!errors.url?.message}
          {...register('url',
            {
              required: true,
              pattern: {
                value: regex,
                message: 'Please enter a valid url',
              },
            })}
        />
        <Error>{errors.url?.message}</Error>
      </Label>
      <Submit type='submit' >Shorten</Submit>
    </StyledForm>
  )
}






