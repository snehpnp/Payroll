const Dashboard = () => {



  return (
    <>

      <div className="title"> Dashboard</div>;

      <div className="flex items-center justify-center p-6 bg-gray-900 min-h-screen">
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          <div className="relative p-5 bg-gradient-to-r from-teal-400 to-green-500 rounded-md overflow-hidden">
            <div className="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">$5000.00</div>
            <div className="relative z-10 text-green-200 leading-none font-semibold">Next month's income</div>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-green-600 opacity-50">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="relative p-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-md overflow-hidden">
            <div className="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">110</div>
            <div className="relative z-10 text-blue-200 leading-none font-semibold">Members</div>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-blue-700 opacity-50">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="relative p-5 bg-gradient-to-r from-red-400 to-red-600 rounded-md overflow-hidden">
            <div className="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">3</div>
            <div className="relative z-10 text-red-200 leading-none font-semibold">Upcoming cancellations</div>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-red-700 opacity-50">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="relative p-5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md overflow-hidden">
            <div className=" mb-4 text-white text-4xl leading-none font-semibold">97.00%</div>
            <div className="text-yellow-200 leading-none font-semibold">Retention rate</div>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute right-0 bottom-0 h-32 w-32 -mr-8 -mb-8 text-yellow-700 opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </svg>
          </div>
        </section>
      </div>




    </>
  )
};

export default Dashboard;
