import { useState } from "react";
import "./Reservation.css";
import bg from "../../assets/images/restaurant-interior2.jpg";
import branch from "../../assets/images/branch2.png";

const HOURS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const MINUTES = ["00", "15", "30", "45"];
const GUESTS = [1, 2, 3, 4, 5, 6, 7, 8];

const OPEN = 11 * 60 + 30;      // 11:30 AM
const LAST_SEATING = 21 * 60 + 30; // 9:30 PM

// today's date as YYYY-MM-DD (used so past dates can't be picked)
function todayString() {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

// 7 : 30 : PM  ->  minutes since midnight (1170)
function toMinutes(hour, minute, period) {
  let h = Number(hour) % 12;
  if (period === "PM") h += 12;
  return h * 60 + Number(minute);
}

// FAKE availability: Fri/Sat evenings are full for groups bigger than 4.
// Later this will be replaced by a real request to a server.
function checkAvailability(date, minutes, guests) {
  const day = new Date(`${date}T00:00:00`).getDay(); // 5 = Fri, 6 = Sat
  const isWeekend = day === 5 || day === 6;
  const isPeak = minutes >= 18 * 60 && minutes <= 21 * 60;
  return !(isWeekend && isPeak && Number(guests) > 4);
}

function formatDate(date) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function Reservation() {
  const [form, setForm] = useState({
    date: todayString(),
    hour: "7",
    minute: "00",
    period: "PM",
    guests: "2",
  });
  const [contact, setContact] = useState({ phone: "", email: "" });
  const [step, setStep] = useState("search"); // search | available | unavailable | confirmed
  const [error, setError] = useState("");
  const [bookingRef, setBookingRef] = useState("");

  const timeLabel = `${form.hour}:${form.minute} ${form.period}`;

  // runs whenever a date/time/guests field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStep("search");
    setError("");
  };

  const handleContactChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // "Find a table"
  const handleFind = (e) => {
    e.preventDefault();

    if (!form.date) {
      setError("Please choose a date.");
      return;
    }

    const minutes = toMinutes(form.hour, form.minute, form.period);

    if (minutes < OPEN || minutes > LAST_SEATING) {
      setError("We're open daily 11:30 AM – 10:00 PM. Last seating is 9:30 PM.");
      return;
    }

    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    if (form.date === todayString() && minutes <= nowMinutes) {
      setError("That time has already passed today. Please pick a later time.");
      return;
    }

    setError("");
    setStep(checkAvailability(form.date, minutes, form.guests) ? "available" : "unavailable");
  };

  // "Confirm booking"
  const handleConfirm = (e) => {
    e.preventDefault();

    const phoneDigits = contact.phone.replace(/\D/g, "");
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email);

    if (phoneDigits.length < 10) {
      setError("Please enter a valid mobile number (at least 10 digits).");
      return;
    }
    if (!emailOk) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setBookingRef("YG-" + Math.floor(1000 + Math.random() * 9000));
    setStep("confirmed");
  };

  const startOver = () => {
    setContact({ phone: "", email: "" });
    setError("");
    setStep("search");
  };

  const summary = (
    <ul className="reservation__summary">
      <li><span>Date</span>{formatDate(form.date)}</li>
      <li><span>Time</span>{timeLabel}</li>
      <li>
        <span>Guests</span>
        {form.guests} {Number(form.guests) === 1 ? "guest" : "guests"}
      </li>
    </ul>
  );

  return (
    <section id="reservation" className="reservation">
      {/* left red panel */}
      <div className="reservation__left">
        <h2>
          Reserve
          <br />
          a table
        </h2>
        <p className="reservation__jp jp">テーブルを予約する</p>
        <p className="reservation__lead">
          We'd love to host you.
          <br />
          Book your table and we'll take care of the rest.
        </p>
        <img className="reservation__branch" src={branch} alt="" />
      </div>

      {/* right photo + card */}
      <div className="reservation__right" style={{ backgroundImage: `url(${bg})` }}>
        <div className="reservation__card">
          {/* STEP 1: search */}
          {step === "search" && (
            <form onSubmit={handleFind} noValidate>
              <label className="reservation__field">
                <span>Date</span>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  min={todayString()}
                  onChange={handleChange}
                />
              </label>

              <div className="reservation__field">
                <span>Time</span>
                <div className="reservation__time">
                  <select name="hour" value={form.hour} onChange={handleChange} aria-label="Hour">
                    {HOURS.map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                  <select name="minute" value={form.minute} onChange={handleChange} aria-label="Minutes">
                    {MINUTES.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <select name="period" value={form.period} onChange={handleChange} aria-label="AM or PM">
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>

              <label className="reservation__field">
                <span>Guests</span>
                <select name="guests" value={form.guests} onChange={handleChange}>
                  {GUESTS.map((g) => (
                    <option key={g} value={g}>
                      {g} {g === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </label>

              {error && <p className="reservation__error">{error}</p>}

              <button type="submit" className="reservation__btn">
                Find a table
              </button>
            </form>
          )}

          {/* STEP 2a: available -> ask for contact */}
          {step === "available" && (
            <form onSubmit={handleConfirm} noValidate>
              <p className="reservation__status reservation__status--ok">
                ✓ Great news, a table is available!
              </p>
              {summary}

              <label className="reservation__field">
                <span>Mobile number</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={contact.phone}
                  onChange={handleContactChange}
                />
              </label>

              <label className="reservation__field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={contact.email}
                  onChange={handleContactChange}
                />
              </label>

              {error && <p className="reservation__error">{error}</p>}

              <button type="submit" className="reservation__btn">
                Confirm booking
              </button>
              <button type="button" className="reservation__link" onClick={startOver}>
                Change details
              </button>
            </form>
          )}

          {/* STEP 2b: unavailable */}
          {step === "unavailable" && (
            <div>
              <p className="reservation__status reservation__status--no">
                Sorry, we're fully booked at that time.
              </p>
              {summary}
              <p className="reservation__note">
                Please try a different time or a smaller party.
              </p>
              <button type="button" className="reservation__btn" onClick={startOver}>
                Try another time
              </button>
            </div>
          )}

          {/* STEP 3: confirmed */}
          {step === "confirmed" && (
            <div>
              <p className="reservation__status reservation__status--ok">
                ✓ Your booking is confirmed
              </p>
              <p className="reservation__ref">Booking ref: {bookingRef}</p>
              {summary}
              <p className="reservation__note">
                A confirmation will be sent to {contact.email}. We can't wait to
                welcome you to YŪGEN.
              </p>
              <button type="button" className="reservation__btn" onClick={() => {
                setContact({ phone: "", email: "" });
                setStep("search");
              }}>
                Make another booking
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Reservation;