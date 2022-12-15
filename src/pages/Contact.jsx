import { useState } from "react";

import "../App.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <h1 className="text-center text-3xl font-bold">Contact</h1>
      <h3 className="text-center">support@rev.com</h3>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.value)}
            required
          />
        </div>
        <div class="input-group">
          <label for="content">Content</label>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.value)}
          ></textarea>
        </div>
        <div className="input-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Contact;
