'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navItems = [
  { title: "الرئيسية", href: "/dashboard" },
  { title: "المستخدمون", href: "/dashboard/users" },
  { title: "التسجيل والدخول", href: "/dashboard/auth-settings" },
  { title: "صلاحيات المشرفين", href: "/dashboard/permissions" },
  { title: "بيانات المستخدم", href: "/dashboard/user-data" },
  { title: "الإحصائيات", href: "/dashboard/statistics" },
  { title: "الإعدادات", href: "/dashboard/settings" },
];

export default function Sidebar() {
    function cn(...classes: string[]) {
        return classes.filter(Boolean).join(' ');
      }
      
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-[#867690] text-white fixed right-0 top-0 p-6 flex flex-col space-y-4">
      <h2 className="text-xl font-bold mb-6">لوحة التحكم</h2>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'block px-3 py-2 rounded hover:bg-[#92a696] transition',
            pathname === item.href ? 'bg-[#92a696]' : ''
          )}
        >
          {item.title}
        </Link>
      ))}
    </aside>
  );
}
