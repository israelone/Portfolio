const loadContact = (content) => {
  const contactSection = document.createElement("div");
  const leftSection = () => {
    const inputs = [
      {
        name: "name",
        type: "text",
        placeholder: "Your Name",
      },
      {
        name: "email",
        type: "email",
        placeholder: "Your Email",
      },
    ];
    const contactFormSection = document.createElement("div");
    const contactForm = document.createElement("form");
    const formHeader = document.createElement("h2");
    const textAreaDiv = document.createElement("div");
    const submitDiv = document.createElement("div");
    const submitButton = document.createElement("button");
    const textArea = document.createElement("textarea");
    contactSection.append(contactFormSection);
    contactFormSection.append(contactForm);
    contactForm.append(formHeader);
    contactSection.id = "contact";
    contactFormSection.id = "contactFormSection";
    contactForm.id = "form";
    formHeader.textContent = "Send me an email";
    textAreaDiv.id = "textArea";
    textArea.rows = "5";
    textArea.cols = "50";
    submitButton.id = "submit";
    submitButton.type = "submit"
    // submitButton.form = "form";
    submitButton.value = "Submit";
    submitButton.innerText = "Submit";
    submitDiv.id = "submitDiv";
    submitDiv.append(submitButton);
    textAreaDiv.append(textArea);
    contactSection.append(contactFormSection);

    for (let x = 0; x < inputs.length; x++) {
      let inputDiv = document.createElement("div");
      let input = document.createElement("input");
      inputDiv.id = inputs[x].name;
      input.type = inputs[x].type;
      input.name = inputs[x].name;
      input.required = true;
      input.placeholder = inputs[x].placeholder;
      inputDiv.append(input);
      contactForm.append(inputDiv);
    }
    contactForm.append(textAreaDiv);
      contactForm.append(submitDiv);
    content.append(contactSection);
  };

  const rightSection = () => {
    const contactInfo = [
      {
        iconName: "fas fa-phone",
        text: "(251)287-4843",
      },
      {
        iconName: "far fa-envelope",
        text: "israel.lopez.dev@gmail.com",
      },
    ];

    const socialMediaIcons = [
      {
        iconName: "fab fa-github",
        link: "https://github.com/israelone",
      },
      {
        iconName: "fab fa-linkedin-in",
        link: "https://www.linkedin.com/in/israelone/",
      },
    ];

    const contactInfoSection = document.createElement("div");
    const logoDiv = document.createElement("div");
    const phoneAndEmailSection = document.createElement("div");
    const socialMediaSection = document.createElement("div");
    const logo = document.createElement("img");
    logo.src = "./logo.png";
    logo.alt = "Izzy Dev";
    contactInfoSection.id = "contactInfoSection";
    logoDiv.id = "logo";
    phoneAndEmailSection.id = "phoneAndEmail";
    socialMediaSection.id = "socialMedia";
    logoDiv.append(logo);
    contactInfoSection.append(logoDiv);
    contactInfoSection.append(phoneAndEmailSection);
    contactInfoSection.append(socialMediaSection);
    
    for (let x = 0; x < contactInfo.length; x++) {
      let icon = document.createElement("i");
      let span = document.createElement("span");
      icon.className = contactInfo[x].iconName;
      span.innerText = contactInfo[x].text;
      phoneAndEmailSection.append(icon);
      phoneAndEmailSection.append(span);
    }
    for (let i = 0; i < socialMediaIcons.length; i++) {
      let icon = document.createElement("i");
      let anchorLink = document.createElement("a");
      icon.className = socialMediaIcons[i].iconName;
      anchorLink.href = socialMediaIcons[i].link;
      anchorLink.append(icon);
      socialMediaSection.append(anchorLink);
    }
    contactSection.append(contactInfoSection);
  };
  leftSection();
  rightSection();
  
};

export { loadContact };
