import Button from "./components/buttton/index.jsx";
import Input from "./components/input/index.jsx";
import Typography from "./components/typography/index.jsx";
import Heading from "./components/heading/index.jsx";
import Accordion from "./components/accordion/index.jsx";
import Tooltip from "./components/tooltip/index.jsx";

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
      <Input label="Name" type="text" value="Ivan Ivanov" placeholder="Enter your name" />
      <Input label="Number" type="number" value="Focus" placeholder="Focus" />
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
  <div className="flex">
    <h2>Heading component</h2>
  </div>
  <div>
    <Heading level={1} className="heading">H1. Heading 1</Heading>
    <Heading level={2} className="heading">H2. Heading 2</Heading>
    <Heading level={3} className="heading">H3. Heading 3</Heading>
    <Heading level={4} className="heading">H4. Heading 4</Heading>
    <Heading level={5} className="heading">H5. Heading 5</Heading>
    <Heading level={6} className="heading">H6. Heading 6</Heading>
  </div>
  
  <div className="flex-column-center">
    <Tooltip text="I am a tooltip">Tooltip Top</Tooltip>
    <Tooltip text="I am a tooltip" position="left">Tooltip Left</Tooltip>
    <Tooltip text="I am a tooltip" position="right">Tooltip Right</Tooltip>
    <Tooltip text="I am a tooltip" position="bottom">Tooltip Bottom</Tooltip>
  </div>
  <div className="flex-column-start">
    <Accordion title="Accordion">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
    </Accordion>
    <Accordion title="Accordion Expanded" defaultOpen>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
    </Accordion>
  </div>
  </div>;
  
}

export default App;