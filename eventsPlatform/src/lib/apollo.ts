import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oot56d0pis01z49idkf2qk/master',
  cache: new InMemoryCache()

})