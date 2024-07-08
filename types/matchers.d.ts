import { z } from 'zod';
import type { AsyncExpectationResult, ExpectationResult } from 'expect'

declare namespace matchers {
	interface JestAIMatchers<E, R> {
		/**
		 * @description
		 * Assert whether a value is included in the larger AI response through semantic search
		 *
		 * @example
		 * expect('What is your name?').toSemanticallyMatch('Hello, I am a virtual assistant, let's start off with an introduction. What is your first name?')
		 *
		 */
		toSemanticallyMatch(expected?: string): AsyncExpectationResult
		/**
		 * @description
		 * Assert whether a tool has been used in the AI response
		 *
		 * @example
		 * expect(() => callLLM()).toHaveUsedSomeTools(['get_flight_information'])
		 *
		 */
		toHaveUsedSomeTools(expected?: string[]): AsyncExpectationResult
		/**
		 * @description
		 * Assert whether all tools in the list were used in the AI response
		 *
		 * @example
		 * expect(() => callLLM()).toHaveUsedAllTools(['get_flight_information', 'get_flight_status'])
		 *
		 */
		toHaveUsedAllTools(expected?: string[]): AsyncExpectationResult
		/**
		 * @description
		 * Assert whether an AI response matches a Zod schema
		 *
		 * @example
		 * expect(llmResponse).toMatchZodSchema(z.Object({ name: z.string(), age: z.number() }))
		 *
		 */
		toMatchZodSchema(expected?: z.Schema<any, any>): ExpectationResult
		/**
		 * @description
		 * Assert whether an AI response satisfies a true or false statement
		 *
		 * @example
		 * expect(llmResponse).toSatisfyStatement('It contains a question asking for your flight number.')
		 *
		 */
		toSatisfyStatement(expected?: string, config: any): AsyncExpectationResult
	}
}

// Needs to extend Record<string, any> to be accepted by expect.extend()
// as it requires a string index signature.
declare const matchers: matchers.JestAIMatchers<any, AsyncExpectationResult | ExpectationResult> &
	Record<string, any>
export = matchers