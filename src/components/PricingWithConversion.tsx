"use client";

import { motion } from "framer-motion";
import { Palette, Globe, Smartphone, Target, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

export default function PricingWithConversion() {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showNaira, setShowNaira] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  // Fetch exchange rate from API
  const fetchExchangeRate = async () => {
    try {
      setLoading(true);
      // Using a free forex API (replace with your preferred API)
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      const data = await response.json();
      setExchangeRate(data.rates.NGN);
      setError(null);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      console.error("Failed to fetch exchange rate:", err);
      setError("Exchange rate unavailable - showing USD");
      setShowNaira(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRate();
    // Refresh rate every hour
    const interval = setInterval(fetchExchangeRate, 3600000);
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (usd: number) => {
    if (!showNaira || !exchangeRate) {
      return <span className="text-gray-900">${usd.toLocaleString()}</span>;
    }

    const naira = usd * exchangeRate;
    return (
      <span className="text-gray-900">
        ₦{Math.round(naira).toLocaleString()}
      </span>
    );
  };

  const pricingTiers = [
    {
      label: "Brand Identity",
      price: 1500,
      desc: "Logo, guidelines, assets",
      icon: Palette,
    },
    {
      label: "Web Design",
      price: 500,
      desc: "Complete website design & development",
      icon: Globe,
    },
    {
      label: "App Design",
      price: 3000,
      desc: "Mobile app UX/UI design",
      icon: Smartphone,
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mb-6">
            <Target className="w-7 h-7 text-green-600" />
          </div>

          <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
            Transparent Pricing
          </h2>

          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-3 mb-3">
              <p className="text-xl text-gray-600">
                Starting from {formatPrice(5000)} for brand identity
              </p>

              {loading && (
                <RefreshCw className="w-5 h-5 text-gray-400 animate-spin" />
              )}
            </div>

            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2">
              <span
                className={`text-sm font-medium ${
                  !showNaira ? "text-cyan-600" : "text-gray-500"
                }`}>
                USD
              </span>

              <button
                onClick={() => setShowNaira(!showNaira)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  showNaira ? "bg-cyan-600" : "bg-gray-200"
                }`}
                disabled={!exchangeRate || loading}>
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    showNaira ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>

              <span
                className={`text-sm font-medium ${
                  showNaira ? "text-cyan-600" : "text-gray-500"
                }`}>
                NGN
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pricingTiers.map((item, idx) => {
              const ItemIcon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}>
                  <ItemIcon className="w-8 h-8 text-gray-400 group-hover:text-cyan-600 transition-colors mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.label}
                  </h3>
                  <span className="text-cyan-600 text-sm font-thin">
                    Starting from
                  </span>
                  <div className="text-2xl font-light text-gray-900 mb-1">
                    {formatPrice(item.price)}
                    {showNaira && exchangeRate && (
                      <span className="block text-sm text-gray-500 mt-1">
                        ≈ ${item.price.toLocaleString()}
                      </span>
                    )}
                    {!showNaira && exchangeRate && (
                      <span className="block text-sm text-gray-500 mt-1">
                        ≈ ₦{(item.price * (exchangeRate || 0)).toLocaleString()}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-sm text-gray-500">
            {error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <p>
                {showNaira ? (
                  <>1 USD = {(exchangeRate || 0).toLocaleString()} NGN </>
                ) : (
                  <>1 NGN = {(1 / (exchangeRate || 1)).toFixed(6)} USD </>
                )}
                • Rates updated: {lastUpdated}
              </p>
            )}
            <p>Final quotes provided after consultation.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
