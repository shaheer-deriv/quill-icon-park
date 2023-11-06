import "./App.css";
import { ICON_CATEGORIES } from "./constants/icon_categories";

const App = () => (
  <div>
    <div>
      {ICON_CATEGORIES.map((category) => (
        <div key={category}>{category}</div>
      ))}
    </div>
  </div>
);

export default App;
