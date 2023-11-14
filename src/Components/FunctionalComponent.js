import React, { Component } from 'react'

export default function ParentComponent()  {
  const data = "Hello from Parent";
   
   return <ChildComponent data={data} />;
 }
 
function ChildComponent(props) {
  return <div>{props.data}</div>;
}
