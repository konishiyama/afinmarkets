import Link from "next/link";

interface Props {
  name: string;
}

const HeaderMenu = ({ name }: Props) => {
  return (
    <li className="px-4">
      <Link
        href={`#${name}`}
        className="font-semibold text-blueGray-600 hover:text-blueGray-500"
      >
        {name}
      </Link>
    </li>
  );
};

export default HeaderMenu;
