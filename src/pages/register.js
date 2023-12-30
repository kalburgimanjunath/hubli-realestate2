export default function Register() {
  return (
    <div>
      <h3>Register</h3>
      <form>
        <div>
          <input type="text" placeholder="email" />
        </div>
        <div>
          <input type="text" placeholder="username" />
        </div>
        <div>
          <input type="text" placeholder="password" />
        </div>
        <div>
          <button type="button" className="button primary-button" />
        </div>
      </form>
    </div>
  );
}
