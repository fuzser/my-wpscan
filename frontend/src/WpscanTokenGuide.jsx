import React from "react";

const WpscanTokenGuide = () => {
  return (
    <div className="max-w-xl mx-auto my-6 p-5 bg-slate-50 border border-slate-200 rounded-2xl font-sans text-slate-800">
      <h2 className="text-xl font-semibold mb-3">Get Your WPScan API Token</h2>
      <p className="text-sm text-slate-600 mb-3">
        To run vulnerability scans, you need to register on the WPScan website
        and obtain your personal API Token. Follow these steps:
      </p>

      <ol className="list-decimal list-inside space-y-2 text-sm mb-4">
        <li>
          Click the button below to go to the{" "}
          <strong>WPScan Registration Page</strong> and complete the
          sign-up/login process.
        </li>
        <li>
          After logging in, go to the <em>Dashboard</em> / <em>API</em> section
          to find your <strong>API Token</strong>.
        </li>
        <li>
          Copy the Token and paste it into the “WPScan Token” input field in
          this tool to save it.
        </li>
      </ol>

      <a
        href="https://wpscan.com/register/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 rounded-xl border border-slate-800 font-medium text-sm shadow-sm hover:shadow-md hover:bg-slate-100 transition"
      >
        Go to WPScan Registration/Login
      </a>

      <div
        role="note"
        aria-label="Security Tip"
        className="mt-4 p-3 bg-white border border-dashed border-slate-300 rounded-xl text-xs text-slate-700"
      >
        <strong>Security Tip:</strong> Keep your Token safe. Do not share it in
        public pages, repositories, or screenshots. If it is exposed,
        immediately reset it from your WPScan account.
      </div>

      <details className="mt-3 text-xs text-slate-700">
        <summary className="cursor-pointer select-none">
          Can't find your Token? Click to expand
        </summary>
        <div className="mt-2">
          After logging in, go to your Dashboard and check the <em>API</em> or{" "}
          <em>Account</em> section. If the Token is not visible, make sure your
          email is verified and your plan is active.
        </div>
      </details>
    </div>
  );
};

export default WpscanTokenGuide;
