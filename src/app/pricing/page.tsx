"use client";

import React, { useEffect, useState } from "react";
import {
  Palette,
  Globe,
  Smartphone,
  Gift,
  ShoppingCart,
  CheckCircle,
  DollarSign,
  DollarSignIcon,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero";

export default function Page() {
  const [rate, setRate] = useState(1200);
  const [currency, setCurrency] = useState<"USD" | "NGN">("NGN");
  const [userLocation, setUserLocation] = useState<"NG" | "INTL" | null>(null);
  const [discountApplied, setDiscountApplied] = useState(false);

  useEffect(() => {
    const isNigeria = Math.random() > 0.3;
    setUserLocation(isNigeria ? "NG" : "INTL");
    setDiscountApplied(isNigeria && currency === "NGN");
  }, [currency]);

  const pricingTiers = [
    {
      label: "Starter",
      basePrice: 1200,
      desc: "Logo + 5 pages responsive site",
      icon: Palette,
      localDiscount: 0.3,
    },
    {
      label: "Business",
      basePrice: 3000,
      desc: "Complete business website",
      icon: Globe,
      localDiscount: 0.25,
      popular: true,
    },
    {
      label: "E-commerce",
      basePrice: 2000,
      desc: "Complete online store setup",
      icon: ShoppingCart,
      localDiscount: 0.2,
    },
    {
      label: "Mobile App",
      basePrice: 5000,
      desc: "Cross-platform MVP",
      icon: Smartphone,
      localDiscount: 0.15,
    },
  ];

  const calculatePrice = (basePrice: number): number => {
    const discount =
      currency === "NGN" && userLocation === "NG"
        ? pricingTiers.find((t) => t.basePrice === basePrice)?.localDiscount ||
          0
        : 0;

    const finalPrice = basePrice * (1 - discount);
    return currency === "USD" ? finalPrice : finalPrice * rate;
  };

  const calculateOriginalPrice = (basePrice: number): number => {
    return currency === "USD" ? basePrice : basePrice * rate;
  };

  const formatPrice = (amount: number): string => {
    return currency === "USD"
      ? `$${amount.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
      : `₦${Math.round(amount).toLocaleString()}`;
  };

  const handleCurrencyChange = (newCurrency: "USD" | "NGN"): void => {
    setCurrency(newCurrency);
    setDiscountApplied(userLocation === "NG" && newCurrency === "NGN");
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex flex-col items-center justify-center px-6 md:px-12 py-32">
        <div className="min-h-[75vh] top-0 flex flex-col items-center justify-center px-6 md:px-12 py-32 bg-gradient-to-br from-gray-50 to-cyan-50 absolute w-full"></div>
        <div className="max-w-6xl mx-auto relative z-3">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600 mb-8 border border-gray-100">
              <DollarSign className="w-4 h-4 mr-2 text-cyan-600" />
              Pricing
            </motion.div>

            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Simple,
              <>
                <br />
                <span
                  className={`bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent font-medium`}>
                  fair pricing
                </span>
              </>
            </motion.h1>
            {/* <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Simple, fair pricing
            </h1> */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Special rates for Nigerian clients paying in Naira
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => handleCurrencyChange("USD")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  currency === "USD"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}>
                USD
              </button>
              <button
                onClick={() => handleCurrencyChange("NGN")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  currency === "NGN"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}>
                NGN
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, idx) => {
              const showDiscount = discountApplied && currency === "NGN";
              const originalPrice = calculateOriginalPrice(tier.basePrice);
              const discountedPrice = calculatePrice(tier.basePrice);

              return (
                <div
                  key={tier.label}
                  className={`relative bg-white shadow-sm rounded-md hover:shadow-lg transition-shadow ${
                    tier.popular
                      ? "bg-gradient-to-r  from-cyan-600 to-green-600 p-0.5 shadow-md"
                      : "border-white shadow-md"
                  }`}>
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-gradient-to-r  from-cyan-600 to-green-700 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="bg-white p-8 rounded-sm">
                    {/* Icon */}
                    <div className="mb-6">
                      <tier.icon className="w-8 h-8 text-gray-700" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-cyan-900 mb-2">
                      {tier.label}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">{tier.desc}</p>
                    <div className="text-sm text-gray-500 mt-6">
                      Starting from
                    </div>
                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex gap-2 mb-2 flex-col">
                        <span className="text-3xl font-bold text-gray-900">
                          {formatPrice(discountedPrice)}
                        </span>
                        {showDiscount && (
                          <span className="text-lg text-gray-400 line-through">
                            {formatPrice(originalPrice)}
                          </span>
                        )}
                      </div>

                      {showDiscount && (
                        <p className="text-sm items-end text-green-600">
                          Save {formatPrice(originalPrice - discountedPrice)}
                        </p>
                      )}
                    </div>

                    {/* CTA */}
                    <button
                      className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                        tier.popular
                          ? "bg-cyan-600 text-white hover:bg-cyan-800"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}>
                      Get started
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Discount Notice */}
          {discountApplied && (
            <div className="max-w-4xl mx-auto mt-10">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 opacity-100 translate-y-0 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <Gift className="w-10 h-10 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-green-800 mb-1">
                      Naira Discount Active!
                    </h3>
                    <p className="text-green-700 text-sm">
                      You&apos;re seeing special discounted prices because
                      you&apos;re viewing in Naira. These rates are only
                      available for Nigerian clients paying in local currency.
                    </p>
                  </div>
                </div>
              </div>
              {/* Benefits */}
              <div className="mt-6">
                <div className="rounded-xl">
                  <h3 className="font-medium mb-3">Why We Offer Discounts</h3>
                  <p className="text-sm mb-2">
                    We&apos;re committed to Nigeria&apos;s digital
                    transformation. These adjusted rates help:
                  </p>
                  <ul className="flex gap-2 text-sm text-left mb-4">
                    <div>
                      <li className="flex items-center gap-4">
                        • Empower local businesses
                      </li>

                      <li className="flex items-center gap-2">
                        • Offset infrastructure costs
                      </li>
                    </div>
                    <div>
                      <li className="flex items-center gap-2">
                        • Support tech talent growth
                      </li>
                      <li className="flex items-center gap-2">
                        • Make digital tools accessible
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          )}
          <div className="max-w-4xl mx-auto mt-10">
            <div className="text-sm text-gray-500 mt-6">
              Final quotes provided after consultation.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
