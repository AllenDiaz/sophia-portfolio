"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SectionContainer } from "@/components/layout/section-container";
import { validators } from "@/lib/utils";
import type { ContactForm as ContactFormData, ContactFormErrors } from "@/types";

export function ContactForm() {
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    practiceName: "",
    message: "",
  });

  const [errors, setErrors] = React.useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validators.email(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone && !validators.phone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // TODO: Replace with actual API call
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        practiceName: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <SectionContainer variant="narrow">
      <Card variant="elevated">
        <CardHeader>
          <CardTitle className="text-3xl">Get In Touch</CardTitle>
          <CardDescription className="text-base">
            Ready to streamline your practice? Fill out the form below and I'll get back to you
            within 24 hours.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
                placeholder="Dr. John Smith"
              />
              
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                placeholder="(555) 123-4567"
                helperText="Optional"
              />
              
              <Input
                label="Practice Name"
                name="practiceName"
                value={formData.practiceName}
                onChange={handleChange}
                placeholder="Smith Vision Center"
                helperText="Optional"
              />
            </div>

            <Textarea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              required
              placeholder="Tell me about your practice and how I can help..."
              rows={6}
            />

            {submitStatus === "success" && (
              <div
                className="rounded-lg bg-[hsl(var(--success))]/10 p-4 text-sm text-[hsl(var(--success))]"
                role="alert"
              >
                Thank you for your message! I'll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === "error" && (
              <div
                className="rounded-lg bg-[hsl(var(--error))]/10 p-4 text-sm text-[hsl(var(--error))]"
                role="alert"
              >
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
            </Button>
          </form>
        </CardContent>
      </Card>
    </SectionContainer>
  );
}
