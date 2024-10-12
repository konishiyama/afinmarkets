import Link from "next/link";

interface Dictionary {
  Product: string;
  Features: string;
  Team: string;
  Join: string;
}

interface HeaderProps {
  header_props: Dictionary;
}

const HeaderMenu = ({ header_props }: HeaderProps) => {
  return (
    <ul className="lg:flex lg:items-center lg:w-auto lg:space-x-20">
      {Object.entries(header_props).map(([propId, propName]) => (
        <li key={propId} className="px-4">
          <Link href={`#${propId}`} className="font-semibold">
            {propName}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenu;
