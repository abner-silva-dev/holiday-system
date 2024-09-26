import LoginSettings from '../features/settings/LoginSettings';
import SenioritySettings from '../features/settings/SenioritySettings';
// import Draggable from '../ui/Draggable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

const Settings = () => {
  return (
    <>
      <Row type="vertical">
        <Heading as="h1">Configuraciones</Heading>
        {/* <Draggable /> */}
        <LoginSettings />
        <SenioritySettings />
      </Row>
    </>
  );
};

export default Settings;
