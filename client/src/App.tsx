import Hero from "./Components/Hero";
import Advantages from "./Pages/Advantages";
import PopularDestination from "./Pages/PopularDestination";
import TopSelling from "./Pages/TopSelling";

const App = () => {
  return (
    <div>
      <Hero />
      <PopularDestination />
      <Advantages />
      <TopSelling />
    </div>
  );
};

export default App;
