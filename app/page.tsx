import Link from "next/link";

export default function Home() {
  return (
    <div>

      <div className='flex flex-col justify-start items-center h-screen mt-20 gap-5'>
        <div className="text-3xl font-bold">مرحباً بك في موقع المعلم الإلكتروني</div>

        <div className="text-center max-w-md text-xl">
          <p>الموقع لا يحتوي حاليا الا على التوزيعات السنوية والشهرية محينة لسنة 2025-2026 </p>
          <button>
            <Link href="/pages/monthlyDistrubtion" className="underline text-blue-600">من هنا</Link>
          </button>
          <p>وإن شاء الله سيتم إثراؤه وإتمامه بما يسهل العملية التعليمية حسب الجهد والوقت </p>
        </div>

      </div>

    </div>
  );
}
