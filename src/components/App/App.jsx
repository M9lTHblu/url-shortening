import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'store'
import About from 'components/About'
import Form from 'components/Form'
import List from 'components/List'
import AppContainer from './AppContainer'
import Main from './Main'

export default function App () {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer>
          <Main>
            <About />
            <Form />
            <List />
          </Main>
        </AppContainer>
      </PersistGate>
    </Provider>
  )
}
