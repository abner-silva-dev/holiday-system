import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import FormRow from '../../ui/FormRow';
import styled from 'styled-components';
import Input from '../../ui/Input';
import { useDepartments } from '../departments/useDepartment';
import { useEnterprises } from '../enterprises/useEnterprises';
import { DepartmentInfo } from '../departments/types';
import { EnterpriseInfo } from '../enterprises/types';
import { useStateApp } from '../../context/stateAppContext';

const Filters = styled.div`
  display: flex;
  gap: 2rem;
`;

const FilterUser = () => {
  const { departments } = useDepartments();
  const { enterprises } = useEnterprises();

  const {
    state: { filterDepartment, filterEnterprise },
    handleFilter,
  } = useStateApp();

  return (
    <div>
      <Row>
        <Heading as="h2">Filtrar por </Heading>
        <Filters>
          <FormRow label="Filtrar por departamento">
            <Input
              id="deparment"
              as="select"
              value={filterDepartment}
              onChange={(e) => handleFilter('department', e.target.value)}
            >
              <option value="all">TODAS</option>
              {departments?.map((department: DepartmentInfo) => {
                return (
                  <option value={department._id} key={department._id}>
                    {department.name}
                  </option>
                );
              })}
            </Input>
          </FormRow>
          <FormRow label="Filtrar por empresa">
            <Input
              id="enterprise"
              as="select"
              value={filterEnterprise}
              onChange={(e) => handleFilter('enterprise', e.target.value)}
            >
              <option value="all">TODAS</option>
              {enterprises?.map((enterprise: EnterpriseInfo) => {
                return (
                  <option value={enterprise._id} key={enterprise._id}>
                    {enterprise.name}
                  </option>
                );
              })}
            </Input>
          </FormRow>
        </Filters>
      </Row>
    </div>
  );
};

export default FilterUser;
