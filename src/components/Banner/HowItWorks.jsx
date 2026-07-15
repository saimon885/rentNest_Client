import React from "react";
import { UserPlus, CalendarCheck, CreditCard } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-6 h-6 text-secondary" />,
      title: "1. Create Account",
      desc: "Sign up and select your explicit role as a Tenant looking for a home, or a Landlord listing one.",
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-secondary" />,
      title: "2. Request & Approve",
      desc: "Tenants submit exact check-in/out dates. Landlords easily approve or reject requests inside their dashboard.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-secondary" />,
      title: "3. Pay & Move In",
      desc: "Once approved, tenants securely clear payment via Stripe (capped up to 30 days maximum advance).",
    },
  ];

  return (
    <section className="py-12 bg-base-200 border-y border-base-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-primary">
          How RentNest Works
        </h2>
        <p className="text-xs text-neutral/60 mt-1 max-w-md mx-auto">
          A seamless 3-step modern real estate rental cycle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-base-100 p-6 rounded-xl border border-base-300 shadow-xs flex flex-col items-center text-center gap-2"
            >
              <div className="p-3 bg-secondary/10 rounded-full mb-2">
                {step.icon}
              </div>
              <h3 className="text-base font-bold text-primary">{step.title}</h3>
              <p className="text-xs text-neutral/70 leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
