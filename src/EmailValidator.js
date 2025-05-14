C

const EmailValidator = () => {
  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    // Basic email regex pattern
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      alert('Email is valid!');
    } else {
      alert('Invalid email. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Validate</button>
    </form>
  );
};

export default EmailValidator;