export default function handler(req, res) {
  res.status(200).json({
    apkUrlPlayStore: process.env.APK_URL_PLAYSTORE,
    apkUrlAppStore: process.env.APK_URL_APPSTORE,
  });
}