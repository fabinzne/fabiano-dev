switch ReactDOM.querySelector("#app-root") {
| Some(domElement) => {
  let root = ReactDOM.Client.createRoot(domElement)

  let _ = ReactDOM.Client.Root.render(root, <App />);
}
| None => ()
}
