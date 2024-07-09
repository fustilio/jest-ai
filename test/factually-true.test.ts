import { getMatchers } from "../src/utils/matcher-utils";

// These tests intentionally make live requests to OpenAI
jest.setTimeout(20000);

function hasOpenAIKey() {
  return !!process.env.OPENAI_API_KEY;
}

function hasAzureKey() {
  return (
    !!process.env.AZURE_OPENAI_API_KEY &&
    !!process.env.AZURE_OPENAI_API_VERSION &&
    !!process.env.AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME &&
    !!process.env.AZURE_OPENAI_API_INSTANCE_NAME
  );
}

const maybe = hasOpenAIKey() || hasAzureKey() ? describe : describe.skip;

maybe("factually true", () => {
  it("passes when the information matches what is globally correct", async () => {
    const matchers = getMatchers();
    const pass = await matchers.factuallyTrue(
      `The keyphrase "mammoths" is related to the keyphrase "elephant"`,
    );
    expect(pass).toEqual(true);
  });
});
