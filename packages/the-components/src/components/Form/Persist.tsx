import { connect, FormikProps } from 'formik';
import { debounce } from 'lodash';
import { FC, useEffect } from 'react';

export interface IPersistProps {
  clearPersist?: boolean;
  debounceNumber?: number;
  isSessionStorage?: boolean;
  name: string;
}

const Persist: FC<IPersistProps & { formik: FormikProps<any> }> = ({
  name,
  clearPersist,
  debounceNumber,
  formik,
  isSessionStorage,
}) => {
  useEffect(() => {
    const persistedState = isSessionStorage
      ? window.sessionStorage.getItem(name)
      : window.localStorage.getItem(name);

    if (persistedState && persistedState !== null) {
      formik.setFormikState(JSON.parse(persistedState));
    }
  }, []);

  useEffect(() => {
    const saveForm = debounce((data: FormikProps<{}>) => {
      if (isSessionStorage) {
        window.sessionStorage.setItem(name, JSON.stringify(data));
      } else {
        window.localStorage.setItem(name, JSON.stringify(data));
      }
    }, debounceNumber);

    saveForm(formik);
  }, [debounceNumber, formik, isSessionStorage, name]);

  useEffect(() => {
    if (clearPersist) {
      if (isSessionStorage) {
        window.sessionStorage.removeItem(name);
      } else {
        window.localStorage.removeItem(name);
      }
    }
  }, [clearPersist]);

  return null;
};

Persist.defaultProps = {
  debounceNumber: 500,
  isSessionStorage: true,
};

export const ConnectedPersist = connect<IPersistProps, any>(Persist);
