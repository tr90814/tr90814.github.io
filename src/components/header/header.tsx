import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <header>
      <a href="https://github.com/tr90814" className="profile-image-container">
        <img
          className="profile-image"
          src="/images/headshot.jpg"
          alt="Tom Rogers"
        />
      </a>
    </header>
  );
});
