import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";

export default function SideNav() {
  return (
    <div>
      <aside className="fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full py-16 px-6 overflow-y-auto bg-[#ffffff] rounded-md shadow border">
          <div className="flex flex-col gap-0 mb-12">
            <p className="font-bold text-[#242220]/40 text-[18px]">Welcome</p>
            <p className="text-sm font-bold">Manajer Operasional</p>
          </div>

          <ul className="font-medium flex flex-col">
            <li className="flex items-center gap-4 py-4 px-5 rounded-xl">
              <Link href="/">
                <p className="flex-1 text-sm whitespace-nowrap mt-[30px] ">
                  Package List
                </p>
              </Link>
            </li>
            <li className="flex items-center gap-4 py-4 px-5 rounded-xl">
              <Link href="/crud-staf">
                <p className="flex-1 text-sm whitespace-nowrap mt-[30px]">
                  Staff List
                </p>
              </Link>
            </li>
            <li className="flex items-center gap-4 py-4 px-5 rounded-xl">
              <Link href="/maintenance">
                <p className="flex-1 text-sm whitespace-nowrap mt-[30px]">
                  Notification
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
