//Sam Goldberg
//11/11/26
//Week 4 - Pet Search
import { pets } from './data.js'

//Builds the pet search UI component with filtering and the display of pets based on filter results
export default PetSearchDashboard
function PetSearchDashboard({ value }) {
  //The search filter to find a specific pet by animal type, like dog or cat
  const petList = pets.filter(pet => pet.animal.toLowerCase() === value.toLowerCase());

  //The table of results 
  const rowItems = petList.map(pet =>
    <tr className="text-red-400 hover:bg-green-100 transition-colors" key={pet.id}>
      <td className="px-2">
        {pet.name}
      </td>
      <td className="px-2">
        {pet.animal}
      </td>
      <td className="px-1">
        {pet.specialty}
      </td>
      <td className="px-1">
        <img src={pet.imgurl} alt={pet.name} className="w-20 h-20 object-cover rounded-md"></img>
      </td>
    </tr>
  );
  return rowItems;
  }

