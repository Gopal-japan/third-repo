document.getElementById('greetBtn').addEventListener('click', function() {
    document.getElementById('message').innerText = greetUser();
  });
  
  function greetUser() {
    return "Hello, welcome to the site!";
  }
  
  module.exports = { greetUser };
  