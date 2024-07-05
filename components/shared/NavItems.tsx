'use client'
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerLinks } from "@/constants/data";
import { RootState } from "@/Store/store";
import { Button } from "../ui/button";
import { setIsLoggedIn } from "@/utils/authSlice";

const NavItems = () => {
  const pathname = usePathname();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:mr-10 md:flex-row">
      {headerLinks.map((link) => {
        if (link.label === "Dashboard" && !isLoggedIn) {
          return null;
        }
        return (
          <li
            key={link.route}
            className={`${
              pathname === link.route ? "text-primary-500" : ""
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
      {isLoggedIn && (
        <li>
          <Button
            onClick={() => {
              dispatch(setIsLoggedIn(false));
            }}
            className="font-semibold hover:bg-yellow-400 px-4 py-2 rounded-md shadow-md"
          >
            Logout
          </Button>
        </li>
      )}
      {!isLoggedIn && (
        <div className=" flex gap-2">
          <li>
            <Button className="font-semibold hover:bg-yellow-400 px-4 py-2 rounded-md shadow-md">
              <Link href="/login">Login</Link>
            </Button>
          </li>
          <li>
            <Button className="font-semibold hover:bg-yellow-400 px-4 py-2 rounded-md shadow-md">
              <Link href="/signup">Signup</Link>
            </Button>
          </li>
        </div>
      )}
    </ul>
  );
};

export default NavItems;
