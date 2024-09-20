import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import PersonalInfo from './pages/PersonalInfo';
import Plans from './pages/Plans';
import AddOns from './pages/AddOns';
import FinishUp from './pages/FinishUp';
import Thanks from './pages/Thanks';
import { AppProvider } from './hooks/AppContext';


function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Navigate replace to='/user' />} />
            <Route path='user' element={<PersonalInfo />} />
            <Route path='plans' element={<Plans />} />
            <Route path='addons' element={<AddOns />} />
            <Route path='finish' element={<FinishUp />} />
            <Route path='thanks' element={<Thanks />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
