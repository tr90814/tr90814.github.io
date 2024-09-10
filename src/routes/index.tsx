import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Current from "~/components/current/current";
import Previous from "~/components/previous/previous";

export default component$(() => {
  return (
    <>
      <Current />
      <Previous />
    </>
  );
});

export const head: DocumentHead = {
  title: "Tom Rogers",
};
