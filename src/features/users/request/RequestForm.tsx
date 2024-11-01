import Heading from '../../../ui/Heading';
import Button from '../../../ui/Button';
import { useState } from 'react';

import FormPersonalData from './FormPersonalData';
import FormPersonalReference from './FormPersonalReference';
import FormClinicInformation from './FormClinicInformation';
import FormComplementaryData from './FormComplementaryData';
import FormJobsData from './FormJobsData';
import FormScholarData from './FormScholarData';
import FormKnowledgeExperience from './FormKnowledgeExperience';
import FormFamiliarData from './FormFamilarData';
import { InitialContainer, Section } from '../../../ui/FormPieces';

const RequestForm = () => {
  const [page, setPage] = useState(0);

  const handleNext = () => setPage((prevPage) => prevPage + 1);
  const handleBack = () => setPage((prevPage) => prevPage - 1);

  return (
    <Section>
      {page === 0 && (
        <InitialContainer>
          <Heading as="h1">Bienvenido</Heading>
          <Heading as="h2">
            Haga clic en continuar para comenzar a llenar la solicitud de empleo
          </Heading>
          <Button $variation="primary" onClick={handleNext}>
            COMENZAR
          </Button>
        </InitialContainer>
      )}
      {page === 1 && <FormPersonalData handleNext={handleNext} />}
      {page === 2 && (
        <FormComplementaryData handleNext={handleNext} handleBack={handleBack} />
      )}
      {page === 3 && <FormJobsData handleNext={handleNext} handleBack={handleBack} />}
      {page === 4 && <FormScholarData handleNext={handleNext} handleBack={handleBack} />}
      {page === 5 && (
        <FormKnowledgeExperience handleNext={handleNext} handleBack={handleBack} />
      )}
      {page === 6 && <FormFamiliarData handleNext={handleNext} handleBack={handleBack} />}{' '}
      {page === 7 && (
        <FormPersonalReference handleNext={handleNext} handleBack={handleBack} />
      )}
      {page === 8 && <FormClinicInformation handleBack={handleBack} />}
    </Section>
  );
};

export default RequestForm;
