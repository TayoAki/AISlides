"use client";
import React from "react";
import { ProjectPreview } from "@webprodigies/flute/preview";
import { sceneModules } from "./catalog";
// Host-owned development flag: no process, Vite or Electron globals in this adapter.
export function FluteProjectPreview({ children, enabled, active, ...props }) {
  if (!enabled) return children;
  return <ProjectPreview {...props} projectId="60e668cd-3bbe-4469-a66d-a50b97ba5502" enabled={enabled} active={active} sceneModules={sceneModules}>{children}</ProjectPreview>;
}
