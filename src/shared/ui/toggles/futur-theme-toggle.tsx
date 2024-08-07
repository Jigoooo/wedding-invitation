import '@/shared/assets/css/futur-theme-toggle.css';

export function FuturThemeToggle() {
  return (
    <label className='switch'>
      <input type='checkbox' />
      <span className='slider'></span>
    </label>
  );
}
