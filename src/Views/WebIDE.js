import React, { useState, useEffect, useRef  } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike'

// require('codemirror/mode/htmlmixed/htmlmixed');

const WebIDE = () => {
  const [mode, setMode] = useState('javascript');
  const [code, setCode] = useState('');
  const codemirrorRef = useRef();

  const handleChange = (editor, data, value) => {
    setCode(value);
  };

  useEffect(() => {
    if (codemirrorRef.current) {
      codemirrorRef.current.editor.setSize("100%", "100%");
    }
  }, []);

  return (
    <div className="code-editor-section p-3 flex flex-row w-screen h-screen space-x-4">
      <div className='code-editor-container w-4/6 h-full'>
        <div className='menu-bar flex flex-row items-center justify-left m-2 space-x-2'>
          <div className="">
            <select onChange={(e) => setMode(e.target.value)} className="border p-2 rounded">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="text/x-java">Java</option>
              <option value="text/x-c++src">C++</option>
            </select>
          </div>
          <div className="flex flex-row items-center justify-center space-x-2">
            <button className="border p-2 rounded mr-2 text-white bg-indigo-600 border-indigo-900">Run</button>
            <button className="border p-2 rounded mr-2">Share</button>
            <button className="border p-2 rounded">Save</button>
          </div>
        </div>

        <CodeMirror
          className='w-full h-[80%]'
          ref={codemirrorRef}
          options={{
            lineNumbers: true,
            mode: mode,
            theme: 'material',
          }}

          onChange={handleChange}
        />
      </div>

      <div className='io-container flex flex-col pt-10 w-2/6 h-full'>
        <div className="mt-4 h-1/3 w-full p-2">
          <label className='font-semibold'>Input</label>
          <textarea placeholder="" className="border p-2 rounded h-full w-full"></textarea>
        </div>
        <div className="output mt-4 h-1/3 w-full p-2">
          <label className='font-semibold'>Output</label>
          <div className='compiled-result'>

          </div>
          {/* <textarea placeholder="Output" className="border p-2 rounded h-full w-full"></textarea> */}
        </div>
      </div>
    </div>
  );
};

export default WebIDE;
