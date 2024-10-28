import { useStateApp } from '../context/stateAppContext';
import HolidayOptions from '../features/holiday/HolildayOptions';
import HolidayTable from '../features/holiday/HolidayTable';
import FilterUser from '../features/users/FiltersUser';
import Row from '../ui/Row';
import Search from '../ui/Search';
import { formatText } from '../utils/helpers';
import Heading from './../ui/Heading';

// import Gantt from '../features/holiday/Gantt';

const Holiday = () => {
  const { handleSearch } = useStateApp();

  return (
    <>
      <Row type="vertical">
        <Heading as="h1">Vacaciones</Heading>
        <Row type="horizontal">
          <Search
            width="60%"
            placeholder="Buscar por: nombre | N° Empleado"
            onSetQuery={(query) => handleSearch('holiday', formatText(query))}
            popUpFilter={<FilterUser />}
          />
          <HolidayOptions />
        </Row>
        <HolidayTable />
        {/* <div>
          <Gantt />
        </div> */}
      </Row>
    </>
  );
};

export default Holiday;
