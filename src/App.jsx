import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <main>
        <Sidebar active={active} />
        <Dashboard active={active} setActive={setActive} />
      </main>
    </>
  );
};

export default App;
