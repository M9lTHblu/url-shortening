import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {fetchLinks} from '../../redux/slices/linksSclice';
import {Button} from '../Button/Button';
import {Error} from './Error';
import {Container} from './Form';
import {Gradient} from './Gradient';
import {Input} from './Input';

const rgx = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

export const Form = () => {
  const {register, handleSubmit, resetField, formState: {errors}} = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data, 'data from submit');
    dispatch(fetchLinks(data.url));
    resetField('url');
  };

  return (
      <Gradient>
        <div className="wrapper">
          <Container onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="url"
                error={errors}
                {...register(
                    'url', {
                      required: 'Please add a link',
                      pattern: {
                        value: rgx,
                        message: 'Please enter a valid url',
                      },
                    })} />
            <Button size="md" variant="square" text="Shorten It!" />
            <Error>
              {errors.url?.message}
            </Error>
          </Container>
        </div>
      </Gradient>
  );
};







