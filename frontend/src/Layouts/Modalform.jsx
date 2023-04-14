import React from 'react'
import { useState } from 'react'

const Modalform = () => {

  const [form, setForm] = useState({
    productname:"", 
    description:"",
    cata:"",
    price:""
  })
  const handleChange = (e) => {
    // console.log(e.target.name);
    // name = e.target.name;
    // value = e.target.value;
    // console.log(e.target.value);

    setForm({ ...form, [e.target.name]: e.target.value });

}

  const handlesubmit = () => {
    console.log(form);
  }
  return (
    <>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Products</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="" onSubmit={handlesubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6 pb-2">
                    <label htmlFor="inputEmail4">Product Name</label>
                    <input type="text" className="form-control" id="inputEmail4" name='productname' value={form.productname} onChange={handleChange}/>
                  </div>
                  <div className="form-group col-md-6 pb-3">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='description' onChange={handleChange}></textarea>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4 pb-3">
                    <label htmlFor="inputState" >Catagory </label>
                    <select id="inputState" className="form-control" name='cata' onChange={handleChange}>
                      <option defaultValue={0}>Select Catagory</option>
                      <option>Electronics</option>
                      <option>clothes</option>
                      <option>Mobiles</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2 pb-3">
                    <label htmlFor="inputZip">Price</label>
                    <input type="number" className="form-control" id="inputPrice" name='price' onChange={handleChange}/>
                  </div>
                  <div>
                    {/* <div className="form-group col-md-6 pb-3">
                      <label htmlFor="inputZip">Image Upload</label>
                      <input type="file" className="form-control" id="inputPrice" />
                    </div> */}
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" onClick={() => handlesubmit()}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modalform
