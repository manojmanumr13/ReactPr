import React from 'react';

function DynamicRenderingExample({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome, user!</p> : <p>Please log in.</p>}
    </div>
  );
}

export default DynamicRenderingExample;
