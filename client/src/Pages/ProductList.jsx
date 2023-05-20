import ProductItem from '../Components/Product/ProductItem';
import Button from '../Components/UI/Button';
import classes from "../Modules/ProductList.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const addItem = (sku) => {
    setSelectedItems(prevItems => [...prevItems, sku]);
  };

  const removeItem = (sku) => {
    setSelectedItems(prevItems => prevItems.filter((e) => e !== sku));
  };

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then(response => response.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  const handleMassDelete = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedItems),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setProductList(prevValue => prevValue.filter(e => !(selectedItems.includes(e['SKU']))));
    });
  };

  return (
    <form onSubmit={handleMassDelete}>
      <main>
        <div className={classes['heading']}>
          <strong>Product List</strong>
          <div className={classes['buttons']}>
            <Link to="/add-product"> <Button type="button" variant="success">ADD</Button> </Link>
            <Button type="submit" id="delete-product-btn" variant="danger">MASS DELETE</Button>
          </div>
        </div>

        <div className={classes['product-list']}>
          {productList.map((item) => (
            <ProductItem
              key={item['SKU']}
              onUncheck={removeItem}
              sku={item['SKU']}
              onCheck={addItem}
              name={item['Name']}
              price={item['Price']}
              product={item['Type']}
              value={item['Value']}
            />
          ))}
        </div>
      </main>
      </form>
  );
};

export default ProductList;


