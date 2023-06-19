import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

const App = () => {
  // const [active, setActive] = useState(false);

  return (
    <>
      <main>
        <Sidebar />
        <Dashboard />
      </main>
    </>
  );
};

export default App;
