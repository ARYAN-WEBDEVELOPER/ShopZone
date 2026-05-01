import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <textarea
          placeholder="Write your message..."
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          required
        />

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}