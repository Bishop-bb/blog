import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddProduct() {

   const navigate= useNavigate()
    const [product, setProduct] = useState({
        title: '',
        price: '',
        image: [],
        description: '',
        discountPercentage: '',
        brand: '',
        category: '',

    })
    const handleInput = (e)=>{
      let value = e.target.value;
      let name = e.target.name;
      setProduct({
        ...product,
        [name]: value
    })
    }

    function submitData(e){
    e.preventDefault()
    axios.post('https://dummyjson.com/products/add',{
        title: product.title,
        price: product.price,
        images: product.image.split(','),
        description: product.description,
        discountPercentage: product.discountPercentage,
        brand: product.brand,
        category: product.category

    })

    .then(res => {
      // Store the product in the local storage
      let storedProducts = JSON.parse(localStorage.getItem("products")) || [];
      storedProducts.push(res.data);
      localStorage.setItem("products", JSON.stringify(storedProducts));
      navigate("/", { state: { product: res.data } });
    })
    .catch(err => {
      console.error(err);
    });
}
    // .then(res => {
    //     localStorage.setItem('product', JSON.stringify(res.data))
    //     localStorage.getItem('name')
    //   navigate('/')
    // })
    // .catch(err => {
    //     console.error(err); 
    // })
    // }
  return (
    <div style={{textAlign: 'center'}}>
        <fieldset>
        <div>Add Product</div>
        
        <form onSubmit={submitData}>
        <p>
        <label>Brand</label> <br />
        <input type="text" name="brand" onChange={handleInput} />
       </p>
        <p>
        <label>Category</label> <br />
        <input type="text" name="category" onChange={handleInput} />
       </p>
       <p>
        <label>Description</label> <br />
        <input type="text" name="description" onChange={handleInput} />
       </p>
       <p>
        <label>DIscountPercentage</label> <br />
        <input type="text" name="discountPercentage" onChange={handleInput} />
       </p>
       <p>
        <label>Price</label> <br />
        <input type="number" name="price"  step="0.01" onChange={handleInput}/>
       </p>
       <p>
       <label>Image Url</label> <br />
        <input type="url" name="image"  onChange={handleInput}/>
       </p>
       <button type="submit"> Add Product</button>
        </form>
        </fieldset>
    </div>
  )
}

export default AddProduct