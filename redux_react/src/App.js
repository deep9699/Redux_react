import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from "./components/IceCreamContainer";
import CookieContainer from './components/CookieContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';






function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <CakeContainer></CakeContainer>
      <IceCreamContainer></IceCreamContainer>
      <CookieContainer></CookieContainer>
      <NewCakeContainer></NewCakeContainer>
      <ItemContainer cake></ItemContainer>
      <ItemContainer iceCream></ItemContainer>
      <ItemContainer></ItemContainer> */}

      <UserContainer></UserContainer>
      
    </div>
    </Provider>
  );
}

export default App;
