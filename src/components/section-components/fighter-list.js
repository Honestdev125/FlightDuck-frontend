import React, { useEffect, useState } from 'react';

import CreatableSelect from 'react-select/creatable';
// import { colourOptions } from '../data';

const Checkbox = ({ children, ...props }) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

export const Fighter_List = (props) => {
  const fighterLists = props.fighterLists;
  const [options, setOptions] = useState([]);

  useEffect(()=>{
    const ops = [];
    fighterLists.map(item=>{
        ops.push({value: item.PlaceId, label: `${item.PlaceName} (${item.PlaceId})`})
    })
    setOptions(ops);
  },[fighterLists]);
  const handleChange = (newValue, actionMeta) => {
    console.log(newValue, actionMeta);
  };
  const handleKeyDown = (event) => {
    console.log(event)
  }
  return (
    <>
      <CreatableSelect 
        isClearable 
        options={options}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};