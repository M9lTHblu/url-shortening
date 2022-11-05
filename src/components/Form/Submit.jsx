import { useSelector } from 'react-redux'
import { Btn } from 'styles/sharedStyles'
import Spinner from './Spinner'


const Submit = ({text}) => {
  const { loading } = useSelector(state => state.links)

  return (
    <Btn>
      {loading === 'loading' ? <Spinner /> : text}
    </Btn>
  )
}
export default Submit
