import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import SongList from './page/songList/SongList';
import SongCreate from './page/songCreate/SongCreate';

const apolloClient = new ApolloClient(
  { 
    link: new HttpLink({
      uri: "http://localhost:4000/graphql",
    }),
    cache: new InMemoryCache()
  }
  );

function App(){
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <div className="container">
            <Switch>
                <Route exact path="/" component={SongList}/>
                <Route path="/song/new" component={SongCreate}/>
            </Switch>
        </div>
        </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
