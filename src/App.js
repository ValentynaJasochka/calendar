import { BalanceCircle} from "./Components/Circle/BalanceCircle";
import { BalanceTracker } from "./Components/Circle/BalanceTracker";

const isState = 0;
function App() {
  return (
    isState? <BalanceCircle/>:<BalanceTracker/>
    
  );
}

export default App;
