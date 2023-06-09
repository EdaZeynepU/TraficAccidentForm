import { useFormik } from "formik";
import { Form, FormGroup, Input, Button, Badge } from "reactstrap";

const violations = [
  "Violating a red light",
  "Entering the road with a no-vehicle sign",
  "Entering the road used by oncoming traffic",
  "Crossing in a place with no passing (no overtaking)",
  "Not obeying the passing priority at the intersection",
  "Passing at the stop sign of the authorized officer",
  "When driving in the same direction and in the same lane, hit from behind",
  "Not following the right turn rules",
  "Not following the left turn rules",
  "Failure to comply with reverse maneuvering rules",
  "Not following the passing (overtaking) rules",
  "Failure to comply with pass priority",
  "Failure to comply with parking rules",
  "Failure to abide by the Pause Rules",
  "Crashing into a properly parked vehicle",
];

function Form7() {


  const formik = useFormik({
    initialValues: {
      violationsA: Array(violations.length).fill(false),
      violationsB: Array(violations.length).fill(false),
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

// later...
//   const handleCheckboxChange = (index) => {
//     const { violations } = formik.values;
//     const updatedViolations = [...violations];
//     updatedViolations[index] = !updatedViolations[index];
//     formik.setFieldValue("violations", updatedViolations);
//   };

  return (
    <div>
        <h3>
      <Badge>
        7
      </Badge>Tick the appropriate box
        </h3>
        <div className="ABForm7">
        <span>A</span>
        <span>B</span>
        </div>
      <Form onSubmit={formik.handleSubmit}>
        {violations.map((violation, index) => (
          <FormGroup key={index}>
            <div className="divForm7">
              <Input
                type="checkbox"
                className="a btnForm7"
              />
              
              <p className="pForm7">
              {violation}
              </p><Input
                type="checkbox"
                className="b btnForm7"
              />
            </div>
          </FormGroup>
        ))}
        <div style={{display:"flex",justifyContent:"center"}}>
        <Button color="primary" type="submit" size="lg" style={{width:"450px",margin:"15px 0"}}>
          Submit
        </Button>

        </div>
      </Form>
    </div>
  );
}

export default Form7;
