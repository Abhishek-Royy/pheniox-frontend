import React from 'react';


function Notfound() {
  return (
    <>
      <div id='oopss'>
        <div id='error-text'>
          <img
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
            alt="404"
          />
          <span>404 PAGE</span>
          <p className="p-a">
            The page you were looking for could not be found.
          </p>
          <a href='/' className="back">... Back to previous page</a>
        </div>
      </div>
    </>
  );
}

export default Notfound;
