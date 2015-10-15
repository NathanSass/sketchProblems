# Max range sum
[Click here](https://www.codeeval.com/open_challenges/39/)

## Challenge description

A happy number is defined by the following process. Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers.

## Input sample:

For example:

    1
    7
    22
    17

## Output sample:

Print out the maximum possible gain over the period. If no gain is possible,
print 0.

For example:

    1
    1
    0
    0

For the curious, here's why 7 is a happy number: 7->49->97->130->10->1. Here's why 22 is NOT a happy number: 22->8->64->52->29->85->89->145->42->20->4->16->37->58->89 ...