import React, { useContext, useState } from 'react';
import { Mycontext } from '../Context/Context';

import { Button, Card, Form, Modal } from 'react-bootstrap';

function ProductList() {
  const { Products, setProducts } = useContext(Mycontext);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    Id: '',
    Name: '',
    Images: '',
    Price: 0,
  });
  const [editProductId, setEditProductId] = useState(null);

  const handleShowAddForm = () => {
    setShowAddForm(true);
    setEditProductId(null);
    setNewProduct({
      Id: '',
      Name: '',
      Images: '',
      Price: 0,
    });
  };

  const handleCloseAddForm = () => setShowAddForm(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {

    if (!newProduct.Name || !newProduct.Images || !newProduct.Price) {
      window.alert("Please fill in all required fields.");
      return; // Exit the function if any required field is empty
    }
  
    if (editProductId !== null) {
      // Editing existing product
      const updatedProducts = Products.map((product) =>
        product.Id === editProductId ? { ...product, ...newProduct } : product
      );

      setProducts(updatedProducts);
      setEditProductId(null);
    } else {
      // Adding a new product
      const newProductId = Math.floor(Math.random() * 1000000).toString();

      const newProductData = {
        ...newProduct,
        Id: newProductId,
      };

      setProducts((prevProducts) => [...prevProducts, newProductData]);
    }

    setNewProduct({
      Id: '',
      Name: '',
      Images: '',
      Price: 0,
    });
    handleCloseAddForm();
  };

  const handleRemoveProduct = (productId) => {
    const updatedProducts = Products.filter((product) => product.Id !== productId);

    setProducts(updatedProducts);
    setEditProductId(null);
  };

  const handleEditProduct = (productId) => {
    setEditProductId(productId);

    const productToEdit = Products.find((product) => product.Id === productId);

    setNewProduct({
      Id: productToEdit.Id,
      Name: productToEdit.Name,
      Images: productToEdit.Images,
      Price: productToEdit.Price,
    });

    setShowAddForm(true);
  };

  return (
    <div>
      <Button onClick={handleShowAddForm}>Add Product</Button>
      <div className="Mobile-container">
        {Products.map((product) => (
          <div className="Home" key={product.Id}>
            <Card style={{ width: '18rem' }} className="Mobile-card">
              <Card.Img variant="top" src={product.Images} className="Mobile-cardimg" />
              <h5>{product.Name}</h5>
              <h4>₹ {product.Price.toLocaleString('en-IN')}</h4>
            </Card>
            <Button className='ms-5' variant="danger" onClick={() => handleRemoveProduct(product.Id)}>
              Remove
            </Button>
            <Button className='ms-4' variant="danger" onClick={() => handleEditProduct(product.Id)}>
              Edit
            </Button>
          </div>
        ))}
      </div>
      <Modal show={showAddForm} onHide={handleCloseAddForm}>
        <Modal.Header closeButton>
          <Modal.Title>{editProductId !== null ? 'Edit Product' : 'Add Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                name="Name"
                value={newProduct.Name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="productImages">
              <Form.Label>Product Images</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                name="Images"
                value={newProduct.Images}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="productPrice">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                name="Price"
                value={newProduct.Price}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddForm}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProduct}>
            {editProductId !== null ? 'Save Changes' : 'Add Product'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductList;
