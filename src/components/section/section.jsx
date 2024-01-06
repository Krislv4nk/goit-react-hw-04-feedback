
import React from 'react';
import css from './section.module.css';



export const Section = ({ title, children }) => (
  <div>
    <h2 className={css.title}>{title}</h2>
    {children}
  </div>
);