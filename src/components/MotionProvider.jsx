"use client";
import { MotionConfig } from "framer-motion";

// reducedMotion="user" disables transform/layout animations for visitors
// with prefers-reduced-motion enabled, while keeping opacity fades.
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
