/*
  Change farmer information here.
  To add more farmers later, add more entries inside this farmers object.
  No database is required for this first version.
*/
const farmers = {
  "73788671056": {
    id: "73788671056",
    name: "Mr. Jagdish Zade",
    village: "Randha, Kh.",
    taluka: "Akole",
    district: "Ahilyanagar",
    totalLandHolding: "4.5 Acre",
    cropName: "Zinc Paddy",
    currentCropArea: "2 Acre",
    contactNo: "9860167554",
    biofortifiedVarietyGrown: "DRR-48",
    timeOfSowing: "3 June",
    transplanting: "25 July",
    varietyDevelopedBy: "ICAR - Indian Institute of Rice Research",
    seedTakenFrom: "Bharat-Plus Solutions",
    fertilizersUsed: "Urea 60 kg, Potash 60 kg",
    irrigation: "Rainwater",
  },
};

/*
  After publishing online, paste your public website URL here.
  Example: "https://your-site-name.vercel.app/"
  The QR code will use this URL plus /farmer/FARMER_ID.
  Do not use a localhost URL here.
*/
const publishedProfileUrl = "https://farmer-qr-profile.vercel.app/";

const defaultFarmerId = "73788671056";
const pathParts = window.location.pathname.split("/").filter(Boolean);
const farmerIdFromUrl = pathParts[0] === "farmer" ? pathParts[1] : "";
const qrFarmerIdFromUrl = pathParts[0] === "qr" ? pathParts[1] : "";
const selectedFarmerId = farmerIdFromUrl || qrFarmerIdFromUrl || defaultFarmerId;
const isQrView = pathParts[0] === "qr";
const isPublicProfileView = pathParts[0] === "farmer";
const farmer = farmers[selectedFarmerId];
const siteUrl = publishedProfileUrl.trim().replace(/\/+$/, "");
const isLocalProfileUrl =
  /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?(\/|$)/i.test(siteUrl);
const canGenerateQrCode = Boolean(isQrView && farmer && siteUrl && !isLocalProfileUrl);
const profileUrl = farmer ? `${siteUrl}/farmer/${farmer.id}` : "";

const detailItems = farmer
  ? [
      ["Farmer Name", farmer.name],
      ["Farmer ID", farmer.id],
      ["Village", farmer.village],
      ["Taluka", farmer.taluka],
      ["District", farmer.district],
      ["Total Land Holding", farmer.totalLandHolding],
      ["Crop Name", farmer.cropName],
      ["Current Crop Area", farmer.currentCropArea],
      ["Contact No", farmer.contactNo],
      ["Biofortified Variety Grown", farmer.biofortifiedVarietyGrown],
      ["Time of Sowing", farmer.timeOfSowing],
      ["Transplanting", farmer.transplanting],
      ["Variety Developed By", farmer.varietyDevelopedBy],
      ["Seed Taken From", farmer.seedTakenFrom],
      ["Fertilizers Used", farmer.fertilizersUsed],
      ["Irrigation", farmer.irrigation],
    ]
  : [];

document.getElementById("farmerName").textContent = farmer
  ? farmer.name
  : "Farmer Profile Not Found";
document.getElementById("farmerLocation").textContent = farmer
  ? `${farmer.village}, ${farmer.taluka}, ${farmer.district}`
  : "Please check the farmer ID in the profile URL.";
document.getElementById("profileUrl").textContent =
  canGenerateQrCode
    ? profileUrl
    : "Add the final public website URL in app.js after deployment to generate this farmer's QR code.";

if (isPublicProfileView) {
  document.body.classList.add("public-profile");
}

const detailsContainer = document.getElementById("farmerDetails");
detailItems.forEach(([label, value]) => {
  const card = document.createElement("article");
  const labelElement = document.createElement("p");
  const valueElement = document.createElement("p");

  card.className = "info-card";
  labelElement.className = "label";
  valueElement.className = "value";
  labelElement.textContent = label;
  valueElement.textContent = value;

  card.append(labelElement, valueElement);
  detailsContainer.appendChild(card);
});

const qrCodeElement = document.getElementById("qrCode");
const downloadButton = document.getElementById("downloadQr");
const qrPanel = document.getElementById("qrPanel");
const hasQrCodeLibrary = typeof QRCode === "function";

if (isPublicProfileView) {
  qrPanel.hidden = true;
} else {
  qrPanel.hidden = false;
}

if (canGenerateQrCode && hasQrCodeLibrary) {
  new QRCode(qrCodeElement, {
    text: profileUrl,
    width: 220,
    height: 220,
    colorDark: "#1f2a24",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
} else {
  qrCodeElement.className = "qr-setup-message";
  qrCodeElement.textContent = hasQrCodeLibrary
    ? "QR code will appear here after you add the public website URL in app.js. Do not use localhost."
    : "QR code library could not be loaded. Please check your internet connection and reload.";
  downloadButton.disabled = true;
}

downloadButton.addEventListener("click", () => {
  if (!canGenerateQrCode) {
    alert(
      "Add the final public website URL in app.js before downloading the QR code. Do not use localhost."
    );
    return;
  }

  const canvas = document.querySelector("#qrCode canvas");
  const image = document.querySelector("#qrCode img");
  const qrSource = canvas ? canvas.toDataURL("image/png") : image.src;

  const link = document.createElement("a");
  link.href = qrSource;
  link.download = `${farmer.id}-${farmer.name.replace(/\s+/g, "-").toLowerCase()}-qr-code.png`;
  link.click();
});

document.getElementById("printProfile").addEventListener("click", () => {
  window.print();
});
