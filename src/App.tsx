import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import PersonalInfo from './pages/PersonalInfo';
import Plans from './pages/Plans';
import AddOns from './pages/AddOns';
import FinishUp from './pages/FinishUp';
import Thanks from './pages/Thanks';
import { createContext, useState } from 'react';

interface AppContextData {
  isToggled: boolean;
  onHandleToggled: () => void;
  isYearly: boolean;
}

const AppContext = createContext<AppContextData>({
  isToggled: false,
  isYearly: false,
  onHandleToggled: () => {},
});

function App() {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <AppContext.Provider
      value={{
        isToggled: isToggled,
        onHandleToggled: handleToggle,
        isYearly: isToggled,
      }}
    >
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<PersonalInfo />} />
            <Route path='user' element={<PersonalInfo />} />
            <Route path='plans' element={<Plans />} />
            <Route path='addons' element={<AddOns />} />
            <Route path='finish' element={<FinishUp />} />
            <Route path='thanks' element={<Thanks />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export { App, AppContext };
