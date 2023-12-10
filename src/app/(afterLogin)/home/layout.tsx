import React, { PropsWithChildren } from "react";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div>
      home 레이아웃
      {children}
    </div>
  );
}
