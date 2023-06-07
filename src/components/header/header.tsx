import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <header>
      <div className='profile-image-container'>
        <img className='profile-image' src='/images/tom.png' alt='Tom Rogers'/>
      </div>
    </header>
  );
});
