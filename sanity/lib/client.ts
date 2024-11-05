import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

// jadi tu pokoknya useCdn ni dia buat nge cache data, Kalo dia true, trus data dirubah , nah dia ga bakal lansung berubah. dia bakal ngelakuin revalidate setiap 60 sec
// kalo useCdn nya false dia tu bakal lansung berubah

// itu namanya PPR (page pre-rendering)
// page detail tu ISR(Incremental Static Regeneration) -> revalidate setiap 60 sec
// views tu SSR(Server Side Rendering) -> data lansung
