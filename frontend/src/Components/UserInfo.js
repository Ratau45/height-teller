import React, { useReducer, useEffect,useState } from "react";
import FormControl from '@mui/material/FormControl';
import { Button, TextField, Paper, Typography } from "@material-ui/core";
import * as Yup from 'yup';
import { Field, useFormik } from "formik";
import { Alert } from 'react-st-modal';

export function UserInformation(props) {
    const [error, setError] = useState(null);

    const [average, setaverage] = React.useState(null);
    const validationSchema = Yup.object().shape({
    
        fullName: Yup.string()
          .required('FullName is required')
          .min(6, 'FullName must be at least 6 characters')
          .max(20, 'FullName must not exceed 20 characters'),
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        height: Yup.string().required('Height is required')
    })




    

   const onSubmit = (values,{resetForm}) => {
     //  values.preventDefault()
    setError(null);
    

    
      //post data
   fetch(" http://localhost:4000/app/", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)),
      Alert("Your Information has been sent! you will recieve an email soon. Thank you"),
      
      fetch(" http://localhost:4000/app/getrd")
          .then((res) => res.json())
          .then((data) => setaverage(data.avera_height),
          console.log(average))
          //Alert("Average Height is : ",data))
          
      , [])
         
      .catch(error => console.error("Error!!!:", error));
      resetForm()
  //get average
     

     
     /* if(values==="")
      {
        
        console.log("error")
      }
      else
      {
          localStorage.setItem('items', JSON.stringify(values));
          console.log("success", JSON.stringify(values))
          Alert("Your Information has been sent! you will recieve an email soon. Thank you")
          resetForm()
      }*/
     

  };

  const formik = useFormik({
    initialValues: { email: "", fullName: "",height:"" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

 

 

  return (
    <div>
      <Paper  align="center">
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={formik.handleSubmit}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <TextField
            required
            label="Name"
            id="margin-normal"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
           
            
          />
           <Typography variant="inherit" color="textSecondary">
           {formik.touched.fullName && formik.errors.fullName
                ? formik.errors.fullName
                : ""}
              </Typography>
            <TextField
            required
            label="Height"
            id="margin-normal"
            name="height"
            value={formik.values.height}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           <Typography variant="inherit" color="textSecondary">
           {formik.touched.height && formik.errors.height
                ? formik.errors.height
                : ""}
              </Typography>
          <TextField
          required
            label="Email"
            id="margin-normal"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           <Typography variant="inherit" color="textSecondary">
           {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
              </Typography>
        
          <Button
            type="submit"
            variant="contained"
            color="primary"
           
            disabled={!formik.isValid}
          
          >
            Send Information 
          </Button>
          </FormControl>
        </form>
      </Paper>
    </div>
  );
}