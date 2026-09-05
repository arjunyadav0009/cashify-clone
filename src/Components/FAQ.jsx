

import { useState } from "react";

const TABS = ["SellSmart", "SmartBuy", "Repair/Others"];

const FAQ_DATA = {
  SellSmart: [
    {
      question: 'What should I do if my Amazon voucher shows "Already Redeemed"?',
      answer: (
        <>
          <p>
            If you encounter an error stating that your Amazon voucher has
            already been redeemed, please follow the steps below to report and
            resolve the issue:
          </p>

          <p>
            Please check your Amazon Pay balance, as the voucher might have
            already been redeemed. If the amount isn&apos;t reflecting in your
            account, kindly follow the steps mentioned below.
          </p>

          <p>
            <strong>File a complaint</strong> with the Cyber Crime Department
            at https://cybercrime.gov.in.
          </p>

          <p>
            While filing the complaint, ensure that the complaint notice is
            submitted <strong>under Section 91 of the Cr.PC</strong>.
          </p>

          <p>
            The Cyber Crime team will forward the complaint to{" "}
            <strong>police-inquiries@amazon.com</strong>.
          </p>

          <p>
            Upon receiving the complaint, the Amazon team will share complete
            redemption details with the investigating Cyber Crime authority.
          </p>
        </>
      ),
    },

    {
      question: "What documents do you need to sell old mobile phone on Cashify?",
      answer: (
        <p>
          Cashify requires only ID verification to confirm address and
          identity. Moreover, the user has to provide the Cashify agent with
          the ID only after the inspection of the phone you are selling. Once
          you sell the old phone, the agent will ask your Government ID for
          verification. Cashify accepts Aadhar Card.
        </p>
      ),
    },

    {
      question: "What if my pickup is delayed?",
      answer: (
        <p>
          Usually, it doesn&apos;t happen, it may happen due to some
          unforeseen circumstances. But we will update you with the
          real-time pickup status. In case of delay, please contact us by
          email at support@cashify.in. We shall respond to you within one
          business day and issue a refund/ fresh order.
        </p>
      ),
    },

    {
      question: "My mobile phone is not listed on the website. What to do now?",
      answer: (
        <p>
          In such cases, please contact us by email at support@cashify.in.
          We shall respond to you within one business day and try to
          rectify the issue as soon as possible.
        </p>
      ),
    },

    {
      question: "How To Sell Your Old Mobile Phone In 3 Steps?",
      answer: (
        <>
          <p>
            When it comes to selling your old mobile phone in a super easy
            and convenient fashion, you can trust none but Cashify. Here are
            three hassle-free ways.
          </p>

          <p>
            On the Cashify website or app, under the Sell phone category,
            choose the brand name and model. Add a few details related to
            the phone to get the exact value.
          </p>

          <p>
            Schedule a doorstep pickup for your phone as per your preferred
            date and time slot.
          </p>

          <p>
            Receive instant cash at your doorstep once the pickup is complete.
          </p>
        </>
      ),
    },
  ],

  SmartBuy: [
    {
      question: "Are refurbished phones sold on Cashify tested?",
      answer: (
        <p>
          Yes, every device goes through a multi-point quality check before
          being listed for sale, and comes with a warranty period.
        </p>
      ),
    },

    {
      question: "What is the warranty period on SmartBuy devices?",
      answer: (
        <p>
          Most SmartBuy devices come with a 6-month or 1-year warranty,
          depending on the product and plan you choose at checkout.
        </p>
      ),
    },
  ],

  "Repair/Others": [
    {
      question: "How do I book a repair service?",
      answer: (
        <p>
          You can book a repair service through the Cashify website or app
          by selecting your device and describing the issue. A technician
          will be assigned for doorstep or store repair.
        </p>
      ),
    },

    {
      question: "Do repairs come with a warranty?",
      answer: (
        <p>
          Yes, all repairs done through Cashify come with a service warranty
          covering the parts replaced and the labor involved.
        </p>
      ),
    },
  ],
};

function ChevronIcon({ open }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${
        open ? "rotate-180" : "rotate-0"
      }`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 text-left"
      >
        <span className="text-[17px] font-bold text-gray-900">
          {question}
        </span>

        <span className="mt-1 flex-shrink-0 text-gray-700">
          <ChevronIcon open={isOpen} />
        </span>
      </button>

      {isOpen && (
        <div className="mt-3 max-w-4xl space-y-3 text-[15px] leading-relaxed text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("SellSmart");

  // -1 means no FAQ is open initially
  const [openIndex, setOpenIndex] = useState(-1);

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    // Close all FAQs when changing tab
    setOpenIndex(-1);
  };

  const handleToggle = (idx) => {
    // Open clicked FAQ, or close it if already open
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const items = FAQ_DATA[activeTab];

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-24 font-sans">

      {/* Header */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>

        {/* Tabs */}
        <div className="flex overflow-hidden rounded-md border border-gray-200">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-5 py-2 text-sm font-semibold transition-colors ${
                activeTab === tab
                  ? "bg-gray-200 text-gray-900"
                  : "bg-white text-gray-500 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div>
        {items.map((item, idx) => (
          <FAQItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === idx}
            onToggle={() => handleToggle(idx)}
          />
        ))}
      </div>

      {/* Button */}
      <div className="mt-6 text-center">
        <button className="text-sm font-semibold text-teal-500 hover:text-teal-600  ">
         <span className="text-[18px]">Load Less FAQs</span> 
        </button>
      </div>
    </div>
  );
}

