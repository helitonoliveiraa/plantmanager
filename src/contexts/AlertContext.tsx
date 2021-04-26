import React, { createContext, useContext, useState } from 'react';

import { AlertNotification } from '../components/AlertNotification';

type AlertNotificationProps = {
  title: string;
  message?: string;
  isOpen: boolean;
  closeAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

type AlertContextData = {
  alertNotification: (
    alert: Omit<AlertNotificationProps, 'isOpen' | 'closeAlert'>,
  ) => void;
};

const AlertContext = createContext({} as AlertContextData);

type AlertContextProviderProps = {
  children: React.ReactNode;
};

function AlertContextProvider({
  children,
}: AlertContextProviderProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  function alertNotification(
    alert: Omit<AlertNotificationProps, 'isOpen' | 'closeAlert'>,
  ) {
    setTitle(alert.title);
    setMessage(alert.message || '');
    setIsOpen(true);
  }

  function toggleAlert() {
    setIsOpen(prevState => !prevState);
  }

  return (
    <AlertContext.Provider value={{ alertNotification }}>
      {children}

      {isOpen && (
        <AlertNotification
          title={title}
          message={message}
          isOpen={isOpen}
          closeAlert={toggleAlert}
        />
      )}
    </AlertContext.Provider>
  );
}

function useAlert(): AlertContextData {
  const context = useContext(AlertContext);

  return context;
}

export { useAlert, AlertContextProvider };
