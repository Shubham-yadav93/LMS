// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// const RichTextEditor = ({input, setInput}) => {

//     const handleChange = (content) => {
//         setInput({...input, description:content});
//     }
   
//   return <ReactQuill theme="snow" value={input.description} onChange={handleChange} />;
// }
// export default RichTextEditor

import React, { useState, forwardRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = forwardRef(({ input, setInput }, ref) => {
    const handleChange = (content) => {
        setInput({ ...input, description: content });
    };

    return <ReactQuill ref={ref} theme="snow" value={input.description} onChange={handleChange} />;
});

export default RichTextEditor;
