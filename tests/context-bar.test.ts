import test from "node:test";
import assert from "node:assert/strict";
import { renderSegment } from "../segments.ts";

test("context_bar shows context window after percent", () => {
  const segment = renderSegment("context_bar", {
    model: undefined,
    thinkingLevel: "off",
    sessionId: undefined,
    usageStats: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, cost: 0 },
    contextPercent: 17,
    contextWindow: 272000,
    autoCompactEnabled: true,
    customCompactionEnabled: false,
    usingSubscription: false,
    sessionStartTime: 0,
    shellModeActive: false,
    shellRunning: false,
    shellName: null,
    shellCwd: null,
    git: { branch: null, dirty: false, staged: 0, unstaged: 0, untracked: 0, ahead: 0, behind: 0 },
    extensionStatuses: new Map(),
    hiddenExtensionStatusKeys: new Set(),
    customItemsById: new Map(),
    options: {},
    theme: { fg: (_color: string, text: string) => text },
    colors: {},
  });

  assert.deepEqual(segment, {
    content: "\u001b[32m46k [███░░░░░░░░░░░░░░░░░ 17% / 272k]\u001b[0m",
    visible: true,
  });
});
