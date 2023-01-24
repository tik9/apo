import { useEffect, useState } from "react"
import "./App.css"

export default function App() {
  const [data, setData] = useState(null);

  //@ts-ignore
  useEffect(() => {
    async function fetchData() {
      setData(await (await fetch("/.netlify/functions/dadjoke")).json())
    }
    fetchData()
  }, []);
  //@ts-ignore
  return <p> {JSON.stringify(data)}</p>;
}
// class LambdaDemo extends React.Component<{}, { loading: boolean, msg: string }>{
//   constructor(props: {}) {
//     super(props)
//     this.state = { loading: false, msg: '' }
//   }
//   //@ts-ignore
//   handleClick = () => e => {
//     e.preventDefault()
//     this.setState({ loading: true })
//     fetch("/.netlify/functions/dadjoke")
//       .then(res => res.json())
//       .then(json => { this.setState({ loading: false, msg: json.msg }) })
//   }

//   render() {
//     const { loading, msg } = this.state

//     return (
//       <div>
//         <button onClick={this.handleClick()}>{loading ? "Load..." : "Call Async"}</button>
//         <div>{msg}</div>
//       </div>
//     )
//   }
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>
//             Tiko's
//           </h1>
//           <LambdaDemo />
//         </header>
//       </div>
//     )
//   }
// }