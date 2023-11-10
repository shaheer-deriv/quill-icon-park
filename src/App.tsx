import "./App.scss";
import Body from "./components/body/body";
import Header from "./components/header/header";

const App = () => (
  <div className="flex flex-col text-gray-700">
    <Header />
    <Body />
  </div>
);

export default App;
