# Instructions for my repo

Install Node/NPM
`npm start`

# What is Code Golf?

> Code golf is a type of recreational computer programming competition in which participants strive to achieve the shortest possible source code that solves a certain problem. Code golf challenges and tournaments may also be named with the programming language used. --- [Wikipedia](https://en.wikipedia.org/wiki/Code_golf)

# Rules

1. Submit code you wrote. Don't reuse someone else's code.
2. **NO AI**
3. Don't Google/Bing/DDG/Kagi for answers.
4. All pull requests must be opened before Aug 14 2025 11:30 AM EDT.

The shortest _correct_ program wins. In the event no submissions fully pass the test suite winners will be selected by number of passing test cases and code brevity.

## Supported Languages

* C#
* Python
* Go
* Typescript/Javascript

# The Problem

Convert numbers written with Arabic numerals into Roman numerals.

| Arabic | Roman |
| -----: | ----: |
|      1 |     I |
|      2 |    II |
|      3 |   III |
|      4 |    IV |
|      5 |     V |
|     10 |     X |
|     20 |    XX |
|     25 |   XXV |
|     30 |   XXX |
|     40 |    XL |
|     50 |     L |
|    100 |     C |
|    200 |    CC |
|    400 |    CD |
|    500 |     D |
|   1000 |     M |

## Example Conversions

`27` &rarr; `XXVII`

`238` &rarr; `CCXXXVIII`

`2019` &rarr; `MMXIX`

# Submission Requirements

All submissions should expect to be invoked from the command line with a single argument, the path to a text file. This file will contain 5 numbers written using Arabic numerals. Numbers are separated by a newline (`\n`). Submissions are expected to iterate over the numbers printing the Roman numeral translation for each to the console/stdout.

## Example

```python
import sys


def main():
    # Exit with error status if no filename provided
    if len(sys.argv) < 1:
        print("Filename missing!")
        sys.exit(1)

    print(f"Input file: {sys.argv[0]}")
    # Open the file for reading
    with open(sys.argv[1], "r") as fd:
        line = fd.readline().strip()
        while line != "":
            # Convert line to Roman numeral
            print(line)
            line = fd.readline().strip()


if __name__ == "__main__":
    main()
```

This repo contains a [sample file](https://github.com/kevsmith/code_golf/blob/main/input.txt) you can use for development.
