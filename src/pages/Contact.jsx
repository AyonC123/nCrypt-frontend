import { useState } from 'react'

function Contact() {
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")

  return (
    <>
      <h1 className="text-center text-lg">Signup</h1>
      <h3>support@exla.net</h3>
      <form onSubmit={signup}>
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
            onChange={(e) => setEmail(e.value)}
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
