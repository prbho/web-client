"use client";

import CalendlyWidget from "@/components/CalendlyWidget";
import ContactFormSection from "@/components/ContactFormSection";
import ContactInfo from "@/components/ContactInfo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useScroll, useTransform } from "framer-motion";

const ContactPage = () => {
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <main className="bg-white text-slate-900 overflow-hidden">
      {/* Background gradient */}
      <div className="min-h-[75vh] top-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32 bg-gradient-to-br from-cyan-50 to-rose-50 absolute w-full"></div>

      <section className="relative min-h-[60vh] flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 justify-center px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32 max-w-7xl mx-auto">
        {/* Left Column - Header and Contact Info */}
        <div className="order-1 lg:order-none">
          <motion.div
            style={{ y: headerY, opacity: headerOpacity }}
            initial="hidden"
            animate="visible">
            <motion.div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600 my-6 sm:mt-0 border border-gray-100">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Let&apos;s Talk!
            </motion.div>

            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight">
              Your Vision,
              <span className="text-3xl sm:text-4xl md:text-5xl"> 👋</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-600 to-slate-600 bg-clip-text text-transparent font-medium">
                Our Mission
              </span>
            </motion.h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mb-8 sm:mb-12">
              Ready to bring your ideas to life? Choose how you&apos;d like to
              connect with us and let&apos;s start building something
              extraordinary together.
            </p>
          </motion.div>

          {/* Contact Info - Hidden on mobile, shown on larger screens */}
          <div className="hidden sm:block max-w-4xl mb-6 lg:mb-8">
            <ContactInfo />
          </div>

          {/* Additional Info */}
          <motion.div
            className="hidden sm:block"
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

        {/* Right Column - Tabs and Forms */}
        <div className="w-full order-2 lg:order-none">
          <motion.div>
            <Tabs defaultValue="tab-1" className="w-full">
              <TabsList className="grid w-full grid-cols-2 gap-1 bg-transparent mb-6">
                <TabsTrigger
                  value="tab-1"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md data-[state=active]:shadow-none text-sm sm:text-base">
                  Send a Message
                </TabsTrigger>
                <TabsTrigger
                  value="tab-2"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md data-[state=active]:shadow-none text-sm sm:text-base">
                  Book a Call
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tab-1" className="w-full">
                <ContactFormSection />
              </TabsContent>

              <TabsContent value="tab-2" className="w-full">
                <CalendlyWidget />
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Contact Info - Shown on mobile only */}
          <div className="sm:hidden mt-8 pt-8 border-t border-gray-200">
            <ContactInfo />

            {/* Additional Info for mobile */}
            <motion.div
              className="mt-6"
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
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
