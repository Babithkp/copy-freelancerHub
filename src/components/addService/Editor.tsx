"use client"
// components/custom-editor.js

import React, { useEffect, useState } from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


function Editor({ initialData,getValue}:any ) {
    const [enteredData, setEnteredData] = useState(initialData);

useEffect(() => {
    getValue(enteredData);
}, [enteredData]);
        return (
            <CKEditor
                editor={ ClassicEditor }
                data={ enteredData }
                onChange={ (event, editor ) => {
                    const data = editor.getData();
                    // console.log( { event, editor, data } );
                    setEnteredData(data);
                    
                } }
            />
        )
}

export default Editor;
