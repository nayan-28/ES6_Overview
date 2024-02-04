import "./App.css";
import Watch from "./Components/Watch/Watch";

function App() {
  const watches = [
    { id: 1, name: "Apple Watch", price: 200 },
    { id: 2, name: "Samsung Watch", price: 2000 },
    { id: 3, name: "Rolex Watch", price: 20000 },
  ];
  return (
    <>
      <div>
        {watches.map((watch) => (
          <Watch key={watch.id} watch={watch}></Watch>
        ))}
      </div>
    </>
  );
}

export default App;
