import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex w-full flex-wrap justify-evenly">
      <Link href="/terms-and-conditions">
        <span className={'text-lg font-bold'}> Terms and Conditions </span>
      </Link>
      <Link href="/privacy-policy">
        <span className={'text-lg font-bold'}> Privacy Policy </span>
      </Link>
    </nav>
  );
}
