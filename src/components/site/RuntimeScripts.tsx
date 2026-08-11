"use client";

import { useEffect } from "react";

// Injects admin-configured HTML (analytics/pixel scripts) into the page at
// runtime, so scripts can be added from /admin without a rebuild. Script
// tags must be recreated via createElement or the browser will not run them.
export function RuntimeScripts() {
  useEffect(() => {
    let cancelled = false;
    fetch("/api/public-settings")
      .then((r) => r.json())
      .then(({ headHtml }) => {
        if (cancelled || !headHtml || document.getElementById("rt-scripts"))
          return;
        const host = document.createElement("div");
        host.id = "rt-scripts";
        const tpl = document.createElement("template");
        tpl.innerHTML = headHtml;
        for (const node of Array.from(tpl.content.childNodes)) {
          if (node.nodeName === "SCRIPT") {
            const old = node as HTMLScriptElement;
            const s = document.createElement("script");
            for (const attr of Array.from(old.attributes))
              s.setAttribute(attr.name, attr.value);
            s.text = old.text;
            document.head.appendChild(s);
          } else {
            host.appendChild(node.cloneNode(true));
          }
        }
        if (host.childNodes.length) document.body.appendChild(host);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
