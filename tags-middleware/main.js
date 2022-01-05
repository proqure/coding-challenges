const db = require("./db/database");
const assert = require("assert");

/**
 * TODO
 * Implement the function getTagURL that takes a tagID (string) as an input
 * and return a URL (pwa_url) as an output.
 * @param {*} tagId
 */
function getTagURL(tagId) {
  // write your code here
  // use db object methods to get data from the database
}

// ------------------------------------------------------------------------

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
