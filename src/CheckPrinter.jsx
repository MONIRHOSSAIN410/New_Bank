import React, { useState } from "react";

export default function ChequePrinter() {
  // Dynamic Cheque State
  const [payTo, setPayTo] = useState("John Doe");
  const [amountWords, setAmountWords] = useState("Fifty Thousand Taka Only");
  const [amount, setAmount] = useState("50,000/-");
  const [date, setDate] = useState({
    d1: "2", d2: "0",
    m1: "0", m2: "7",
    y1: "2", y2: "0", y3: "2", y4: "6",
  });
  const [accountName, setAccountName] = useState("S M SALEHUR RAHMAN");
  const [accountNo, setAccountNo] = useState("0026010014592");
  const [chequeNo, setChequeNo] = useState("SBA 5944952");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 flex flex-col items-center justify-center font-sans">
      {/* ---------------- CONTROL PANEL (Hidden during print) ---------------- */}
      <div className="print:hidden bg-white p-6 rounded-xl shadow-md mb-8 w-full max-w-3xl border border-slate-200">
        <h2 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">
          Cheque Generator & Printer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <label className="block text-slate-600 font-medium mb-1">Pay To:</label>
            <input
              type="text"
              value={payTo}
              onChange={(e) => setPayTo(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-medium mb-1">Amount (TK):</label>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-slate-600 font-medium mb-1">Amount in Words:</label>
            <input
              type="text"
              value={amountWords}
              onChange={(e) => setAmountWords(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-medium mb-1">Account Name:</label>
            <input
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-medium mb-1">Account No:</label>
            <input
              type="text"
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>
        </div>

        <button
          onClick={handlePrint}
          className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg shadow transition flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print Cheque
        </button>
      </div>

      {/* ---------------- CHEQUE TEMPLATE ---------------- */}
      <div 
        id="cheque" 
        className="relative bg-[#f8f7eb] text-slate-900 border border-slate-300 w-[780px] h-[330px] p-6 shadow-xl rounded-sm print:shadow-none print:m-0 print:border-none select-none font-serif overflow-hidden"
      >
        {/* Header Section */}
        <div className="flex justify-between items-start mb-2">
          {/* Bank Logo & Branch Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-700 border-2 border-red-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
              RBL
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-wide text-red-700 uppercase font-sans">
                RUPALI BANK LIMITED
              </h1>
              <p className="text-[11px] leading-tight text-slate-700 font-sans">
                Rupali Sadan Corporate Dhaka
              </p>
              <p className="text-[11px] leading-tight text-slate-700 font-sans">
                185275868
              </p>
            </div>
          </div>

          {/* Cheque Number & Date Grid */}
          <div className="text-right">
            <div className="text-sm font-bold tracking-widest text-slate-800 mb-2 font-sans">
              {chequeNo}
            </div>
            
            <div className="flex items-center gap-1 justify-end">
              <span className="text-xs font-bold text-slate-700 mr-1 font-sans">DATE</span>
              <div className="flex gap-0.5 text-xs font-mono font-bold">
                {[date.d1, date.d2, date.m1, date.m2, date.y1, date.y2, date.y3, date.y4].map((digit, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-5 h-6 border border-slate-500 bg-white/50 flex items-center justify-center">
                      {digit}
                    </div>
                    <span className="text-[8px] text-slate-500 font-sans font-normal mt-0.5">
                      {idx < 2 ? 'D' : idx < 4 ? 'M' : 'Y'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pay To Row */}
        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-sm font-bold shrink-0">Pay To</span>
          <div className="border-b-2 border-slate-400 border-dotted flex-grow px-2 font-semibold text-lg text-slate-800">
            {payTo}
          </div>
          <span className="text-sm font-bold shrink-0">Or Bearer</span>
        </div>

        {/* Sum of Taka & Amount Box Row */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex-grow flex items-baseline gap-2">
            <span className="text-sm font-bold shrink-0">The sum of Taka</span>
            <div className="border-b-2 border-slate-400 border-dotted flex-grow px-2 font-semibold text-sm text-slate-800 leading-snug">
              {amountWords}
            </div>
          </div>

          {/* Amount Box */}
          <div className="w-48 h-12 border-2 border-slate-600 bg-white/60 flex items-center px-3 font-sans font-bold text-lg text-slate-900 shrink-0">
            <span className="text-sm mr-2 font-semibold">TK.</span>
            <span>{amount}</span>
          </div>
        </div>

        {/* Account Info & Signature Line */}
        <div className="mt-6 flex justify-between items-end">
          <div className="text-xs font-sans font-bold text-slate-800 leading-relaxed">
            <p>Name : <span className="uppercase">{accountName}</span></p>
            <p>A/C No. : {accountNo}</p>
          </div>

          <div className="text-right">
            <div className="w-48 border-t border-slate-500 mb-1"></div>
            <p className="text-[9px] text-slate-500 font-sans">Please Sign Above This Line</p>
          </div>
        </div>

        {/* MICR Bottom Code Strip */}
        <div className="absolute bottom-3 left-0 w-full px-12 flex justify-center items-center font-mono text-base tracking-[0.25em] text-slate-800">
          <span>⑈5944952⑈ 185275868⑈ 0026010014592⑈ 10</span>
        </div>
      </div>
    </div>
  );
}