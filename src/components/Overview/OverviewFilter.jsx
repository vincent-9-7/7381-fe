import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import './OverviewFilter.scss';


function OverviewFilter() {
  const objectArray = [
    { key: "Processed products", cat: "Group 1" },
    { key: "B-grade products", cat: "Group 1" }];

  const objectArray1 = [
    { key: "Free Delivery", cat: "Group 1" },
    { key: "On Sale", cat: "Group 1" }];

  const objectArray2 = [
    { key: "Australia", cat: "Group 1" },
    { key: "Queensland", cat: "Group 1" }];

  return (
    <>
      <Multiselect
        options={objectArray}
        displayValue="key"
        singleSelect
        placeholder='Condition'

      />
      <hr />
      <Multiselect
        options={objectArray1}
        displayValue="key"
        singleSelect
        placeholder='Special offers'
        showCheckbox='false'
      />
      <hr />

      <Multiselect
        options={objectArray2}
        displayValue="key"
        singleSelect
        placeholder='Location'
      />
      <hr />


    </>
  );
}

export default OverviewFilter;