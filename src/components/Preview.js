import React, { useContext } from 'react';
import { PropContext } from '../App';
import CompHeader from './CompHeader';

const marked = require('marked');
marked.setOptions({
  breaks: true,
});
const markupHtml = (text) => {
  const html = marked(`${text}`);
  return { __html: `${html}` };
};

function Preview() {
  const { text } = useContext(PropContext);
  return (
    <>
      <CompHeader title='output' />
      <div
        id='preview'
        className='pb-5'
        dangerouslySetInnerHTML={markupHtml(text)}
        style={{
          overflow: 'hidden',
          // border: 'solid 1px #999',
          padding: '1rem',
          borderRadius: '0.25rem',
          boxShadow:
            'inset 2px 2px 8px rgba(55, 94, 148, 0.3), inset -3px -2px 5px rgba(255, 255, 255, 0.8)',
        }}
      ></div>
    </>
  );
}

export default Preview;
