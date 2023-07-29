import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader';
import { useState, useEffect } from 'react';
import Cours from './components/cours/Cours';
import Stages from './components/stages/Stages';
import Galeries from './components/spectacles/Galeries';
import Aulnay from './components/spectacles/Aulnay';
import Contact from './components/contacts/Contact';
import Lieux from './components/contacts/Lieux';
import Professeure from './components/professeure/Professeure';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <div className="loader">
            <BarLoader
              loading={loading}
              size={800}
              width={200}
              color="#008ab3"
              aria-label="Loading Spinner"
              data-testid="loader"
              speedMultiplier={1}
            />
          </div>
        ) : (
          <>
            <div className="animation-apparition">
              <Routes>
                <Route exact path="/" element={<Professeure />} />

                <Route exact path="/cours" element={<Cours />} />

                <Route exact path="/stages" element={<Stages />} />

                <Route exact path="/galeries" element={<Galeries />} />

                <Route exact path="/aulnay" element={<Aulnay />} />

                <Route exact path="/contact" element={<Contact />} />

                <Route exact path="/lieux" element={<Lieux />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
