export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[20%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-cyan-200"></div>
      {/* RIGHT */}
      <div className="w-[80%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col"></div>
    </div>
  );
}