export default function Login() {
  return (
    <div>
      <h3>Login</h3>
      <form>
        <div>
          <input type="text" placeholder="username" />
        </div>
        <div>
          <input type="text" placeholder="password" />
        </div>
        <div>
          <button type="button" className="button primary-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
