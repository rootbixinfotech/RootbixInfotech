import { useState } from 'react'
import MainPage from './pages/MainPage.jsx'
import NavBar from './components/NavBar.jsx'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Documents from './components/Documents.jsx';
import SAPConsulting from './pages/Services/SAPConsulting.jsx';
import SAPImplementation from './pages/Services/SAPImplementation.jsx';
import SAPDataMigration from './pages/Services/SAPDataMigration.jsx';
import SAPStaffing from './pages/Services/SAPStaffing.jsx';
import SAPEnterprise from './pages/Services/SAPEnterprise.jsx';
import SAPManaged from './pages/Services/SAPManaged.jsx';
import BusinessNetwork from './pages/Modules/BusinessNetwork.jsx';
import EWM from './pages/Modules/EWM.jsx';
import TMS from './pages/Modules/TMS.jsx';
import HANA from './pages/Modules/HANA.jsx';
import Warehouse from './pages/Modules/Warehouse.jsx';
import YardLogistics from './pages/Modules/YardLogistics.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import { PathProvider } from './contexts/PathContext.jsx';
import Careers from './pages/Careers.jsx';
import Trainings from './pages/Trainings.jsx';
import Articles from './pages/Articles.jsx';
import ServicesPage from './pages/ServicesPage.jsx';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <PathProvider>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/docs' element={<Documents />} />
            <Route path='/services'>
              <Route path='sap-consulting' element={<SAPConsulting />} />
              <Route path='sap-implementation' element={<SAPImplementation />} />
              <Route path='sap-data-migration' element={<SAPDataMigration />} />
              <Route path='sap-staffing' element={<SAPStaffing />} />
              <Route path='sap-enterprise' element={<SAPEnterprise />} />
              <Route path='sap-managed' element={<SAPManaged />} />
              <Route path='business-network' element={<BusinessNetwork />} />
              <Route path='ewm' element={<EWM />} />
              <Route path='tms' element={<TMS />} />
              <Route path='hana' element={<HANA />} />
              <Route path='warehouse' element={<Warehouse />} />
              <Route path='yard-logistics' element={<YardLogistics />} />
            </Route>
            <Route path='/privacy-policy' element={<Privacy />} />
            <Route path='/terms-and-conditions' element={<Terms />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/trainings' element={<Trainings />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/servicepage' element={<ServicesPage />} />
            
          </Routes>
        </PathProvider>
      </Router>
    </>
  )
}

export default App
