// Higher Order Component (HOC) - Render other component
// benifits:
// Reuse code
// Render hijacking(劫持)
// Props manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = WrapperComponent => props => (
  <div>
    {
      props.isAdmin && <p>This is private info</p>
    }
    <WrapperComponent {...props} />
  </div>
);

const requireAuthentication = WrapperComponent => props => (
  <div>
    {
      props.isAuthnticated? <WrapperComponent {...props} />: <p>Please login to see the info!!</p>
    }
  </div>
);

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details"/>, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthnticated={true} info="There are the details"/>, document.getElementById("app"));


