/*
  Change farmer information here.
  To add more farmers later, add more entries inside this farmers object.
  No database is required for this first version.
*/
const farmers = {
  "73788671056": {
    routeId: "73788671056",
    id: "73788671056",
    name: "Mr. Jagdish Zade",
    photo: "/images/Jagdish%20sir.jpeg",
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
    seedTakenFrom: "HarvestPlus Solutions",
    fertilizersUsed: "Urea 60 kg, Potash 60 kg",
    irrigation: "Rainwater",
  },
  "thakubai-sampat-lore": {
    routeId: "thakubai-sampat-lore",
    id: "",
    name: "Thakubai Sampat Lore",
    photo: "/images/Thakubai.jpeg",
    showFullPhoto: true,
    village: "Randha",
    taluka: "Akole",
    district: "Ahilyanagar",
    totalLandHolding: "6 Acre",
    cropName: "Zinc Paddy",
    currentCropArea: "1 Acre",
    contactNo: "",
    biofortifiedVarietyGrown: "DRR-48",
    timeOfSowing: "5 June",
    transplanting: "22 July",
    varietyDevelopedBy: "ICAR - Indian Institute of Rice Research",
    seedTakenFrom: "HarvestPlus Solutions",
    fertilizersUsed: "Urea 30 kg, Potash 30 kg",
    irrigation: "Rainwater",
  },
  "11103904904": {
    routeId: "11103904904",
    id: "11103904904",
    name: "Ajit Lakshman Bhangare",
    photo: "/images/Ajit%20Sir.jpeg",
    showFullPhoto: true,
    village: "Khadaki Bk",
    taluka: "Akole",
    district: "Ahilyanagar",
    totalLandHolding: "5 Acre",
    cropName: "Zinc Paddy",
    currentCropArea: "3 Acre",
    contactNo: "9403038591",
    biofortifiedVarietyGrown: "DRR-48",
    timeOfSowing: "17 June",
    transplanting: "22 July",
    varietyDevelopedBy: "ICAR - Indian Institute of Rice Research",
    seedTakenFrom: "HarvestPlus Solutions",
    fertilizersUsed: "Urea 105 kg, Potash 100 kg",
    irrigation: "Rainwater",
  },
  "25913065766": {
    routeId: "25913065766",
    id: "25913065766",
    name: "Ramaji Raghu Bhangare",
    photo: "/images/Farmer%20pic.jpeg",
    village: "Khadaki BK",
    taluka: "Akole",
    district: "Ahilyanagar",
    totalLandHolding: "1 Acre",
    cropName: "Rice",
    currentCropArea: "",
    contactNo: "9623259261",
    biofortifiedVarietyGrown: "DRR-48",
    timeOfSowing: "25/06/2026",
    transplanting: "26/07/2026",
    varietyDevelopedBy: "ICAR - Indian Institute of Rice Research",
    seedTakenFrom: "HarvestPlus Solutions",
    fertilizersUsed: "Urea 80 kg",
    irrigation: "River Water",
  },
  "84483846277": {
    routeId: "84483846277",
    id: "84483846277",
    name: "Dyandev Bhika Bande",
    photo: "/images/Farmer%20pic.jpeg",
    village: "Khadaki BK",
    taluka: "Akole",
    district: "Ahilyanagar",
    totalLandHolding: "1.9100 Acre",
    cropName: "Rice",
    currentCropArea: "0.800 Acre",
    contactNo: "8328642211",
    biofortifiedVarietyGrown: "DRR-48",
    timeOfSowing: "01/06/2026",
    transplanting: "02/07/2026",
    varietyDevelopedBy: "ICAR - Indian Institute of Rice Research",
    seedTakenFrom: "HarvestPlus Solutions",
    fertilizersUsed: "Urea 120 kg",
    irrigation: "River Water",
  },
  "28011481088": {
    routeId: "28011481088",
    id: "28011481088",
    name: "Laxman Vitthal Bhangare",
    photo: "/images/Farmer%20pic.jpeg",
    village: "Khadaki BK",
    taluka: "Akole",
    district: "Ahilyanagar",
    totalLandHolding: "1.100 Acre",
    cropName: "Rice",
    currentCropArea: "0.06 Acre",
    contactNo: "9404235383",
    biofortifiedVarietyGrown: "DRR-48",
    timeOfSowing: "05/06/2026",
    transplanting: "07/07/2026",
    varietyDevelopedBy: "ICAR - Indian Institute of Rice Research",
    seedTakenFrom: "HarvestPlus Solutions",
    fertilizersUsed: "Urea 20 kg",
    irrigation: "Rain Water",
  },
  "36587296912": {
    routeId: "36587296912",
    id: "36587296912",
    name: "Laxman Kushaba Bhangare",
    photo: "/images/Farmer%20pic.jpeg",
    village: "Khadaki BK",
    taluka: "Akole",
    district: "Ahilyanagar",
    totalLandHolding: "0.37 Acre",
    cropName: "Rice",
    currentCropArea: "0.37 Acre",
    contactNo: "9420263164",
    biofortifiedVarietyGrown: "DRR-48",
    timeOfSowing: "02/06/2026",
    transplanting: "01/07/2026",
    varietyDevelopedBy: "ICAR - Indian Institute of Rice Research",
    seedTakenFrom: "HarvestPlus Solutions",
    fertilizersUsed: "Urea 20 kg",
    irrigation: "Rain Water",
  },
  "47750735485": {
    routeId: "47750735485",
    id: "47750735485",
    name: "Budha Dunda Bande",
    photo: "/images/Farmer%20pic.jpeg",
    village: "Khadaki BK",
    taluka: "Akole",
    district: "Ahilyanagar",
    totalLandHolding: "0.56.50 Acre",
    cropName: "Rice",
    currentCropArea: "0.30.50 Acre",
    contactNo: "9403738233",
    biofortifiedVarietyGrown: "DRR-48",
    timeOfSowing: "20/06/2026",
    transplanting: "27/07/2026",
    varietyDevelopedBy: "ICAR - Indian Institute of Rice Research",
    seedTakenFrom: "HarvestPlus Solutions",
    fertilizersUsed: "Urea 30 kg",
    irrigation: "Rain Water",
  },
  "93848408587": {
    routeId: "93848408587",
    id: "93848408587",
    name: "Budha Bhau Bhangare",
    photo: "/images/Farmer%20pic.jpeg",
    village: "Khadaki BK",
    taluka: "Akole",
    district: "Ahilyanagar",
    totalLandHolding: "4.01.59 Acre",
    cropName: "Rice",
    currentCropArea: "0.8000 Acre",
    contactNo: "9579350585",
    biofortifiedVarietyGrown: "DRR-48",
    timeOfSowing: "30/05/2026",
    transplanting: "25/06/2026",
    varietyDevelopedBy: "ICAR - Indian Institute of Rice Research",
    seedTakenFrom: "HarvestPlus Solutions",
    fertilizersUsed: "Urea 100 kg",
    irrigation: "River Water",
  },
  "85959716937": {
    routeId: "85959716937",
    id: "85959716937",
    name: "Namdev Ganga Bhangare",
    photo: "/images/Farmer%20pic.jpeg",
    village: "Khadaki BK",
    taluka: "Akole",
    district: "Ahilyanagar",
    totalLandHolding: "0.35 Acre",
    cropName: "Rice",
    currentCropArea: "0.20 Acre",
    contactNo: "9421965784",
    biofortifiedVarietyGrown: "DRR-48",
    timeOfSowing: "03/07/2026",
    transplanting: "02/08/2026",
    varietyDevelopedBy: "ICAR - Indian Institute of Rice Research",
    seedTakenFrom: "HarvestPlus Solutions",
    fertilizersUsed: "Urea 50 kg",
    irrigation: "Rain Water",
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
const currentView = document.body.dataset.view || "public";
const isQrView = currentView === "qr";
const farmer = farmers[selectedFarmerId];
const siteUrl = publishedProfileUrl.trim().replace(/\/+$/, "");
const isLocalProfileUrl =
  /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?(\/|$)/i.test(siteUrl);
const canGenerateQrCode = Boolean(isQrView && farmer && siteUrl && !isLocalProfileUrl);
const profileUrl = farmer ? `${siteUrl}/farmer/${encodeURIComponent(farmer.routeId)}` : "";
const qrImageUrl = canGenerateQrCode
  ? `https://api.qrserver.com/v1/create-qr-code/?size=260x260&format=png&margin=12&data=${encodeURIComponent(
      profileUrl
    )}`
  : "";
const downloadQrImageUrl = canGenerateQrCode
  ? `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&format=png&margin=40&data=${encodeURIComponent(
      profileUrl
    )}`
  : "";

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

const farmerPhoto = document.getElementById("farmerPhoto");
if (farmerPhoto) {
  if (farmer?.photo) {
    farmerPhoto.src = farmer.photo;
    farmerPhoto.alt = `${farmer.name} profile photo`;
    if (farmer.showFullPhoto) {
      farmerPhoto.classList.add("uncropped-photo");
    }
  } else {
    farmerPhoto.remove();
  }
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

if (!isQrView) {
  document.body.classList.add("public-profile");
}

if (isQrView) {
  const qrCodeImage = document.getElementById("qrCodeImage");
  const profileUrlElement = document.getElementById("profileUrl");
  const downloadButton = document.getElementById("downloadQr");
  const printButton = document.getElementById("printProfile");

  profileUrlElement.textContent = canGenerateQrCode
    ? profileUrl
    : "Add a valid public website URL in app.js. Do not use localhost.";

  if (!canGenerateQrCode) {
    qrCodeImage.replaceWith(createQrMessage("QR code cannot be generated without a public URL."));
    downloadButton.removeAttribute("href");
    downloadButton.setAttribute("aria-disabled", "true");
  } else {
    qrCodeImage.src = qrImageUrl;
    downloadButton.href = qrImageUrl;
    downloadButton.download = getQrDownloadFileName(farmer.name);
    downloadButton.addEventListener("click", downloadQrImage);

    qrCodeImage.addEventListener("load", () => {
      downloadButton.removeAttribute("aria-disabled");
    });

    qrCodeImage.addEventListener("error", () => {
      qrCodeImage.replaceWith(
        createQrMessage("QR code could not be loaded. Please check your internet connection and reload.")
      );
      downloadButton.removeAttribute("href");
      downloadButton.setAttribute("aria-disabled", "true");
    });
  }

  printButton.addEventListener("click", () => {
    window.print();
  });
}

async function downloadQrImage(event) {
  event.preventDefault();

  try {
    const response = await fetch(downloadQrImageUrl);
    if (!response.ok) {
      throw new Error("QR image download failed.");
    }

    const imageBlob = await response.blob();
    const objectUrl = URL.createObjectURL(imageBlob);
    const link = document.createElement("a");

    link.href = objectUrl;
    link.download = event.currentTarget.download;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => {
      URL.revokeObjectURL(objectUrl);
    }, 1000);
  } catch (_error) {
    window.open(downloadQrImageUrl || qrImageUrl, "_blank", "noopener");
  }
}

function getQrDownloadFileName(farmerName) {
  const cleanName = farmerName
    .replace(/^(mr|mrs|ms|dr)\.?\s+/i, "")
    .trim()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "");

  return `${cleanName}-QR.png`;
}

function createQrMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.className = "qr-setup-message";
  messageElement.textContent = message;
  return messageElement;
}
