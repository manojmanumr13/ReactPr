import React from 'react'

export default function DefaultPropsExa(props) {
  return (
    <div>
        <h1>my name is {props.name} and i am stuying at {props.college} </h1>

    </div>
  )
}

DefaultPropsExa.defaultProps={college:"SKCET"}