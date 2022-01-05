const db = require("./db/database");
const assert = require("assert");

function getTagURL(tagId) {
  const tag = db.getTagById(tagId);
  if (!tag) {
    throw `Cannot find tag ${tagId}`;
  }
  const campaign = db.getCampaignByVendorRoll(tag.vendor_roll_id);
  if (!campaign) {
    throw `Cannot find campaign with roll ${tag.vendor_roll_id}`;
  }
  return campaign.pwa_rules[0].pwa_url;
}

/**
 * TESTS
 */
// SK_ROLL_13
assert.equal(
  getTagURL("4Ns_mH4a"),
  "https://app.proqure.io/demo/quiz/this-is-dave-hes-a-casual-tapper"
);

// SK_ROLL_13
assert.equal(
  getTagURL("~zVUJ9-D"),
  "https://app.proqure.io/demo/quiz/this-is-dave-hes-a-casual-tapper"
);

// SK_ROLL_7
assert.equal(
  getTagURL("KnG.h9r5"),
  "https://app.proqure.io/demo/quiz/this-is-dave-hes-a-casual-tapper"
);

// SK_ROLL_3
assert.equal(
  getTagURL("88MrzEkR"),
  "https://app.proqure.io/proqbox/golden-ticket/win-an-entire-years-subscription-to-proqbox"
);

// SK_ROLL_2
assert.equal(
  getTagURL("71JIP8Uo"),
  "https://witb.proqure.io/marleyspoon/family4/home"
);

console.log("SUCCESS!");
