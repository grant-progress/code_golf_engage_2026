import * as fs from "fs"

let p = [
  [1000, "M"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [5, "V"],
  [4, "IV"]
]

let c = fs.readFileSync(process.argv[2])
c.split("\n").forEach(l => {
  let v = "I".repeat(parseInt(l))
  let o = ""
  p.forEach(([x, r]) => {
    while (v.length >= x) {
      o += r
      v = v.slice(x)
    }
  })
  console.log(o + v)
})
