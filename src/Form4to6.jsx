// import React from 'react';
import { useFormik } from 'formik';
import { Badge } from "reactstrap";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      tcId: null,
      licenseAndClass: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='app'>
        <h3><Badge>
      4
    </Badge>{' '} Driver Info
      </h3>
      <label htmlFor="fullName">Full Name</label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fullName}
      />
      <label htmlFor="tcId">T.C. ID number</label>
      <input
        id="tcId"
        name="tcId"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.tcId}
      />
      <label htmlFor="licenseAndClass">Driver{"'"}s License No. And Driver Class:</label>
      <input
        id="licenseAndClass"
        name="licenseAndClass"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.licenseAndClass}
      />
      <label htmlFor="placeOfReceipt">Place of Receipt (province/district):</label>
      <input
        id="placeOfReceipt"
        name="placeOfReceipt"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.placeOfReceipt}
      />
      <label htmlFor="adress">Adress:</label>
      <input
        id="adress"
        name="adress"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.adress}
      />
      <label htmlFor="phoneNumber"></label>
      <input
        id="phoneNumber"
        name="phoneNumber"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <h3><Badge>
      5
    </Badge>{' '} Vehicle Info
      </h3>
      <label htmlFor="insuredsFullName">Name and Surname of the Insured:</label>
      <input
        id="insuredsFullName"
        name="insuredsFullName"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.insuredsFullName}
      />
      <label htmlFor="insuredsCellPhone">Insured Cell Phone:</label>
      <input
        id="insuredsCellPhone"
        name="insuredsCellPhone"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.insuredsCellPhone}
      />
      <label htmlFor="aaa"></label>
      <input
        id="aaa"
        name="aaa"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.aaa}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;