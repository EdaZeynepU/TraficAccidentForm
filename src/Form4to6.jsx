import { useState } from "react";
import { useFormik } from "formik";
import { Badge, FormGroup, Form, Input, Label, Button, Alert } from "reactstrap";
import PropTypes from "prop-types";

const Form4to6 = ({ driver, submitHandler }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formValues = useFormik({
    initialValues: {
      fullName: "",
      tcId: 1111111111111,
      licenseAndClass: "",
      placeOfReceipt: "",
      adress: "",
      phoneNumber: "",
      email: "",
      chassisNo: 0,
      brandAndModel: "",
      numberPlate: "",
      usage: "",
      insuredsFullName: "",
      insuredsCellPhone: "",
      trIdOrtaxNo: "",
      titleInsCompany: "",
      acidenteNo: "",
      policyNo: "",
      tramerDocNo: "",
      startDateOfPolicy:"",
    },
    onSubmit: (values) => {
      console.log(values);
      submitHandler(values);
    },
  });
 const handleChange=(e)=>{
    formValues.handleChange(e);
    setIsSubmitted(false);
 }

  return (
    <div style={{ marginTop: "30px" }}>
      <h1>Driver {driver}</h1>
      <Form initialValues={formValues.initialValues} onSubmit={formValues.onSubmit}>
        <FormGroup row>
          <h3>
            <Badge>4</Badge> Driver Info
          </h3>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="."
            onChange={handleChange}
          />{" "}
          <Label htmlFor="fullName">Full Name:</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="tcId"
            name="tcId"
            type="number"
            placeholder="."
            onChange={(e) => {
              handleChange(e);
              setIsSubmitted(false);
            }}
            value={formValues.values.tcId}
          />{" "}
          <Label htmlFor="tcId">T.C. ID number:</Label>
        </FormGroup>
        
        
        <FormGroup>
          <Label htmlFor="licenseAndClass">
            {" "}
            Driver{"'"}s License No. And Driver Class:
          </Label>
        <Input
            id="licenseAndClass"
            name="licenseAndClass"
            className="mb-3"
            type="select"
            onChange={handleChange}
            value={formValues.values.licenseAndClass}
        >
          <option>
            M
          </option>
          <option>
            A1
          </option>
          <option>
            A2
          </option>
          <option>
            A
          </option>
          <option>
            B1
          </option>
          <option>
            B
          </option>
          <option>
            C
          </option>
          <option>
            C1
          </option>
          <option>
            D1
          </option>
          <option>
            D
          </option>
          <option>
            BE
          </option>
          <option>
            C1E
          </option>
          <option>
            CE
          </option>
          <option>
            D1E
          </option>
          <option>
            DE
          </option>
          <option>
            F
          </option>
          <option>
            G
          </option>
        </Input>
        </FormGroup>

        <FormGroup floating>
          <Input
            id="placeOfReceipt"
            name="placeOfReceipt"
            type="text"
            placeholder="."
            onChange={handleChange}
            value={formValues.values.placeOfReceipt}
          />
          <Label htmlFor="placeOfReceipt">
            Place of Receipt (province/district):
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="adress"
            name="adress"
            type="text"
            placeholder="."
            onChange={handleChange}
            value={formValues.values.adress}
          />{" "}
          <Label htmlFor="adress">Adress:</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            placeholder="0"
            onChange={handleChange}
            value={formValues.values.phoneNumber}
          />
          <Label htmlFor="phoneNumber">Phone Number:</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="."
            onChange={handleChange}
            value={formValues.values.email}
          />
          <Label htmlFor="email">Email:</Label>
        </FormGroup>
        <h3>
          <Badge>5</Badge> Vehicle Info
        </h3>
        <FormGroup floating>
          <Input
            id="chassisNo"
            name="chassisNo"
            type="number"
            placeholder="."
            onChange={handleChange}
            value={formValues.values.chassisNo}
          />
          <Label htmlFor="chassisNo">Chassis No:</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="brandAndModel"
            name="brandAndModel"
            type="text"
            placeholder="."
            onChange={handleChange}
            value={formValues.values.brandAndModel}
          />
          <Label htmlFor="brandAndModel">Brand and Model:</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="numberPlate"
            name="numberPlate"
            type="number"
            placeholder="."
            onChange={handleChange}
            value={formValues.values.numberPlate}
          />
          <Label htmlFor="numberPlate">Number plate:</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="usage"
            name="usage"
            type="text"
            placeholder="."
            onChange={handleChange}
            value={formValues.values.usage}
          />
          <Label htmlFor="usage">Usage:</Label>
        </FormGroup>
        <FormGroup floating>
          <h3>
            <Badge> 6</Badge> Traffic Insurance Policy Info
          </h3>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="insuredsFullName"
            name="insuredsFullName"
            type="text"
            placeholder="."
            onChange={handleChange}
            value={formValues.values.insuredsFullName}
          />
          <Label htmlFor="insuredsFullName">
            Name and Surname of the Insured:
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="insuredsCellPhone"
            name="insuredsCellPhone"
            type="text"
            placeholder="."
            onChange={handleChange}
            value={formValues.values.insuredsCellPhone}
          />{" "}
          <Label htmlFor="insuredsCellPhone">Insured Cell Phone:</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="trIdOrtaxNo"
            name="trIdOrtaxNo"
            type="number"
            placeholder="."
            onChange={handleChange}
            value={formValues.values.trIdOrtaxNo}
          />
          <Label htmlFor="trIdOrtaxNo">T.R. Identity / Tax No:</Label>
        </FormGroup>
        {""}
        <FormGroup floating>
          <Input
            id="titleInsCompany"
            name="titleInsCompany"
            type="text"
            placeholder="."
            onChange={handleChange}
            value={formValues.values.titleInsCompany}
          />{" "}
          <Label htmlFor="titleInsCompany">Title of Insurance Company:</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="acidenteNo"
            name="acidenteNo"
            type="number"
            placeholder="."
            onChange={handleChange}
            value={formValues.values.acidenteNo}
          />{" "}
          <Label htmlFor="acidenteNo">Acidente No:</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="policyNo"
            name="policyNo"
            placeholder="."
            type="number"
            onChange={handleChange}
            value={formValues.values.policyNo}
          />{" "}
          <Label htmlFor="policyNo">Policy No:</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="tramerDocNo"
            name="tramerDocNo"
            type="number"
            placeholder="."
            onChange={handleChange}
            value={formValues.values.tramerDocNo}
          />
          <Label htmlFor="tramerDocNo">TRAMER Document No:</Label>
        </FormGroup>
        <Label className="dateInput4to6" htmlFor="startDateOfPolicy">
          Starting Date of the Policy:
        </Label>
        <Input
          id="startDateOfPolicy"
          name="startDateOfPolicy"
          type="date"
          className="dateInput4to6"
          onChange={handleChange}
          value={formValues.values.startDateOfPolicy}
        />
        <Label className="dateInput4to6" htmlFor="endDateOfPolicy">
          Ending Date of the Policy:
        </Label>
        <Input
          id="endDateOfPolicy"
          name="endDateOfPolicy"
          type="date"
          className="dateInput4to6"
          onChange={handleChange}
          value={formValues.values.endDateOfPolicy}
        />
        {isSubmitted? (<Alert color="success">Submitted</Alert>):(<Alert color="warning">You have to Submit this</Alert>)}
        <Button
        type="submit"
          onClick={()=>setIsSubmitted(true)}
          className="submit4to6"
          size="lg"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

Form4to6.propTypes = {
  driver: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default Form4to6;
