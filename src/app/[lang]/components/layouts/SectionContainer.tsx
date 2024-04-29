"use client";
import ScrollOffset from "./ScrollOffset";

export default function SectionContainer({
  children, // will be a page or nested layout
  section_title,
}: {
  children: React.ReactNode;
  section_title: string;
}) {
  return (
    <div className="flex-wrap items-center xl:px-16 py-12 md:pt-20 md:pb-12">
      <div className="max-w-lg mx-auto mb-12 text-center">
        <span
          className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        >
          {section_title}
        </span>
        <ScrollOffset id={section_title} />
      </div>
      {children}
    </div>
  );
}
