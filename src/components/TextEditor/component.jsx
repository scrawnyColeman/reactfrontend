import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';

const style = {
    margin: `auto`,
};
const TextEditor = ({
    value,
    readOnly = true,
    mode = 'javascript',
    height = '20vh',
    maxLines = 15,
    highlightActiveLine = false,
    minLines = 0,
    placeholder = '',
    fontSize = 14,
}) => (
    <AceEditor
        mode={mode}
        theme="monokai"
        name="blah2"
        fontSize={fontSize}
        highlightActiveLine={highlightActiveLine}
        showPrintMargin={true}
        showGutter={true}
        value={value}
        height={height}
        style={style}
        readOnly={readOnly}
        maxLines={maxLines}
        minLines={minLines}
        placeholder={placeholder}
    />
);
export default TextEditor;
