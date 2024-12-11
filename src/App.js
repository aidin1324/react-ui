import Button from "./components/buttton/index.jsx";
import Input from "./components/input/index.jsx";
import Typography from "./components/typography/index.jsx";

function App() {
  return <div style={{ display: "flex", flexDirection: "column" }}>
    <div className="flex">
      <h2>Button component</h2>
    </div>
    <div>
      <Button variant="primary" size="large">large</Button>
      <Button variant="primary">medium</Button>
      <Button size="small" variant="primary">small</Button>
    </div>

    <div>
      <Button variant="bordered" size="large">large</Button>
      <Button variant="bordered">medium</Button>
      <Button size="small" variant="bordered">small</Button>
    </div>
    <div className="flex">
      <h2>Input component</h2>
    </div>
    <div>
      <Input label="Name" type="text" placeholder="Enter your name" />
      <Input label="Number" type="number" placeholder="Enter your phone" />
      <Input danger label="Email" type="email" placeholder="Danger"/>
    </div>
    <div className="flex">
      <h2>Typography</h2>
    </div>
    <div>
      <Typography textSize="sm">
      SM. Our mission is to redefine the model of learning and re-engineer
      its process by providing innovative administrative and instructional
      technologies. Click here for our beliefs. If you are a school
      administrator and would like to use ecourse.org for your classes,
      please create school profiles. Instructors and students may signup
      independent user account. For questions, contact us.
      </Typography>
      <Typography textSize="md">
      SM. Our mission is to redefine the model of learning and re-engineer
      its process by providing innovative administrative and instructional
      technologies. Click here for our beliefs. If you are a school
      administrator and would like to use ecourse.org for your classes,
      please create school profiles. Instructors and students may signup
      independent user account. For questions, contact us.
      </Typography>
      <Typography textSize="lg">
      SM. Our mission is to redefine the model of learning and re-engineer
      its process by providing innovative administrative and instructional
      technologies. Click here for our beliefs. If you are a school
      administrator and would like to use ecourse.org for your classes,
      please create school profiles. Instructors and students may signup
      independent user account. For questions, contact us.
      </Typography>
    </div>
  </div>;
  
}

export default App;