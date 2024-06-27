import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setMessage(data.message);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>This is a web page on react side</h1>
      <p>Hi the message is {message}</p>
    </div>
  );
}

export default App;
