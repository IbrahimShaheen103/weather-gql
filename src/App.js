import './App.css';
import Home from './Pages/Home';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";



function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/"
  })
  return (
    <div className='App'>
      <ApolloProvider client={client} >
        <Home />
      </ApolloProvider>
    </div>

  );
}

export default App;
