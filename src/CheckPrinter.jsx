import { useState } from "react";

const bgImage = "/UnitedCommercialBank_UCB_BD.jpg"; 
// Put your uploaded image in: public/UnitedCommercialBank_UCB_BD.jpg

export default function BankChequePrint() {
  const [form, setForm] = useState({
    payee: "Roy Ang",
    date: "25/09/2012",
    amountWords:
      "One Crore Twenty Three Lakh Forty Five Thousand Six Hundred And Seventy Eight Only",
    amount: "12,345,678.00",
  });

  const update = (key, value) => setForm({ ...form, [key]: value });

  return (
    <main className="min-h-screen bg-slate-100 p-6 print:bg-white print:p-0">
      {/* Form: not printed */}
      <section className="mx-auto mb-6 max-w-3xl rounded-xl bg-white p-5 shadow print:hidden">
        <h1 className="mb-4 text-xl font-bold">Cheque Printing System</h1>

        <div className="grid gap-3 md:grid-cols-2">
          <input
            className="rounded border p-2"
            placeholder="Payee name"
            value={form.payee}
            onChange={(e) => update("payee", e.target.value)}
          />
          <input
            className="rounded border p-2"
            placeholder="DD/MM/YYYY"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
          />
          <input
            className="rounded border p-2 md:col-span-2"
            placeholder="Amount in words"
            value={form.amountWords}
            onChange={(e) => update("amountWords", e.target.value)}
          />
          <input
            className="rounded border p-2"
            placeholder="Amount"
            value={form.amount}
            onChange={(e) => update("amount", e.target.value)}
          />
        </div>

        <button
          onClick={() => window.print()}
          className="mt-4 rounded bg-blue-700 px-5 py-2 font-semibold text-white"
        >
          Print Cheque
        </button>
      </section>

      {/* Print area: check image + dynamic text */}
      <section className="mx-auto">
        <div
          className="relative overflow-hidden bg-white"
          style={{
            width: "200mm",
            height: "94mm",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            
          }}
        >
          {/* Payee */}
          <div
            className="absolute font-serif text-[16px] font-medium"
            style={{ top: "32mm", left: "28mm", width: "112mm" }}
          >
            {form.payee}
          </div>

          {/* Date: each part can be precisely positioned */}
          <div
            className="absolute font-mono text-[14px] tracking-[17px]"
            style={{ top: "16.5mm", left: "144mm" }}
          >
            {form.date.replaceAll("/", "")}
          </div>

          {/* Amount in words */}
          <div
            className="absolute font-serif text-[15px] leading-7 "
            style={{ top: "40mm", left: "34mm", width: "112mm" }}
          >
            {form.amountWords}
          </div>

          {/* Numeric amount */}
          <div
            className="absolute  text-[17px]"
            style={{ top: "44mm", left: "142mm", width: "50mm" }}
          >
 {form.amount}
          </div>
        </div>
      </section>

      <style>{`
        @page {
          size: 210mm 100mm;
          margin: 0;
        }

        @media print {
          body {
            margin: 0;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </main>
  );
}