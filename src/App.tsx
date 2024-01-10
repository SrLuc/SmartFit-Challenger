import Header from "./components/Header/Header";
import Heading from "./components/Heading/Heading";
import Panel from "./components/Panel/Panel";
import Conducts from "./components/Conducts/ConductPanel";

import Gyms from "./components/Gyms/Panel";
import { GymProvider } from "./contexts";

const App = () => {
  return (
    <>
      <GymProvider>
        <Header />
        <Heading />
        <Panel />
        <Conducts />
        <Gyms />
      </GymProvider>
    </>
  );
};

export default App;
