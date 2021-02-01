import Link from 'next/link';
import { useAuth } from '../lib/auth';

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="w-full flex items-center px-4 py-4 shadow-md">
      <Link href="/">
        <a className="inline-block px-4 py-2 text-gray-900">Feedback</a>
      </Link>
      {/* <Link href="/feedback">
        <a className="inline-block px-4 py-2 text-gray-900">Feedback</a>
      </Link> */}
      <Link href="/sandbox">
        <a className="inline-block px-4 py-2 text-gray-900 ">Sandbox</a>
      </Link>

      <Link href="/account">
        <a className="inline-block px-4 py-2 text-gray-900 ml-auto">Account</a>
      </Link>

      {user && (
        <Link href="/profile">
          <a className="px-4">
            <img
              src={user.photoURL}
              alt=""
              className="w-10 h-10 rounded-full object-cover shadow-sm"
            />
          </a>
        </Link>
      )}
    </header>
  );
}
