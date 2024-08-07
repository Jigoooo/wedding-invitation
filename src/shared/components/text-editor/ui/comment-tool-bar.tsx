export function CommentToolBar({ containerId }: { containerId: string }) {
  return (
    <div id={containerId} style={{ borderRadius: 5 }}>
      <span className='ql-formats'>
        <button className='ql-bold' />
        <button className='ql-italic' />
        <button className='ql-underline' />
        <button className='ql-strike' />
        <button className='ql-link' />
      </span>
    </div>
  );
}
