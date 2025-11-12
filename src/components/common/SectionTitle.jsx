import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      {subtitle && <p className="subtitle">{subtitle}</p>}
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;

