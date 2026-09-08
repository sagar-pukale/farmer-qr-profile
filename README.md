# Farmer Profile QR Web App

This is a simple static web application for showing a farmer profile and generating a QR code that opens the profile page URL.

## Files

- `index.html` - Main farmer profile page.
- `styles.css` - Mobile-friendly layout and professional farming style.
- `app.js` - Farmer data, QR code generation, download button, and print button.

## Change Farmer Information

Open `app.js` and update the `farmers` object near the top of the file. For now, the app contains only one farmer:

```js
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
```

To add more farmers later, add another entry inside `farmers` using the new farmer ID as the key.

## Run Locally

Run a simple local server from this folder:

```bash
npx serve -s .
```

Then open:

```text
http://localhost:3000/farmer/73788671056
```

## QR Code

The QR code contains the farmer profile page URL, not the farmer's plain text details.

The QR code uses only the `publishedProfileUrl` value in `app.js`. If `publishedProfileUrl` is empty, the page shows a message asking you to add the final public URL. This prevents accidentally creating a QR code for `localhost`.

After publishing the site online, open `app.js` and set the public website URL:

```js
const publishedProfileUrl = "https://your-public-site-url.com/";
```

The QR code for this farmer will point to:

```text
https://your-public-site-url.com/farmer/73788671056
```

Then reload the page and click **Download QR PNG**.

## Publish Online With Vercel

You can publish this static app on Vercel.

Steps:

1. Create a Vercel account or sign in at `https://vercel.com`.
2. Upload this project folder to GitHub, or use Vercel CLI from this folder.
3. Deploy the project on Vercel as a static site.
4. Copy the Vercel project URL, for example `https://farmer-profile.vercel.app/`.
5. Paste that base URL into `publishedProfileUrl` inside `app.js`.
6. Deploy the updated files again.
7. Open the final Vercel URL.
8. Click **Download QR PNG**.

Now the QR code can be scanned from another person's phone and will open the online farmer profile.
