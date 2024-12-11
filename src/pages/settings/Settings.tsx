import LoginSettings from '../../features/settings/components/LoginSettings';
import SenioritySettings from '../../features/settings/components/SenioritySettings';
// import Draggable from '../ui/Draggable';
import Heading from '../../shared/ui/Heading';
import Row from '../../shared/ui/Row';

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
