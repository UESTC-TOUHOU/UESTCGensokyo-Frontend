import welcome from "./pages/welcome";
import router from "./router/router";

class App extends welcome {
  render() {
    return(router());
  }
}



export default App;
