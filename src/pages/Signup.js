function Signup() {
  return (
    <>
      <h1 class="text-center text-lg">Signup</h1>
      <form>
        <div class="input-group">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" placeholder="John Doe" />
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div class="input-group">
          <label for="dob">Date of birth</label>
          <input
            type="number"
            name="year"
            id="year"
            min="2007"
            max="2017"
            placeholder="2007"
          />
        </div>
        <div class="input-group">
          <label for="about">About yourself</label>
          <textarea
            name="textarea"
            id="about"
            cols="30"
            rows="10"
            placeholder="Tell us about yourself?"
          ></textarea>
        </div>
        <div class="input-group">
          <label for="achievements">Achievements</label>
          <textarea
            name="textarea"
            id="achievement"
            cols="30"
            rows="10"
            placeholder="Achievements? If yes, please describe them."
          ></textarea>
        </div>
        <div class="input-group">
          <label for="class">Grade</label>
          <select name="class" id="grade">
            <option value="" selected="">Select a grade</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
            <option value="IX">IX</option>
            <option value="X">X</option>
            <option value="XI">XI</option>
            <option value="XII">XII</option>
          </select>
        </div>
        <div class="input-group">
          <button type="submit">Submit</button>
        </div>
      </form>    
    </>
  );
}

export default Signup;
