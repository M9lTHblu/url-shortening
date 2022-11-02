import { Provider } from 'react-redux'
import { persistor, store } from 'store'
import { PersistGate } from 'redux-persist/integration/react'
import {
  AppContainer,
  Description,
  Main,
  Title,
} from 'styles/styles.sc'
import Form from 'components/Form'
import ShortensList from 'components/ShortensList'

export default function App () {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer>
          <Main>
            <Title>Short the links</Title>
            <Description>
              <p>
                To shorten links, add the correct link to
                the input field and press the "Shorten"
              </p>
              <p>
                All links are stored in your localStorage
                and will be available even after the pages reboot.
              </p>
              <p>
                To clean your localStorage just delete the link.
              </p>
            </Description>
            <Form />
            <ShortensList />
          </Main>
        </AppContainer>
      </PersistGate>
    </Provider>
  )
}
