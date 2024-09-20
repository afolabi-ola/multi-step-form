import React, { createContext, ReactNode } from 'react';
import useMyReducer from './useMyReducer';

type actionType =
  | { type: 'displayNameErrorMessage'; payload: string }
  | { type: 'displayEmailErrorMessage'; payload: string }
  | { type: 'displayTelErrorMessage'; payload: string }
  | { type: 'toggle' }
  | { type: 'onlineServiceToggle'; payload: { title: string; price: number } }
  | { type: 'largerStorageToggle'; payload: { title: string; price: number } }
  | {
      type: 'customizableProfileToggle';
      payload: { title: string; price: number };
    }
  | { type: 'inputName'; payload: string }
  | { type: 'inputEmail'; payload: string }
  | { type: 'inputTel'; payload: string }
  | {
      type: 'planDetails';
      payload: { desc: string; price: number; duration: 'Yearly' | 'Monthly' };
    };

interface AppContextData {
  isToggled: boolean;
  isYearly: boolean;
  isOnlineServiceChecked: boolean;
  isLargerStorageChecked: boolean;
  isCustomizableProfileChecked: boolean;
  name: string;
  email: string;
  tel: string;
  nameError: string;
  emailError: string;
  telError: string;
  dispatch: React.Dispatch<actionType>;
  planDetails: { desc: string; price: number; duration: 'Yearly' | 'Monthly' };
  addOnDetails: { title: string; price: number }[];
}

const AppContext = createContext<AppContextData>({
  isToggled: false,
  isYearly: false,
  isOnlineServiceChecked: false,
  isLargerStorageChecked: false,
  isCustomizableProfileChecked: false,
  name: '',
  email: '',
  tel: '',
  nameError: '',
  emailError: '',
  telError: '',
  dispatch: () => {},
  planDetails: { desc: '', price: 9, duration: 'Monthly' },
  addOnDetails: [],
});
function AppProvider({ children }: { children: ReactNode }) {
  const {
    isToggled,
    isOnlineServiceChecked,
    isLargerStorageChecked,
    isCustomizableProfileChecked,
    name,
    email,
    tel,
    nameError,
    emailError,
    telError,
    dispatch,
    planDetails,
    addOnDetails,
  } = useMyReducer();

  return (
    <AppContext.Provider
      value={{
        isToggled,
        isYearly: isToggled,
        isOnlineServiceChecked,
        isLargerStorageChecked,
        isCustomizableProfileChecked,
        name,
        email,
        tel,
        nameError,
        emailError,
        telError,
        dispatch,
        planDetails,
        addOnDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
