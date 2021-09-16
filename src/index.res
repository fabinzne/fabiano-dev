switch ReactDOM.querySelector("#app-root") {
| Some(domElement) => ReactDOM.render(<App />, domElement)
| None => ()
}
