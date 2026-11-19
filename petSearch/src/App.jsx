//Sam Goldberg
//11/11/26
//Week 4 - Pet Search

import {useState} from 'react';
import PetSearchDashboard from './components/PetSearchDashboard.jsx';
//This build the web page using the petSearchDashboard component that I built
function App () {
  //By default, there is no search value but that value changes and the component is updated with the new state
  //otherwise, the search has no value and no pets show up
  const [search, setSearch] = useState('');
  
  return (
    <>
      {/*Using Tailwind, the input box and table headers are formatted. The text in the input is red and when you click 
      on the textbox, the focus background color becomes green  */}
      <div className="text-center">
        <h3 className="text-xl mb-2"><strong>Pet Search Database</strong></h3>
        <h4 className="mb-2">Pets Available: Dog, Cat, Guinea Pig, Bird</h4>
        <input type="text" placeholder='Find a pet' className="border border-blue-700 rounded-md mb-4 text-red-500 focus:bg-green-100"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          />
      </div>
        {/* This is the table header, without any pet data. It tells us what is going to be in each column. */}
      <div >
        <table className="mx-auto w-300 text-left table-auto text-slate-900">
          <thead>
            <tr className="text-slate-500 border-b border-slate-800 bg-slate-50">
              <th className="px-1 py-2">Name</th>
              <th className="px-1 py-2">Animal</th>
              <th className="px-1 py-2">Specialty</th>
              <th className="px-1 py-2">Photo</th>
            </tr>
          </thead>
          {/* The values pulled in from the filter are injected here, involving the React component I made */}
            <tbody>
              <PetSearchDashboard value={search} />
            </tbody>
        </table>
      </div>
    </>



  )


}

export default App;