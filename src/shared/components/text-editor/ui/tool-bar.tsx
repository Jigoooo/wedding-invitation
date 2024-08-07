import { Box } from '@mui/joy';

export function ToolBar({ containerId }: { containerId: string }) {
  return (
    <div id={containerId} style={{ borderRadius: 5 }}>
      <Box component={'span'} className='ql-formats'>
        <select className='ql-font' defaultValue='pretendard'>
          <option value='pretendard'>Pretendard</option>
          <option value='serif'>Serif</option>
          <option value='sans-serif'>Sans Serif</option>
          <option value='monospace'>Monospace</option>
        </select>
        <select className='ql-size' defaultValue='medium'>
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
          <option value='huge'>Huge</option>
        </select>
        <select className='ql-header'>
          <option value='1'>Header 1</option>
          <option value='2'>Header 2</option>
          <option value='3'>Header 3</option>
          <option value='4'>Header 4</option>
          <option value='5'>Header 5</option>
          <option value='6'>Header 6</option>
        </select>
      </Box>
      <Box component={'span'} className='ql-formats'>
        <button className='ql-bold' />
        <button className='ql-italic' />
        <button className='ql-underline' />
        <button className='ql-strike' />
        <button className='ql-blockquote' />
        <button className='ql-code-block' />
        <button className='ql-formula' />
      </Box>
      <Box component={'span'} className='ql-formats'>
        <select className='ql-align' />
        <select className='ql-color' />
        <select className='ql-background' />
      </Box>
      <Box component={'span'} className='ql-formats'>
        <button className='ql-list' value='ordered' />
        <button className='ql-list' value='bullet' />
        <button className='ql-indent' value='-1' />
        <button className='ql-indent' value='+1' />
      </Box>
      <Box component={'span'} className='ql-formats'>
        <button className='ql-link' />
        <button className='ql-image' />
      </Box>
      <Box component={'span'} className='ql-formats'>
        <button className='ql-script' value='sub'></button>
        <button className='ql-script' value='super'></button>
      </Box>
      <Box component={'span'} className='ql-formats'>
        <button className='ql-clean' />
      </Box>
    </div>
  );
}
