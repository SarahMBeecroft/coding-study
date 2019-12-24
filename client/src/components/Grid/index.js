import React from 'react';

// Container component allows use of Bootstrap container without worrying about class names
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>;
}

// Row component allows use of Bootstrap row without having to consider class names
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? '-fluid' : ''}`}>{children}</div>;
}

// Column component allows sizing of Bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div 
      className={size
        .split(' ')
        .map(size => 'col-' + size)
        .join(' ')}
    >
      {children}
    </div>
  );
}
