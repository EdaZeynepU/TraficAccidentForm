// import React from 'react';
import { useFormik } from "formik";
import { Badge, FormGroup,Form,  Input, Label, Button } from "reactstrap";

const Form4to6 = (info) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      tcId: 0,
      licenseAndClass: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div style={{marginTop:"30px"}}>
      <h1>Driver {info.driver}</h1>
    <Form onSubmit={formik.handleSubmit}>
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
          onChange={formik.handleChange}
          value={formik.values.fullName}
        />        <Label htmlFor="fullName">Full Name:</Label>
        </FormGroup>
      <FormGroup floating>

        <Input
          id="tcId"
          name="tcId"
          type="number"
          maxLength={11}
          placeholder="."
          onChange={formik.handleChange}
          value={formik.values.tcId}
        />        <Label htmlFor="tcId">T.C. ID number:</Label>
        </FormGroup>
      <FormGroup floating>
        <Input
          id="licenseAndClass"
          name="licenseAndClass"
          type="text"
          placeholder="."
          onChange={formik.handleChange}
          value={formik.values.licenseAndClass}
        />
        <Label htmlFor="licenseAndClass"> Driver{"'"}s License No. And Driver Class:</Label></FormGroup>
      <FormGroup floating>
        
        <Input
          id="placeOfReceipt"
          name="placeOfReceipt"
          type="text"
          placeholder="."
          onChange={formik.handleChange}
          value={formik.values.placeOfReceipt}
        /><Label htmlFor="placeOfReceipt">
          Place of Receipt (province/district):
        </Label></FormGroup>
      <FormGroup floating>
     
        <Input
          id="adress"
          name="adress"
          type="text"
          placeholder="."
          onChange={formik.handleChange}
          value={formik.values.adress}
        />   <Label htmlFor="adress">Adress:</Label></FormGroup>
        <FormGroup floating>
        
        <Input
          id="phoneNumber"
          name="phoneNumber"
          type="number"
          placeholder="."
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        /><Label htmlFor="phoneNumber">Phone Number:</Label>
        </FormGroup>
      <FormGroup floating>

        <Input
          id="email"
          name="email"
          type="email"
          placeholder="."
          onChange={formik.handleChange}
          value={formik.values.email}
        /><Label htmlFor="email">Email:</Label>
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
          onChange={formik.handleChange}
          value={formik.values.chassisNo}
        />
        <Label htmlFor="chassisNo">Chassis No:</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          id="brandAndModel"
          name="brandAndModel"
          type="text"
          placeholder="."
          onChange={formik.handleChange}
          value={formik.values.brandAndModel}
        />
        <Label htmlFor="brandAndModel">Brand and Model:</Label>
        </FormGroup>
      <FormGroup floating>
        <Input
          id="numberPlate"
          name="numberPlate"
          type="number"
          placeholder="."
          onChange={formik.handleChange}
          value={formik.values.numberPlate}
        />
        <Label htmlFor="numberPlate">Number plate:</Label>
        </FormGroup>
      <FormGroup floating>
        <Input
          id="usage"
          name="usage"
          type="text"
          placeholder="."
          onChange={formik.handleChange}
          value={formik.values.usage}
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
          onChange={formik.handleChange}
          value={formik.values.insuredsFullName}
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
          onChange={formik.handleChange}
          value={formik.values.insuredsCellPhone}
        />        <Label htmlFor="insuredsCellPhone">Insured Cell Phone:</Label>
        </FormGroup>
      <FormGroup floating>
        
        <Input
          id="trIdOrtaxNo"
          name="trIdOrtaxNo"
          type="number"
          placeholder="."
          onChange={formik.handleChange}
          value={formik.values.trIdOrtaxNo}
        /><Label htmlFor="trIdOrtaxNo">T.R. Identity / Tax No:</Label>
</FormGroup>
{''}
      <FormGroup floating>
       
        <Input
          id="titleInsCompany"
          name="titleInsCompany"
          type="text"
          placeholder="."
          onChange={formik.handleChange}
          value={formik.values.titleInsCompany}
        /> <Label htmlFor="titleInsCompany">Title of Insurance Company:</Label>
        </FormGroup>
      <FormGroup floating>
       
        <Input
          id="acidenteNo"
          name="acidenteNo"
          type="number"
          placeholder="."
          onChange={formik.handleChange}
          value={formik.values.acidenteNo}
        /> <Label htmlFor="acidenteNo">Acidente No:</Label>
        </FormGroup>
      <FormGroup floating>
       
        <Input
          id="policyNo"
          name="policyNo"
          placeholder="."
          type="number"
          onChange={formik.handleChange}
          value={formik.values.policyNo}
        /> <Label htmlFor="policyNo">Policy No:</Label>
        </FormGroup>
        {' '}
      <FormGroup floating>
        
        <Input
          id="tramerDocNo"
          name="tramerDocNo"
          type="number"
          placeholder="."
          onChange={formik.handleChange}
          value={formik.values.tramerDocNo}
        /><Label htmlFor="tramerDocNo">TRAMER Document No:</Label>
        </FormGroup>
        <Label className="dateInput4to6" htmlFor="startDateOfPolicy">Starting Date of the Policy:</Label>
        <Input
          id="startDateOfPolicy"
          name="startDateOfPolicy"
          type="date"
          className="dateInput4to6"
          onChange={formik.handleChange}
          value={formik.values.startDateOfPolicy}
        />
        <Label className="dateInput4to6" htmlFor="endDateOfPolicy">Ending Date of the Policy:</Label>
        <Input
          id="endDateOfPolicy"
          name="endDateOfPolicy"
          type="date"
          className="dateInput4to6"
          onChange={formik.handleChange}
          value={formik.values.endDateOfPolicy}
        />
     <Button className="submit4to6" color="primary" size="lg">
       Submit
     </Button>
    </Form>
    
    
 </div>
  );
};
export default Form4to6;
