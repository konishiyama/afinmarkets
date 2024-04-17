import Link from "next/link";

interface Props {
  name: string;
}

const HeaderMenu = ({ name }: Props) => {
  return (
    <li className="px-4">
      <Link
        href={`#${name}`}
        className="font-semibold text-base hover:text-blueGray"
      >
        {name}
      </Link>
    </li>
  );
};

export default HeaderMenu;
