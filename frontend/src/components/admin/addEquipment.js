import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import React from 'react'

const AddEquipment = () => {
  return (
    <div class="container"> 
        
    <div class="card">

        <div class="row">

            <div class="col-md">
                <div class="img-back"></div>
                 <img src="" alt=""/> 
            </div>

            <div class="col-md">
                <div class="card-body my-card-body">
                    <p class="h3">Upload Equipment</p>
                    <p class="text-muted">Add Equipment</p>

                    <hr/>
                    <Formik initialValues={ videoform } onSubmit={equipmentSubmit}>
                    {({values, handleSubmit, handleChange}) =>(
                        <form onSubmit={handleSubmit}>

                        {/* <div class="form-floating">
                           <input id="email" type="email" class="form-control" placeholder="Email"/>

                           <label for="email">Email</label>
                       </div>  */}
                       
                       <TextField color="secondary" className="w-100 mt-5" variant="filled" id="title" type="text" label="Video Ttile" onChange={handleChange} value={values.tags}/>



                       <TextField className="w-100 mt-3" variant="filled" id="description" type="text" label="Description" onChange={handleChange} value={values.description}/>
                        <label className="mt-5">Upload Thumbnail</label>
                       <input type="file" className="form-control " onChange={uploadThumbnail}/>

                       <TextField className="w-100 mt-3" variant="filled" id="description" type="text" label="Description" onChange={handleChange} value={values.description}/>



                       <Button type= "submit" color="primary" variant="contained" className="mt-5 w-35">Add Equipment</Button>

                       <a href="" class="text-muted mt-5" >Already have an account?</a>

                   </form>

                    )}

                    </Formik>



                </div>


            </div>

        </div>


    </div>

</div>
  )
}

export default AddEquipment;