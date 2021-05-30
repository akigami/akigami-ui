import React from 'react';
import PropTypes from 'prop-types';

import { Base, Label, Help } from './FormItem.styles';

export function FormItem({
  id,
  label,
  help,
  error,
  Control,
  controlProps = {},
  ...props
}) {
  return (
    <Base {...props}>
      {label && (
        <Label htmlFor={id} error={error}>
          {label}
        </Label>
      )}
      <Control
        {...controlProps}
        id={id}
        view={error ? 'danger' : controlProps && controlProps.view}
      />
      {(error || help) && <Help error={error}>{error || help}</Help>}
    </Base>
  );
}

function DefaultControl(props = {}) {
  return (
    <React.Fragment>
      <p>Control not found</p>
      <pre style={{ width: '100%', whiteSpace: 'pre-line' }}>
        {JSON.stringify(props, null, 2)}
      </pre>
    </React.Fragment>
  );
}

FormItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  help: PropTypes.string,
  error: PropTypes.string,
  Control: PropTypes.elementType.isRequired,
  controlProps: PropTypes.objectOf(Object),
};

FormItem.defaultProps = {
  label: null,
  help: null,
  error: null,
  controlProps: {},
  Control: DefaultControl,
};
