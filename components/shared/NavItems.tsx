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
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        if (link.label === "Dashboard") {
          return isLoggedIn ? (
            <li
              key={link.route}
              className={`${
                pathname === link.route && "text-primary-500"
              } flex-center p-medium-16 whitespace-nowrap`}
            >
              <Link href={link.route}>{link.label}</Link>
            </li>
          ) : null;
        } else if (
          link.label === "Community" ||
          link.label === "Explore" ||
          link.label === "Creators"
        ) {
          return (
            <div key={link.route}>
              <li
                className={`${
                  pathname === link.route && "text-primary-500"
                } flex-center p-medium-16 whitespace-nowrap`}
              >
                <Link href={link.route}>{link.label}</Link>
              </li>
            </div>
          );
        }
        // Render nothing for other items to keep them static
        return null;
      })}

      {!isLoggedIn ? (
        // Show styled login and signup buttons if not logged in
        <div className="md:mr-5 flex gap-2">
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
      ) : (
        <Button onClick={()=>{
          dispatch(setIsLoggedIn(false))
        }} className="font-semibold hover:bg-yellow-400 px-4 py-2 rounded-md shadow-md">
          Logout
        </Button>
      )}
    </ul>
  );
};

export default NavItems;
