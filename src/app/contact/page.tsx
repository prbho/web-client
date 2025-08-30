"use client";

import CalendlyWidget from "@/components/CalendlyWidget";
import ContactFormSection from "@/components/ContactFormSection";
import ContactInfo from "@/components/ContactInfo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
  const [mode, setMode] = useState<"form" | "calendly">("form");
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <main className="bg-white text-slate-900 overflow-hidden">
      <div className="min-h-[75vh] top-0 flex flex-col items-center justify-center px-6 md:px-12 py-32 bg-gradient-to-br from-cyan-50 to-rose-50 absolute w-full"></div>

      <section className="relative min-h-[60vh] gap-24 grid grid-cols-2 justify-center px-6 md:px-12 py-32 max-w-7xl mx-auto">
        <div>
          <motion.div
            style={{ y: headerY, opacity: headerOpacity }}
            initial="hidden"
            animate="visible">
            <motion.div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600 mb-8 border border-gray-100">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Let&apos;s Talk!
            </motion.div>

            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Your Vision,
              <span className="text-4xl md:text-5xl"> 👋</span>
              <>
                <br />
                <span
                  className={`bg-gradient-to-r from-cyan-600 to-slate-600 bg-clip-text text-transparent font-medium`}>
                  Our Mission
                </span>
              </>
            </motion.h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Choose how you&apos;d like to
              connect with us and let&apos;s start building something
              extraordinary together.
            </p>
          </motion.div>

          <div className="max-w-4xl">
            <ContactInfo />
          </div>
          {/* Additional Info */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}>
            <div className="inline-flex items-center gap-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-700 font-medium">
                Currently accepting new projects
              </span>
            </div>
          </motion.div>
        </div>

        <div className="w-full">
          <motion.div>
            <Tabs defaultValue="tab-1">
              <TabsList className="gap-1 bg-transparent">
                <TabsTrigger
                  value="tab-1"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md data-[state=active]:shadow-none">
                  Send a Message
                </TabsTrigger>
                <TabsTrigger
                  value="tab-2"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md data-[state=active]:shadow-none">
                  Book a Call
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tab-1">
                <ContactFormSection />
              </TabsContent>
              <TabsContent value="tab-2" className="w-full">
                <CalendlyWidget />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
