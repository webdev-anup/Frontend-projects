const typeSelect = document.getElementById("typeSelect");
const themeToggle = document.getElementById("themeToggle");
const generateButton = document.getElementById("generateBtn");
const downloadButton = document.getElementById("downloadBtn");
const qrcodeDiv = document.getElementById("qrcode");
const message = document.getElementById("message");

const textGroup = document.getElementById("textGroup");
const emailGroup = document.getElementById("emailGroup");
const phoneGroup = document.getElementById("phoneGroup");
const wifiGroup = document.getElementById("wifiGroup");

const textInput = document.getElementById("textInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const wifiSsid = document.getElementById("wifiSsid");
const wifiPassword = document.getElementById("wifiPassword");
const wifiEncryption = document.getElementById("wifiEncryption");

let qrCode = null;
let currentType = "text";
let currentValue = "";
let darkMode = localStorage.getItem("qr-dark-mode") === "true";

const groups = {
  text: textGroup,
  email: emailGroup,
  phone: phoneGroup,
  wifi: wifiGroup,
};

const fields = {
  text: textInput,
  email: emailInput,
  phone: phoneInput,
  wifiSsid,
  wifiPassword,
  wifiEncryption,
};

function applyTheme() {
  document.body.classList.toggle("dark", darkMode);
  themeToggle.textContent = darkMode ? "☀️" : "🌙";
  themeToggle.setAttribute(
    "aria-label",
    darkMode ? "Switch to light mode" : "Switch to dark mode",
  );
}

function updateVisibleGroup() {
  Object.entries(groups).forEach(([key, group]) => {
    group.classList.toggle("hidden", key !== currentType);
  });
}

function getLabelForType(type) {
  switch (type) {
    case "email":
      return "email";
    case "phone":
      return "phone";
    case "wifi":
      return "Wi-Fi";
    case "text":
    default:
      return "text";
  }
}

function getQrValue() {
  switch (currentType) {
    case "email": {
      const email = emailInput.value.trim();
      return email ? `mailto:${email}` : "";
    }
    case "phone": {
      const phone = phoneInput.value.trim();
      return phone ? `tel:${phone}` : "";
    }
    case "wifi": {
      const ssid = wifiSsid.value.trim();
      if (!ssid) {
        return "";
      }
      const encryption = wifiEncryption.value;
      if (encryption === "nopass") {
        return `WIFI:T:nopass;S:${ssid};P:;H:false;;`;
      }
      return `WIFI:T:${encryption};S:${ssid};P:${wifiPassword.value};H:false;;`;
    }
    case "text":
    default:
      return textInput.value.trim();
  }
}

function generateQRCode() {
  const value = getQrValue();

  if (!value) {
    message.textContent = "Please enter the required information.";
    qrcodeDiv.innerHTML = "";
    downloadButton.disabled = true;
    currentValue = "";
    return;
  }

  message.textContent = `Generating ${getLabelForType(currentType)} QR code...`;
  qrcodeDiv.innerHTML = "";

  if (qrCode) {
    qrCode.clear();
  }

  qrCode = new QRCode(qrcodeDiv, {
    text: value,
    width: 220,
    height: 220,
    colorDark: darkMode ? "#f8fafc" : "#111827",
    colorLight: darkMode ? "#111827" : "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  currentValue = value;
  downloadButton.disabled = false;
  message.textContent = `QR code generated successfully for ${getLabelForType(currentType)}!`;
}

function downloadQRCode() {
  if (!qrCode) {
    message.textContent = "Generate a QR code before downloading.";
    return;
  }

  const canvas = qrcodeDiv.querySelector("canvas");
  if (!canvas) {
    message.textContent = "The QR code could not be downloaded.";
    return;
  }

  const link = document.createElement("a");
  link.download = `${currentType}-qrcode.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function handleEnterKey(event) {
  if (event.key === "Enter") {
    generateQRCode();
  }
}

applyTheme();
updateVisibleGroup();
generateQRCode();

typeSelect.addEventListener("change", (event) => {
  currentType = event.target.value;
  updateVisibleGroup();
  generateQRCode();
});

generateButton.addEventListener("click", generateQRCode);
downloadButton.addEventListener("click", downloadQRCode);
themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  localStorage.setItem("qr-dark-mode", darkMode);
  applyTheme();
  if (currentValue) {
    generateQRCode();
  }
});

Object.values(fields).forEach((field) => {
  field.addEventListener("keydown", handleEnterKey);
});
