import React from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";

function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white font-["satoshi_variable"]'>
      <Navbar />
      <Work />
    </div>
  );
}

export default App;
