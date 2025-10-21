import DashboardCards from '@/components/dashBoard/DashboardCards';
import Sidebar from '@/components/dashBoard/Sidebar';

export default function DashboardPage() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-1 mr-64 p-6 bg-[#fcfcfc] text-[#080708] min-h-screen text-right">
        <h1 className="text-2xl font-bold mb-6">لوحة التحكم</h1>
        <DashboardCards />
        {/* باقي محتوى الصفحة */}
      </div>
    </main>
  );
}

