import React, { useContext } from 'react';
import { PropContext } from '../App';
import CompHeader from './CompHeader';
function Editor() {
  const { text, setText } = useContext(PropContext);
  console.log(text, setText);
  return (
    <>
      <CompHeader title='input' />
      <form>
        <fieldset>
          <div class='form-group'>
            <textarea
              class='form-control'
              id='editor'
              rows='15'
              spellcheck='false'
              onChange={(e) => setText(e.target.value)}
              style={{ height: 'auto' }}
            >
              {text}
            </textarea>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default Editor;
