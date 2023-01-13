import * as React from "react"
import "./App.css"
// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// const client = new ApolloClient({ uri: "http://localhost:9000/.netlify/functions/graphql", cache: new InMemoryCache() });

// const client = new ApolloClient({uri: 'https://flyby-gateway.herokuapp.com/',cache: new InMemoryCache(),});

// client.query({query: gql`query GetLocations {locations {id name description photo}}`,}).then((result) => console.log(result));

// client.query({ query: gql`query hallo {hello}`, }).then((result) => console.log(result));

class LambdaDemo extends React.Component<{}, { loading: boolean, msg: string }>{
  constructor(props: {}) {
    super(props)
    this.state = { loading: false, msg: '' }
  }
  //@ts-ignore
  handleClick = () => e => {
    e.preventDefault()
    this.setState({ loading: true })
    fetch("/.netlify/functions/dadjoke")
      .then(res => {

        return res.json()
      })
      .then(json => {
        console.log(1, json)
        this.setState({ loading: false, msg: json.msg })
      })
  }

  render() {
    const { loading, msg } = this.state

    return (
      <div>
        <button onClick={this.handleClick()}>{loading ? "Load..." : "Call Async"}</button>
        <div>{msg}</div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Tiko's
          </h1>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
