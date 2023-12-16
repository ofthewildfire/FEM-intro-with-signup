const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const email = document.getElementById("email")
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const password = document.getElementById("password")
const btn = document.querySelector(".form__btn")
const err_icon = document.querySelector(".sign-up__form-err-icon")
const msg_status = document.querySelector(".sign-up__form--err-msg")

btn.addEventListener("click", (e) => {
	e.preventDefault()

	// const labelFor = document.querySelector("label")
	if (!firstname.value || firstname.value === null) {
		const labelFor = document.querySelector("label")
		labelFor.children[2].style.display = "none"
		labelFor.lastElementChild.style.color = "#ff7a7a"
		labelFor.classList.remove("sign-up__form--success")
		err_icon.style.display = "block"
		msg_status.textContent = "First Name cannot be empty"
		labelFor.classList.add("sign-up__form--err")
	} else {
		const labelFor = document.querySelector("label")
		err_icon.style.display = "none"
		labelFor.children[2].style.display = "block"
		msg_status.textContent = "Success"
		msg_status.style.color = "#38cc8c"
		labelFor.classList.remove("sign-up__form--err")
		labelFor.classList.add("sign-up__form--success")
	}

	if (!lastname.value || lastname.value === null) {
		const labelFor = document.querySelector('label[for="lastname"]')
		labelFor.children[2].style.display = "none"
		labelFor.lastElementChild.style.color = "#ff7a7a"
		labelFor.classList.remove("sign-up__form--success")
		labelFor.children[1].style.display = "block"
		labelFor.lastElementChild.textContent = "Last Name cannot be empty"
		labelFor.classList.add("sign-up__form--err")
	} else {
		const labelFor = document.querySelector('label[for="lastname"]')
		labelFor.children[1].style.display = "none"
		labelFor.children[2].style.display = "block"
		labelFor.lastElementChild.textContent = "Success"
		labelFor.lastElementChild.style.color = "#38cc8c"
		labelFor.classList.add("sign-up__form--success")
		labelFor.classList.remove("sign-up__form--err")
	}

	if (!password.value || password.value === null) {
		const labelFor = document.querySelector('label[for="password"]')
		labelFor.children[2].style.display = "none"
		labelFor.lastElementChild.style.color = "#ff7a7a"
		labelFor.classList.remove("sign-up__form--success")
		labelFor.children[1].style.display = "block"
		labelFor.lastElementChild.textContent = "Password cannot be empty"
		labelFor.classList.add("sign-up__form--err")
	} else {
		const labelFor = document.querySelector('label[for="password"]')
		labelFor.children[1].style.display = "none"
		labelFor.children[2].style.display = "block"
		labelFor.lastElementChild.textContent = "Success"
		labelFor.lastElementChild.style.color = "#38cc8c"
		labelFor.classList.remove("sign-up__form--err")
		labelFor.classList.add("sign-up__form--success")
		labelFor.classList.remove("sign-up__form--err")
	}

	if (!emailRegex.test(email.value)) {
		const labelFor = document.querySelector('label[for="email"]')
		labelFor.children[2].style.display = "none"
		labelFor.lastElementChild.style.color = "#ff7a7a"
		labelFor.classList.remove("sign-up__form--success")
		labelFor.children[1].style.display = "block"
		labelFor.lastElementChild.textContent = "Looks like this is not an email"
		labelFor.classList.add("sign-up__form--err")
	} else {
		const labelFor = document.querySelector('label[for="email"]')
		labelFor.children[1].style.display = "none"
		labelFor.children[2].style.display = "block"
		labelFor.lastElementChild.textContent = "Success"
		labelFor.lastElementChild.style.color = "#38cc8c"
		labelFor.classList.add("sign-up__form--success")
		labelFor.classList.remove("sign-up__form--err")
	}
})
