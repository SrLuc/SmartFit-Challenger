import Header from "./components/Header/Header";
import Heading from "./components/Heading/Heading";
import Panel from "./components/Panel/Panel";
import Conducts from "./components/Conducts/ConductPanel";

import Gyms from "./components/Gyms/Panel";
import { GymProvider } from "./contexts";

const App = () => {
  return (
    <>
      <GymProvider gymsList={[]} setGymsList={() => null}>
        <Header />
        <Heading />
        <Panel />
        
        <Gyms />
      </GymProvider>
    </>
  );
};

export default App;
