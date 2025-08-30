// components/ContactFormSection.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { SelectNative } from "./ui/select-native";
import MultipleSelector, { Option } from "./ui/multiselect";
import { projectTypes } from "@/const";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [selectedTypes, setSelectedTypes] = useState<Option[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (types: Option[]) => {
    setSelectedTypes(types);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          budget: formData.budget,
          timeline: formData.timeline,
          projectTypes: selectedTypes
            .map((type) => type.value || type.label)
            .join(", "),
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "",
          timeline: "",
          message: "",
        });
        setSelectedTypes([]);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.budget &&
    formData.timeline &&
    formData.message &&
    selectedTypes.length > 0;

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Send className="w-5 h-5 text-white" />
          </motion.div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Let&apos;s work together
          </h2>
          <p className="text-gray-600 text-sm">
            Tell us about your project and we&apos;ll get back to you within 24
            hours
          </p>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <p className="text-green-800 text-sm">
              Thanks for your message! We&apos;ll be in touch soon.
            </p>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <p className="text-red-800 text-sm">
              Something went wrong. Please try again or email us directly.
            </p>
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                className="border-gray-200 focus:border-gray-900 focus:ring-gray-900 rounded-xl"
                required
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleInputChange}
                className="border-gray-200 focus:border-gray-900 focus:ring-gray-900 rounded-xl"
                required
              />
            </div>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label
              htmlFor="company"
              className="text-sm font-medium text-gray-700">
              Company / Organization
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Your company name"
              value={formData.company}
              onChange={handleInputChange}
              className="border-gray-200 focus:border-gray-900 focus:ring-gray-900 rounded-xl"
            />
          </div>

          {/* Budget & Timeline Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="budget"
                className="text-sm font-medium text-gray-700">
                Project Budget <span className="text-red-500">*</span>
              </Label>
              <SelectNative
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="border-gray-200 focus:border-gray-900 focus:ring-gray-900 rounded-xl bg-white"
                required>
                <option value="" disabled>
                  Select budget range
                </option>
                <option value="$500 - $1K">$500 - $1K</option>
                <option value="$1K - $5K">$1K - $5K</option>
                <option value="$5K - $20K">$5K - $20K</option>
                <option value="$20K+">$20K+</option>
              </SelectNative>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="timeline"
                className="text-sm font-medium text-gray-700">
                Timeline <span className="text-red-500">*</span>
              </Label>
              <SelectNative
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="border-gray-200 focus:border-gray-900 focus:ring-gray-900 rounded-xl bg-white"
                required>
                <option value="" disabled>
                  Select timeline
                </option>
                <option value="ASAP">ASAP</option>
                <option value="1-2 months">1-2 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6+ months">6+ months</option>
              </SelectNative>
            </div>
          </div>

          {/* Project Types */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Project Type <span className="text-red-500">*</span>
            </Label>
            <MultipleSelector
              value={selectedTypes}
              onChange={handleTypeChange}
              defaultOptions={projectTypes}
              placeholder="Select project types..."
              className="border-gray-200 focus:border-gray-900 rounded-xl"
              emptyIndicator={
                <p className="text-center text-sm text-gray-500 py-2">
                  No results found
                </p>
              }
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-sm font-medium text-gray-700">
              Project Details <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project goals, challenges, and what you're hoping to achieve..."
              value={formData.message}
              onChange={handleInputChange}
              className="border-gray-200 focus:border-gray-900 focus:ring-gray-900 rounded-xl min-h-[120px] resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-all duration-200 flex items-center justify-center gap-2 ${
              isFormValid && !isSubmitting
                ? "bg-gray-900 hover:bg-gray-800 shadow-lg shadow-gray-900/20"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            whileHover={isFormValid && !isSubmitting ? { y: -1 } : {}}
            whileTap={isFormValid && !isSubmitting ? { scale: 0.98 } : {}}>
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </motion.button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            We&apos;ll never share your information with third parties
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactFormSection;
