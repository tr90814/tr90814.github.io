import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <img className='profile-image' src='/images/tom.png' alt='Tom Rogers'/>
      <h1>Tom Rogers</h1>

      <p>
        Ex <code>Co-founder</code>, <code>CPTO</code> and <code>NED</code> <a href='https://farewill.com'>@Farewill</a>.
      </p>
      
      <p>
        Currently <code>advising</code> and <code>contracting</code> with companines in London.
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Tom Rogers',
};
