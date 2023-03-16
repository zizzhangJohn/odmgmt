import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomersDashboard from '../../features/customers/customersDashboard/CustomerDashboard'
import OrdersDashboard from '../../features/orders/ordersDashboard/OrdersDashboard'

import HomePage from '../../features/home/HomePage'
import Layout from './Layout'
import './styles.css'

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {}
  }),
  uri: import.meta.env.VITE_API_SCHEMA_URL
})

function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='customers' element={<CustomersDashboard />} />
            <Route path='orders' element={<OrdersDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
