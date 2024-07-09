import { FactuallyTrueConfig, getMatchers } from "../utils/matcher-utils";
import { MatcherUtils } from "expect";

export async function toBeFactual(
  this: MatcherUtils,
  received: string,
  config?: FactuallyTrueConfig
) {
  const matchers = getMatchers();
  const pass = await matchers.factuallyTrue(received, config);

  if (pass) {
    return {
      message: () =>
        `Expected: ${this.utils.printExpected(
          "to be factual"
        )}\nReceived: ${this.utils.printReceived(received)}`,
      pass: true,
    };
  }
  return {
    message: () =>
      `Expected: ${this.utils.printReceived(
        received
      )} to be factual`,
    pass: false,
  };
}
