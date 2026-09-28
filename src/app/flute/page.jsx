import React from "react";
import { notFound } from "next/navigation";
import FluteStudio from "../../../src/flute/Studio";
export default function FlutePage() {
  if (process.env.NODE_ENV !== "development") notFound();
  return <><meta name="flute-project" content="60e668cd-3bbe-4469-a66d-a50b97ba5502" /><FluteStudio /></>;
}
