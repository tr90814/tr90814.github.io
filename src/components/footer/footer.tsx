import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './footer.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <footer>
      If you'd like to get in touch, feel free to drop me a message me on <a href="https://www.linkedin.com/in/trogers3/">LinkedIn.</a>
    </footer>
  );
});
