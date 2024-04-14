import { useState } from 'react';
import './App.css';

function App() {
  
  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts((prevProducts) => [...prevProducts, { item: inputValue }]);
    setInputValue(""); // Clear the input after submitting
  };

  return (
    <>
      <div>
        <h3>useState in React Hooks</h3>
        <br />
        <form onSubmit={handleSubmit}>
          <input type="text" name="item" value={inputValue} onChange={handleChange}/>
          <button type="submit">submit</button>
        </form>
        <br />
        <label>Product List</label>
        <ul>{products.map((product, index) => (<li key={index}>{product.item}</li>))}</ul>
      </div>
    </>
  );
}

export default App;
