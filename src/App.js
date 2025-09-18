import { Calendar } from "./Components/Calendar/Calendar";
import { BalanceCircle } from "./Components/Circle/BalanceCircle";
import { BalanceTracker } from "./Components/Circle/BalanceTracker";
import { Layout } from "./Components/Layout/Layout";
import { GlobalStyle } from "./GlobalStyle";

const isState = 0;
function App() {
  return (<>
    <Layout>
    
    </Layout>
      {isState ? <BalanceCircle /> : <BalanceTracker />};<Calendar></Calendar>
      <GlobalStyle />
      </>
  );
}

export default App;
