"use client";
import { useEffect } from "react";
export default function RevealObserver() {
  useEffect(() => {
    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: .08 });
    const observe = (root: ParentNode = document) => {
      root.querySelectorAll?.(".reveal").forEach(item => {
        if (!seen.has(item)) { seen.add(item); io.observe(item); }
      });
    };
    observe();
    const mo = new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(node => {
      if (node instanceof Element) {
        if (node.matches(".reveal") && !seen.has(node)) { seen.add(node); io.observe(node); }
        observe(node);
      }
    })));
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { mo.disconnect(); io.disconnect(); };
  }, []);
  return null;
}
