import { useReducer } from 'react';

interface planDetailsProps {
  desc: string;
  price: number;
  duration: 'Yearly' | 'Monthly';
}

interface stateType {
  isToggled: boolean;
  isOnlineServiceChecked: boolean;
  isLargerStorageChecked: boolean;
  isCustomizableProfileChecked: boolean;
  name: string;
  email: string;
  tel: string;
  nameError: string;
  emailError: string;
  telError: string;
  planDetails: planDetailsProps;
  addOnDetails: { title: string; price: number }[];
}

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
      payload: planDetailsProps;
    };

const initialState: stateType = {
  isToggled: false,
  isOnlineServiceChecked: false,
  isLargerStorageChecked: false,
  isCustomizableProfileChecked: false,
  name: '',
  email: '',
  tel: '',
  nameError: '',
  emailError: '',
  telError: '',
  planDetails: { desc: 'Arcade', price: 9, duration: 'Monthly' },
  addOnDetails: [],
};

const reducer = (state: stateType, action: actionType): stateType => {
  switch (action.type) {
    case 'displayNameErrorMessage':
      return {
        ...state,
        nameError: action.payload,
      };

    case 'displayEmailErrorMessage':
      return {
        ...state,
        emailError: action.payload,
      };

    case 'displayTelErrorMessage':
      return {
        ...state,
        telError: action.payload,
      };

    case 'toggle': {
      const newPrice = !state.isToggled
        ? state.planDetails.desc === 'Arcade'
          ? 90
          : state.planDetails.desc === 'Advanced'
          ? 120
          : state.planDetails.desc === 'Pro'
          ? 150
          : 0
        : state.planDetails.desc === 'Arcade'
        ? 9
        : state.planDetails.desc === 'Advanced'
        ? 12
        : state.planDetails.desc === 'Pro'
        ? 15
        : 0;

      const updatedPlanDetails = {
        ...state.planDetails,
        duration: !state.isToggled
          ? 'Yearly'
          : ('Monthly' as 'Yearly' | 'Monthly'),
        price: newPrice,
      };

      const updatedAddOnDetails = state.addOnDetails.map((addOn) => {
        const newAddOnPrice =
          addOn.title === 'Online service'
            ? !state.isToggled
              ? 10
              : 1
            : addOn.title === 'Larger storage'
            ? !state.isToggled
              ? 20
              : 2
            : addOn.title === 'Customizable Profile'
            ? !state.isToggled
              ? 20
              : 2
            : addOn.price;
        return { ...addOn, price: newAddOnPrice };
      });

      return {
        ...state,
        isToggled: !state.isToggled,
        planDetails: updatedPlanDetails,
        addOnDetails: updatedAddOnDetails,
      };
    }

    case 'onlineServiceToggle': {
      const newArrOnline = [action.payload];

      return {
        ...state,
        isOnlineServiceChecked: !state.isOnlineServiceChecked,
        addOnDetails: !state.isOnlineServiceChecked
          ? [...state.addOnDetails, ...newArrOnline]
          : [...state.addOnDetails.filter((a) => a.title !== 'Online service')],
      };
    }

    case 'largerStorageToggle': {
      const newArrLarger = [action.payload];
      return {
        ...state,
        isLargerStorageChecked: !state.isLargerStorageChecked,
        addOnDetails: !state.isLargerStorageChecked
          ? [...state.addOnDetails, ...newArrLarger]
          : [
              ...state.addOnDetails.filter(
                (addOn) => addOn.title !== 'Larger storage',
              ),
            ],
      };
    }

    case 'customizableProfileToggle': {
      const newArrCustomize = [action.payload];
      return {
        ...state,
        isCustomizableProfileChecked: !state.isCustomizableProfileChecked,
        addOnDetails: !state.isCustomizableProfileChecked
          ? [...state.addOnDetails, ...newArrCustomize]
          : [
              ...state.addOnDetails.filter(
                (addOn) => addOn.title !== 'Customizable Profile',
              ),
            ],
      };
    }

    case 'inputName':
      return {
        ...state,
        name: action.payload,
      };

    case 'inputEmail':
      return { ...state, email: action.payload };

    case 'inputTel':
      return { ...state, tel: action.payload };

    case 'planDetails':
      console.log('planDetails action payload:', action.payload);
      return {
        ...state,
        planDetails: action.payload,
      };

    default:
      throw new Error(`Invalid action`);
  }
};

function useMyReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    ...state,
    dispatch,
  };
}

export default useMyReducer;
