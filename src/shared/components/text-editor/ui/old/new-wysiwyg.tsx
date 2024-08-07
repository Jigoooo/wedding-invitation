import { FormEvent, MutableRefObject, useRef, useState } from 'react';
import { Box, Stack, Tooltip, IconButton } from '@mui/joy';

import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import FormatUnderlined from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeft from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenter from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRight from '@mui/icons-material/FormatAlignRight';

export function NewWysiwyg() {
  const [editorContent, setEditorContent] = useState<string>('<p>Start writing here...</p>');
  const editorRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const wrapSelectionWith = (tag: string, style: string = '', value: string = '') => {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const selectedContent = range.extractContents();
    const wrapper = document.createElement(tag);
    if (style) wrapper.style[style as any] = value;
    wrapper.appendChild(selectedContent);
    range.insertNode(wrapper);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const handleBold = () => wrapSelectionWith('span', 'fontWeight', 'bold');
  const handleItalic = () => wrapSelectionWith('span', 'fontStyle', 'italic');
  const handleUnderline = () => wrapSelectionWith('span', 'textDecoration', 'underline');
  const handleAlign = (align: string) => {
    if (!editorRef.current) return;
    editorRef.current.style.textAlign = align;
  };

  const handleInput = (e: FormEvent<HTMLDivElement>) => {
    setEditorContent(e.currentTarget.innerHTML);
  };

  return (
    <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px' }}>
      <Stack direction='row' spacing={1} sx={{ marginBottom: '16px' }}>
        <Tooltip title='Bold'>
          <IconButton onClick={handleBold}>
            <FormatBold />
          </IconButton>
        </Tooltip>
        <Tooltip title='Italic'>
          <IconButton onClick={handleItalic}>
            <FormatItalic />
          </IconButton>
        </Tooltip>
        <Tooltip title='Underline'>
          <IconButton onClick={handleUnderline}>
            <FormatUnderlined />
          </IconButton>
        </Tooltip>
        <Tooltip title='Left Align'>
          <IconButton onClick={() => handleAlign('left')}>
            <FormatAlignLeft />
          </IconButton>
        </Tooltip>
        <Tooltip title='Center Align'>
          <IconButton onClick={() => handleAlign('center')}>
            <FormatAlignCenter />
          </IconButton>
        </Tooltip>
        <Tooltip title='Right Align'>
          <IconButton onClick={() => handleAlign('right')}>
            <FormatAlignRight />
          </IconButton>
        </Tooltip>
      </Stack>
      <Box
        contentEditable
        ref={editorRef}
        dangerouslySetInnerHTML={{ __html: editorContent }}
        onInput={handleInput}
        sx={{
          minHeight: '200px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          padding: '8px',
          outline: 'none',
          color: '#000000',
          '&:empty:before': {
            content: '"Start writing here..."',
            color: '#aaaaaa',
          },
          textAlign: 'left',
        }}
      />
    </Box>
  );
}
