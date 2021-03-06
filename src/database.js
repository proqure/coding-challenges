var nfcTags = require("./db/nfc_tags.json");
var campaigns = require("./db/campaigns.json");

function getAllTags() {
  return nfcTags;
}

function getTagById(id) {
  const allTags = getAllTags();
  return allTags.find((x) => x._id === id);
}

function getAllCampaign() {
  return campaigns;
}

function getCampaignById(id) {
  const allTags = getAllCampaign();
  return allTags.find((x) => x.campaign_id === id);
}

function getCampaignByVendorRoll(vendorRoll) {
  const campaigns = getAllCampaign();
  return campaigns.find((x) => x.campaign_rolls.indexOf(vendorRoll) >= 0);
}

module.exports = {
  getAllTags,
  getTagById,
  getCampaignById,
  getCampaignByVendorRoll,
};
