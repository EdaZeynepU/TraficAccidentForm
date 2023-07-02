// import { useState } from "react";
// import { Form, Formik,useFormik } from "formik";
// import { Input, Button, Badge, Label, FormGroup } from "reactstrap";
// import { Row, Col,Alert } from "reactstrap";
// import PropTypes from "prop-types";

// // const MyInput = ({ field, form, ...props }) => {
// //   return <input {...field} {...props} />;
// // };

// const Form1to2 = ({ submitHandler} ) => {
//   // const [time, setTime] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const formValues = useFormik({
//     initialValues: {
//       date:"",
//       time:"",
//       city:"",
//       neighborhood:"",
//       town:"",
//       district:"",
//       street:"",
//       road:"",
//     },
//     onSubmit: (values) => {
//       console.log(values);
//       submitHandler(values);
//     },
//     });
//     const handleChange=(e)=>{
//       formValues.handleChange(e);
//       setIsSubmitted(false);
//    }


//   // useEffect(() => {
//   //   // Get the current time
//   //   const currentTime = new Date().toLocaleTimeString();

//   //   // Set the time state
//   //   setTime(currentTime);
//   // }, []);

//   // const onSubmit = (values) => {
//   //   console.log(values);
//   // };

//   return (
//     <div style={{marginTop:"30px"}}>
      
//       <Formik initialValues={formValues.initialValues} onSubmit={formValues.onSubmit}>
//         <Form>
//             <Row>
//               <h3>
//           <Badge>1</Badge> Date and Time
//         </h3>
//               <Col>
//                 <Input
//                   id="date"
//                   type="date"
//                   name="date"
//                   placeholder="."
//                   style={{marginBottom:"20px"}}
//                   onChange={handleChange}
//                   value={formValues.values.date}
//                 />
//               </Col>
//               <Col>
//                 <Input
//                   id="time"
//                   type="time"
//                   name="time"
//                   placeholder="."
//                   onChange={handleChange}
//                   value={formValues.values.time}
//                 />
//               </Col>
//             </Row>
//              <Row>
//               <h3>
//           <Badge>2</Badge> Accident Location
//         </h3> 
//         <Col>
//         <FormGroup floating>
//         <Input
//                   id="text"
//                   type="text"
//                   name="city"
//                   placeholder="."
//                   onChange={handleChange}
//                   value={formValues.values.city}
//                 />
//                 <Label htmlFor="city">City:
//                 </Label>
//         </FormGroup>
//         </Col> 
//         <Col>
//         <FormGroup floating>
//         <Input
//                   id="text"
//                   type="text"
//                   name="neighborhood"
//                   placeholder="."
//                   onChange={handleChange}
//                   value={formValues.values.neighborhood}
//                 />
//                 <Label htmlFor="neighborhood">Neighborhood:
//                 </Label>
//         </FormGroup>
//         </Col> 
        
//             </Row>
//             <Row>
//         <Col>
//         <FormGroup floating>
//         <Input
//                   id="text"
//                   type="text"
//                   name="town"
//                   placeholder="."
//                   onChange={handleChange}
//                   value={formValues.values.town}
//                 />
//                 <Label htmlFor="town">Town:
//                 </Label>
//         </FormGroup>
//         </Col> 
//         <Col>
//         <FormGroup floating>
//         <Input
//                   id="text"
//                   type="text"
//                   name="district"
//                   placeholder="."
//                   onChange={handleChange}
//                   value={formValues.values.district}
//                 />
//                 <Label htmlFor="district">District:
//                 </Label>
//         </FormGroup>
//         </Col> 
        
//             </Row>
//             <Row>
//         <Col>
//         <FormGroup floating>
//         <Input
//                   id="text"
//                   type="text"
//                   name="street"
//                   placeholder="."
//                   onChange={handleChange}
//                   value={formValues.values.street}
//                 />
//                 <Label htmlFor="street">Street:
//                 </Label>
//         </FormGroup>
//         </Col> 
//         <Col>
//         <FormGroup floating>
//         <Input
//                   id="text"
//                   type="text"
//                   name="road"
//                   placeholder="."
//                   onChange={handleChange}
//                   value={formValues.values.road}
//                 />
//                 <Label htmlFor="road">Road:
//                 </Label>
//         </FormGroup>
//         </Col> 
        
//             </Row>    
//             {isSubmitted? (<Alert color="success">Submitted</Alert>):(<Alert color="warning">You have to Submit this</Alert>)}
//        <Button
//         type="submit"
//           onClick={()=>setIsSubmitted(true)}
//           className="submit4to6"
//           size="lg"
//         >
//           Submit
//         </Button>

     
//         </Form>
//       </Formik>
//     </div>
//   );
// };


// Form1to2.propTypes = {
//   submitHandler: PropTypes.func.isRequired,
// };
// export default Form1to2;



import { useState } from "react";
import { Form, Formik, useFormik } from "formik";
import { Input, Button, Badge, Label, FormGroup } from "reactstrap";
import { Row, Col, Alert } from "reactstrap";
import PropTypes from "prop-types";

const Form1to2 = ({ submitHandler }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formValues = useFormik({
    initialValues: {
      date: "",
      time: "",
      city: "",
      neighborhood: "",
      town: "",
      district: "",
      street: "",
      road: "",
    },
    onSubmit: (values) => {
      console.log(values);
      submitHandler(values);
      setIsSubmitted(true);
    },
  });

  const handleChange = (e) => {
    formValues.handleChange(e);
    setIsSubmitted(false);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <Formik >
        <Form>
          <Row>
            <h3>
              <Badge>1</Badge> Date and Time
            </h3>
            <Col>
              <Input
                id="date"
                type="date"
                name="date"
                placeholder="."
                style={{ marginBottom: "20px" }}
                onChange={handleChange}
                value={formValues.values.date}
              />
            </Col>
            <Col>
              <Input
                id="time"
                type="time"
                name="time"
                placeholder="."
                onChange={handleChange}
                value={formValues.values.time}
              />
            </Col>
          </Row>
          <Row>
            <h3>
              <Badge>2</Badge> Accident Location
            </h3>
            <Col>
              <FormGroup floating>
                <Input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="."
                  onChange={handleChange}
                  value={formValues.values.city}
                />
                <Label htmlFor="city">City:</Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup floating>
                <Input
                  id="neighborhood"
                  type="text"
                  name="neighborhood"
                  placeholder="."
                  onChange={handleChange}
                  value={formValues.values.neighborhood}
                />
                <Label htmlFor="neighborhood">Neighborhood:</Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup floating>
                <Input
                  id="town"
                  type="text"
                  name="town"
                  placeholder="."
                  onChange={handleChange}
                  value={formValues.values.town}
                />
                <Label htmlFor="town">Town:</Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup floating>
                <Input
                  id="district"
                  type="text"
                  name="district"
                  placeholder="."
                  onChange={handleChange}
                  value={formValues.values.district}
                />
                <Label htmlFor="district">District:</Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup floating>
                <Input
                  id="street"
                  type="text"
                  name="street"
                  placeholder="."
                  onChange={handleChange}
                  value={formValues.values.street}
                />
                <Label htmlFor="street">Street:</Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup floating>
                <Input
                  id="road"
                  type="text"
                  name="road"
                  placeholder="."
                  onChange={handleChange}
                  value={formValues.values.road}
                />
                <Label htmlFor="road">Road:</Label>
              </FormGroup>
            </Col>
          </Row>
          {isSubmitted ? (
            <Alert color="success">Submitted</Alert>
          ) : (
            <Alert color="warning">You have to Submit this</Alert>
          )}
          <Button type="submit" className="submit4to6" size="lg">
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

Form1to2.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default Form1to2;
