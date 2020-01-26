import { Box, Form, Input, MultiStep, Select } from '@app/components';
import React from 'react';

type OverviewFormValues = {
  name?: string;
  gradeIds?: string[];
  focusSubjectIds?: string[];
};

type InputsFormValues = {
  budgetedAmount?: number;
  inputs?: object[];
};

const INTERVENTION_OVERVIEW_INITIAL_VALUES: OverviewFormValues = {
  name: '',
  gradeIds: undefined,
  focusSubjectIds: undefined,
};

export const INTERVENTION_INPUTS_INITIAL_VALUES: InputsFormValues = {
  budgetedAmount: undefined,
  inputs: [],
};

const Sandbox: React.FC = () => {
  return (
    <Box padding={2}>
      <Form
        name="sandbox"
        onSubmit={() => null}
        initialValues={{
          stepOverview: { ...INTERVENTION_OVERVIEW_INITIAL_VALUES },
          stepInputs: { ...INTERVENTION_INPUTS_INITIAL_VALUES },
        }}
        persist={true}
      >
        <MultiStep
          steps={[
            {
              name: 'Overview',
              component: (
                <div>
                  <Input label="Name" name="stepOverview.name" />
                  <Select
                    label="Grades"
                    name="stepOverview.gradeIds"
                    options={[
                      { label: '1', value: 'gid_1' },
                      { label: '2', value: 'gid_2' },
                    ]}
                  />
                </div>
              ),
            },
            {
              name: 'Inputs',
              component: (
                <div>
                  <Input
                    inlineStartAdornment
                    label="Budgeted Amount"
                    name="stepInputs.budgetedAmount"
                    type="number"
                    startAdornment="$"
                  />
                </div>
              ),
            },
          ]}
        />
      </Form>
    </Box>
  );
};

export default Sandbox;
