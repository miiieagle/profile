function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (
    !name.match(
      /^[A-Za-z]*\s{1}[A-Za-z]*$)){/,
      (nameError.innerHTML = "Please enter your full name")
    )
  );
  return false;
}
