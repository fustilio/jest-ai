/// <reference path="jest.d.ts" />

import type { ExpectationResult, AsyncExpectationResult, MatcherUtils } from 'expect'
import type { ChatCompletion } from "openai/src/resources/chat/completions";
import type { RequiredActionFunctionToolCall, Run } from "openai/src/resources/beta/threads/runs";
import type { z } from 'zod'

declare module 'jest-ai' {
    declare const matchers: {
        toHaveUsedAllAssistantTools(received: () => Promise<ChatCompletion>, expectedTools: string[]): AsyncExpectationResult;
        toHaveUsedAllTools(received: () => Promise<ChatCompletion>, expectedTools: string[]): AsyncExpectationResult;
        toHaveUsedSomeAssistantTools(received: Run, expectedTools: string[] | RequiredActionFunctionToolCall.Function[]): AsyncExpectationResult;
        toHaveUsedSomeTools(received: () => Promise<ChatCompletion>, expectedTools: string[]): AsyncExpectationResult;
        toMatchZodSchema(received: z.Schema<any, any>, expected: string): ExpectationResult;
        toSatisfyStatement(received: string, expected: string, config?: any): AsyncExpectationResult;
        toSemanticallyMatch(received: string, expected: string): AsyncExpectationResult;
        toBeFactual(received: string, config?: any): AsyncExpectationResult;
    };
}
