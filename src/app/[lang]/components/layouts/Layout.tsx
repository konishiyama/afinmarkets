"use client";

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-4 mx-auto xl:max-w-screen-xl bg-white">{children}</div>
  );
}
