"use client";

export default function Layout({
  children, // will be a page or nested layout
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor: string;
}) {
  return (
    <div className={`px-4 mx-auto xl:max-w-screen-xl ${backgroundColor}`}>
      {children}
    </div>
  );
}
