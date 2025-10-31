// icon:tick-small | Teeny Icons https://teenyicons.com/ | Anja van Staden
import * as React from "react";

function TickIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 15 15" height='35' width='35' {...props}>
      <path stroke="currentColor" d="M4 7.5L7 10l4-5" />
    </svg>
  );
}

export default TickIcon;
