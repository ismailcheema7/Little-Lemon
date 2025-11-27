// src/components/BookingForm.js
import React, { useState } from "react";
import PropTypes from "prop-types";

const initialForm = {
  date: "",
  time: "",
  guests: 1,
  occasion: "Birthday",
};

function BookingForm({ onSubmit }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const times = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const validate = () => {
    const newErrors = {};
    if (!form.date) newErrors.date = "Please choose a date.";
    if (!form.time) newErrors.time = "Please choose a time.";
    if (form.guests < 1 || form.guests > 10) {
      newErrors.guests = "Guests must be between 1 and 10.";
    }
    if (!form.occasion) newErrors.occasion = "Please choose an occasion.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    if (onSubmit) {
      onSubmit(form);
    }
    setForm(initialForm);
  };

  return (
    <form
      aria-label="Table booking form"
      className="booking-form"
      onSubmit={handleSubmit}
    >
      {/* Date */}
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? "res-date-error" : undefined}
        />
        {errors.date && (
          <span id="res-date-error" className="error">
            {errors.date}
          </span>
        )}
      </div>

      {/* Time */}
      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={form.time}
          onChange={handleChange}
          aria-invalid={!!errors.time}
          aria-describedby={errors.time ? "res-time-error" : undefined}
        >
          <option value="">Select a time</option>
          {times.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.time && (
          <span id="res-time-error" className="error">
            {errors.time}
          </span>
        )}
      </div>

      {/* Guests */}
      <div className="form-field">
        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          name="guests"
          min="1"
          max="10"
          value={form.guests}
          onChange={handleChange}
          aria-invalid={!!errors.guests}
          aria-describedby={errors.guests ? "guests-error" : undefined}
        />
        {errors.guests && (
          <span id="guests-error" className="error">
            {errors.guests}
          </span>
        )}
      </div>

      {/* Occasion */}
      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={form.occasion}
          onChange={handleChange}
          aria-invalid={!!errors.occasion}
          aria-describedby={errors.occasion ? "occasion-error" : undefined}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
        {errors.occasion && (
          <span id="occasion-error" className="error">
            {errors.occasion}
          </span>
        )}
      </div>

      <button type="submit" className="primary-btn">
        Make your reservation
      </button>
    </form>
  );
}

BookingForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default BookingForm;
