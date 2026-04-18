import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BookingSection from "@/components/BookingSection";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".section-reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Index() {
  useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openService, setOpenService] = useState<number | null>(null);
  const [bookingForm, setBookingForm] = useState({ name: "", phone: "", type: "office", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleBooking(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleBookOnline() {
    setBookingForm((prev) => ({ ...prev, type: "online" }));
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--med-cream)" }}>
      <HeroSection />
      <AboutSection />
      <ServicesSection openService={openService} setOpenService={setOpenService} onBookOnline={handleBookOnline} />
      <BookingSection
        bookingForm={bookingForm}
        setBookingForm={setBookingForm}
        submitted={submitted}
        handleBooking={handleBooking}
      />
    </div>
  );
}