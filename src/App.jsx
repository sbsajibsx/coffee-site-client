import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const allCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(allCoffees);
  console.log(coffees);
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl text-purple-600 text-center">All Coffees</h1>
      <div className="md:grid grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
