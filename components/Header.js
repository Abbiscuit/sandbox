import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full flex items-center px-4 py-4 shadow-md">
      <Link href="/">
        <a className="inline-block px-4 py-2 text-gray-900 font-medium">
          Call Out
        </a>
      </Link>
      <Link href="/">
        <a className="inline-block px-4 py-2 text-gray-900 font-medium ">
          Feedback
        </a>
      </Link>
      <Link href="/sandbox">
        <a className="inline-block px-4 py-2 text-gray-900 font-medium">
          Sandbox
        </a>
      </Link>

      <Link href="/">
        <a className="inline-block px-4 py-2 text-gray-900 font-medium ml-auto">
          Account
        </a>
      </Link>

      <img
        src={`https://lh3.googleusercontent.com/a-/AOh14Ghp-JP5ToEfsy6ySY3IjW6PsYX-76a7CUS-hLvA=s96-c`}
        alt=""
        className="w-10 h-10 rounded-full object-cover"
      />
    </header>
  );
}
