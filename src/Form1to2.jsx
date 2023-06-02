import { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import { Input, Button, Badge, Label, FormGroup } from "reactstrap";
import { Row, Col } from "reactstrap";

// const MyInput = ({ field, form, ...props }) => {
//   return <input {...field} {...props} />;
// };

const Form1to2 = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Get the current time
    const currentTime = new Date().toLocaleTimeString();

    // Set the time state
    setTime(currentTime);
  }, []);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div style={{marginTop:"30px"}}>
      
      <Formik initialValues={{ time }} onSubmit={onSubmit}>
        <Form>
            <Row>
              <h3>
          <Badge>1</Badge> Date and Time
        </h3>
              <Col>
                <Input
                  type="date"
                  name="sdasd"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </Col>
              <Col>
                <Input
                  type="time"
                  name="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </Col>
            </Row>
            
              <h3>
          <Badge>2</Badge>Accident Location
        </h3>  <Row>
        <Col>
        <FormGroup floating>
        <Input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="."
                />
                <Label htmlFor="city">City:
                </Label>
        </FormGroup>
        </Col> 
        <Col>
        <FormGroup floating>
        <Input
                  type="text"
                  name="neighborhood"
                  id="neighborhood"
                  placeholder="."
                />
                <Label htmlFor="neighborhood">Neighborhood:
                </Label>
        </FormGroup>
        </Col> 
        
            </Row>
            <Row>
        <Col>
        <FormGroup floating>
        <Input
                  type="text"
                  name="town"
                  id="town"
                  placeholder="."
                />
                <Label htmlFor="town">Town:
                </Label>
        </FormGroup>
        </Col> 
        <Col>
        <FormGroup floating>
        <Input
                  type="text"
                  name="district"
                  id="district"
                  placeholder="."
                />
                <Label htmlFor="district">District:
                </Label>
        </FormGroup>
        </Col> 
        
            </Row>
            <Row>
        <Col>
        <FormGroup floating>
        <Input
                  type="text"
                  name="street"
                  id="street"
                  placeholder="."
                />
                <Label htmlFor="street">Street:
                </Label>
        </FormGroup>
        </Col> 
        <Col>
        <FormGroup floating>
        <Input
                  type="text"
                  name="road"
                  id="road"
                  placeholder="."
                />
                <Label htmlFor="road">Road:
                </Label>
        </FormGroup>
        </Col> 
        
            </Row>     <Button type="submit" color="primary">Submit</Button>

     
        </Form>
      </Formik>
    </div>
  );
};

export default Form1to2;
