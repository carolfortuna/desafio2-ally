
import useRequestData from "./hooks/useRequestData";

import Header from "./components/Header/Header"
import Form from "./components/Form/Form";


function App() {
  
  const baseUrl = "https://amazon-api.sellead.com"
  const country = useRequestData([], `${baseUrl}/country`)
  const city = useRequestData([], `${baseUrl}/city`)
  
  return (
    <div>
      <Header/>
      <Form
        country = {country}
        city = {city}
      />
      
  </div>
  
  );
}

export default App;
