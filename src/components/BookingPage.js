// src/components/BookingPage.js
import React, { useState } from "react";
import BookingForm from "./BookingForm";

function BookingPage() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleBookingSubmit = (formData) => {
    // Here you could call a fake API
    console.log("Booking submitted:", formData);
    setSubmittedData(formData);
  };

  return (
    <section className="booking-page">
      <h2>Reserve a table</h2>
      <BookingForm onSubmit={handleBookingSubmit} />
      {submittedData && (
        <p className="success-message" role="status">
          Thank you. Your table for {submittedData.guests} guests on{" "}
          {submittedData.date} at {submittedData.time} is requested.
        </p>
      )}
    </section>
  );
}

export default BookingPage;
