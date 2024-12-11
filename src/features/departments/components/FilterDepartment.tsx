import Heading from '../../../shared/ui/Heading';
import Row from '../../../shared/ui/Row';
import FormRow from '../../../shared/ui/FormRow';
import styled from 'styled-components';
import Input from '../../../shared/ui/Input';
import { useDepartments } from '../hooks/useDepartment';

const Filters = styled.div`
  display: flex;
  gap: 2rem;
`;

const FilterUser = () => {
  const { departments } = useDepartments();
  console.log(departments);

  return (
    <div>
      <Row>
        <Heading as="h2">Filtrar por </Heading>
        <Filters>
          <FormRow label="Filtrar por departamento">
            <Input id="deparment" as="select">
              <option value="Ventas">Ventas y comercio</option>
            </Input>
          </FormRow>
          <FormRow label="Filtrar por empresa">
            <Input id="enterprise" as="select">
              <option value="Ventas">DAI</option>
            </Input>
          </FormRow>
        </Filters>
      </Row>
    </div>
  );
};

export default FilterUser;
