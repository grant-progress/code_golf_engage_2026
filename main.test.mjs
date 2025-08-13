import {expect} from "vitest"
import {it, mock, vi, beforeEach} from "vitest"
import * as fs from "fs/promises"

vi.mock("fs", () => ({
  readFileSync: () => `43
104
243
401
3277
90
449
1199
905
`
}))

const outputs = [
  'XLIII',
  'CIV',
  'CCXLIII',
  'CDI',
  'MMMCCLXXVII',
  'XC',
  'CDXLIX',
  'MCXCIX',
  'CMV'
]

let log = vi.spyOn(console, "log")

it("produces the right output", async () => {
  await import("./src.mjs")
  for (let i = 0; i < outputs.length; i++) {
    expect(log).toHaveBeenNthCalledWith(i + 1, outputs[i]);
  }
})

it("golfs", async () => {
  const content = await fs.readFile("./main.mjs", "utf-8")
  expect(content.length).toMatchInlineSnapshot(`313`)
})
