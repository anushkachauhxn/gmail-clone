import React from 'react';
import './EmailListSection.css';

function EmailListSection({ Icon, title, color, selected }) {
  return (
    <div 
      className={`emailListSection ${selected && "emailListSection--selected"}`} 
      style={{'--color': color}}
    >
      {Icon}
      <h4>{title}</h4>
    </div>
  );
}

export default EmailListSection;
