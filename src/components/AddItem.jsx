import React,{useState} from 'react'

 function AddItem(props) {
    let [productName,setProductName] = useState("");
    let [productPrice,setProductPrice]=useState(0);
  return (
    <form className='row mb-5'>
  <div className="mb-3 col-6" >
    <label htmlFor="inputName" className="form-label">
      Name
    </label>
    <input
      type="text"
      className="form-control"
      id="inputName"
      aria-describedby="emailHelp"
      name="productName"
      onChange={(e)=>{
        setProductName(e.target.value)
      }}
    />
  </div>
  <div className="mb-3 col-6">
    <label htmlFor="inputPrice" className="form-label">
      Price
    </label>
    <input
      type="number"
      className="form-control"
      id="inputPrice"
      name="productPrice"
      onChange={(e)=>{
        setProductPrice(e.target.value)
      }}
      
    />
  </div>
  <button type="submit" className="btn btn-primary"
  onClick={(e)=>{
    e.preventDefault()
    props.addItem(productName,Number(productPrice))
  }}>
    Add
  </button>
</form>


  )
}
export default AddItem;