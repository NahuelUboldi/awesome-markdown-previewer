import React, { useContext } from 'react';
import Editor from './Editor';
import Preview from './Preview';

function Main() {
  return (
    <>
      <div className='row'>
        <div className='col-md-6 p-2 px-md-5'>
          <Editor />
        </div>
        <div className='col-md-6 p-2 px-md-5'>
          <Preview />
        </div>
      </div>
    </>
  );
}

export default Main;
