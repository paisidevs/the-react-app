import { useStorage } from '@paisidevs/tra-hooks';
import { connect, FormikProps } from 'formik';
import debounce from 'lodash/debounce';
import { FC, useEffect } from 'react';

export interface IPersistProps {
  clearPersist?: boolean;
  debounceNumber?: number;
  isLocalStorage?: boolean;
  name: string;
}

const Persist: FC<IPersistProps & { formik: FormikProps<any> }> = ({
  name,
  clearPersist,
  debounceNumber,
  formik,
  isLocalStorage,
}) => {
  const [persistedState, setPersistedState, clearPersistedState] = useStorage(
    isLocalStorage ? 'local' : 'session',
    name,
  );

  useEffect(() => {
    if (persistedState) {
      formik.setFormikState(persistedState);
    }
  }, []);

  useEffect(() => {
    const saveForm = debounce(
      (data: FormikProps<{}>) => setPersistedState(data),
      debounceNumber || 300,
    );

    saveForm(formik);
  }, [debounceNumber, formik, isLocalStorage, name]);

  useEffect(() => {
    if (clearPersist) {
      clearPersistedState();
    }
  }, [clearPersist]);

  return null;
};

Persist.defaultProps = {
  isLocalStorage: false,
};

export const ConnectedPersist = connect<IPersistProps, any>(Persist);
