import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './footer.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <footer>
      If you'd like to get in touch, either email me at <a href="mailto:hi@tomrgs.co.uk">hi@tomrgs.co.uk</a> or message me on <a href="https://www.linkedin.com/in/trogers3/">LinkedIn.</a>
    </footer>
  );
});
