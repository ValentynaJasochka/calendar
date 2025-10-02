import { Calendar } from "./Components/Calendar/Calendar";
import { BalanceCircle } from "./Components/Circle/BalanceCircle";
import { BalanceTracker } from "./Components/Circle/BalanceTracker";
import { Layout } from "./Components/Layout/Layout";
import { PriceBlock } from "./Components/PriceBlock/PriceBlock";
import { GlobalStyle } from "./GlobalStyle";
const isPricePlan = null;
const isState = 0;
function App() {
  return (
    <>
    <PriceBlock />
      <Layout>
        {!isPricePlan ? (
          <PriceBlock />
        ) : (
          <>
            {isState ? <BalanceCircle /> : <BalanceTracker />}
            <Calendar />
          </>
        )}
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default App;
