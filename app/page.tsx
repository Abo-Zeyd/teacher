import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row ">
      <div >
        <Image
          src="/images/teacher.jpg"
          alt="Teacher Home Page"
          width={800}
          height={400}
          className="mx-auto mt-10 rounded-lg shadow-lg"
        />
      </div>
      <div className='flex flex-col  justify-start items-center  mt-10 mr-5 gap-10 bg-background p-10 rounded-lg shadow-lg'>
        <div className="text-3xl font-bold">مرحباً بك في موقع المعلم الإلكتروني</div>

        <div className="text-center max-w-md text-xl">
          <p>الموقع لا يحتوي حاليا الا على التوزيعات السنوية والشهرية محينة لسنة 2025-2026 </p>
          <button>
            <Link href="/pages/monthlyDistrubtion" className=" text-blue-600">من هنا</Link>
          </button>

          <p>وإن شاء الله سيتم إثراؤه وإتمامه بما يسهل العملية التعليمية حسب الجهد والوقت </p>
          <div className="flex flex-col gap-4 mt-4 no-underline">
            <Link href="https://www.youtube.com/watch?v=E72wi7bpoRM" className=" text-blue-600">شرح إنجاز التوازيع الجزء الأول</Link>

            <Link href="https://www.youtube.com/watch?v=_LA2sr9aQfw" className=" text-blue-600">شرح إنجاز التوازيع الجزء الثاني</Link>
          </div>
        </div>

      </div>
    </div>


  );
}
