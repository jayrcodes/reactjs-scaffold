import React from 'react';
import './hasContentWrapper.sass';

export default ({ title }) => (WrappedComponent) => {
  const hasContentWrapper = ({ ...props }) => (
    <div className="content-wrapper">
      <section>
        <div>
          <h1 className="content-title">{title}</h1>
        </div>
        <div>
          <p>Some content</p>
        </div>
      </section>
      <WrappedComponent {...props} />
    </div>
  );

  return hasContentWrapper;
};
