import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './index.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <>
      <h1 className='profile-name'>Tom Rogers</h1>
      <ul>
        <li>
          Ex <code>Co-founder</code>, <code>CPTO</code> and <code>NED</code> <a href='https://farewill.com'>@Farewill</a>
        </li>
        <li>
          Ex <code>Head of Tech</code> <a href='https://savemyexams.co.uk'>@SaveMyExams</a>
        </li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Tom Rogers',
};
