'use client';

import { User, ShieldCheck, Settings, Database, LogIn, BarChart2 } from 'lucide-react';
import React from 'react';

const cards = [
  {
    title: "المستخدمون",
    value: "125",
    icon: <User className="w-8 h-8" />,
    color: "#867690",
  },
  {
    title: "التسجيل والدخول",
    value: "نشط",
    icon: <LogIn className="w-8 h-8" />,
    color: "#92a696",
  },
  {
    title: "صلاحيات المشرفين",
    value: "5 مشرفين",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "#bbc0b1",
  },
  {
    title: "بيانات المستخدم",
    value: "12 GB",
    icon: <Database className="w-8 h-8" />,
    color: "#92a696",
  },
  {
    title: "الإحصائيات",
    value: "تحديث يومي",
    icon: <BarChart2 className="w-8 h-8" />,
    color: "#bbc0b1",
  },
  {
    title: "الإعدادات",
    value: "محدثة",
    icon: <Settings className="w-8 h-8" />,
    color: "#867690",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10 text-right">
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-xl p-6 text-white shadow-lg flex items-center justify-between"
          style={{ backgroundColor: card.color }}
        >
          <div>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-2xl font-bold mt-2">{card.value}</p>
          </div>
          <div className="opacity-80">
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
