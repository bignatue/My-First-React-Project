import React, { Component } from 'react';

const Hr = ({ color }) => (
  <hr
      style={{
          color: color,
          borderColor: rgba(0,0,0,.1),
          height: 1
      }}
  />
);

export default Hr;