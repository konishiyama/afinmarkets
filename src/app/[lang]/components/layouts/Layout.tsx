"use client";

export default function Layout({
  children, // will be a page or nested layout
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor: string;
}) {
  return (
    <div className={`${backgroundColor}`}>
      <div className="px-8 lg:px-16 mx-auto xl:max-w-screen-xl">{children}</div>
    </div>
  );
}
