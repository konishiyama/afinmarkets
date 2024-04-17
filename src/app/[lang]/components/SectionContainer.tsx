"use client";

export default function SectionContainer({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center -mx-3 xl:px-16">{children}</div>
  );
}
