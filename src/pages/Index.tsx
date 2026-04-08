import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
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

  return (
    <div className="min-h-screen" style={{ background: "var(--med-cream)" }}>
      <HeroSection />
      <AboutSection />
      <ServicesSection openService={openService} setOpenService={setOpenService} />
      <ReviewsSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <BookingSection
        bookingForm={bookingForm}
        setBookingForm={setBookingForm}
        submitted={submitted}
        handleBooking={handleBooking}
      />
    </div>
  );
}