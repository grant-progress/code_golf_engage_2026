import {expect} from "vitest"
import {it, mock, vi, beforeEach} from "vitest"

vi.mock("fs", () => ({
  readFileSync: () => `43
104
243
401
3277
`
}))

let log = vi.spyOn(console, "log")

it("produces the right output", async () => {
  await import("./main.mjs")
  expect(log).toHaveBeenNthCalledWith(1, "XLIII")
  expect(log).toHaveBeenNthCalledWith(2, "CIV")
  expect(log).toHaveBeenNthCalledWith(3, "CCXLIII")
  expect(log).toHaveBeenNthCalledWith(4, "CDI")
  expect(log).toHaveBeenNthCalledWith(5, "MMMCCLXXVII")
})
