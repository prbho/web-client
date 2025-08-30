"use client";

import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";
import { Calendar, Clock, Video } from "lucide-react";

export default function CalendlyWidget() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        {/* Header Section */}
        <div className="px-8 py-6 border-b border-gray-50">
          <div className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mx-auto">
              <Calendar className="w-5 h-5 text-white" />
            </motion.div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Schedule a Discovery Call
              </h2>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                Let&apos;s discuss your project in detail. Choose a time that
                works best for you.
              </p>
            </div>

            {/* Quick Info Cards */}
            {/* <div className="flex flex-wrap justify-center gap-4 mt-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700 font-medium">
                  30 minutes
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                <Video className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700 font-medium">
                  Video call
                </span>
              </motion.div>
            </div> */}
          </div>
        </div>

        {/* Calendly Widget Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative bg-white">
          {/* Calendly Widget */}
          <div className="calendly-container border-t">
            <InlineWidget
              url="https://calendly.com/letstalk-cofellow"
              styles={{
                height: "650px",
                width: "100%",
              }}
            />
          </div>
        </motion.div>

        {/* Footer */}
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Can&apos;t find a suitable time?{" "}
              <a
                href="mailto:contact@yourcompany.com"
                className="text-blue-600 hover:text-blue-700 font-medium">
                Email us directly
              </a>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Additional CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-6 text-center">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <h3 className="text-sm font-semibold text-blue-900 mb-1">
            What to expect in our call
          </h3>
          <p className="text-sm text-blue-700">
            We&apos;ll discuss your project requirements, timeline, and how we
            can help bring your vision to life.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
