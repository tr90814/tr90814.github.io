import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./current.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <>
      <h1 className="current-role__name">Tom Rogers</h1>
      <h4 className="current-role__role">
        <code>CTO</code> <a href="https://roostrent.com">@Roost</a>
      </h4>
    </>
  );
});
