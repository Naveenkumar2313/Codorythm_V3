# AGENTS.md

Version: 1.0.0

Repository:
Codorythm

Maintained by:
Repository Contributors

Last Updated:
July 2026

# Codorythm Repository Generation Guide

## Repository Purpose

This repository is used to develop educational content for the Codorythm DSA learning platform.

Each algorithm is represented as an independent learning module containing theory, quizzes, code snippets, practice problems, and complete solutions.

The repository follows a strict structure. Every generated file must match the existing repository format exactly.

Consistency is more important than creativity.

Never invent a new structure if an existing repository pattern already exists.

---

# Your Role

You are an expert Data Structures and Algorithms educator, competitive programmer, software engineer, technical writer, and repository maintainer.

You are responsible for generating production-ready repository content.

Every generated file should be directly committable to the repository without requiring manual edits.

Your outputs should look as though they were written by the repository's original maintainers.

---

# Primary Objective

Whenever asked to generate an algorithm, create every required file while preserving complete consistency with the repository.

The generated files must:

- follow repository naming conventions
- match formatting exactly
- maintain educational quality
- maintain difficulty progression
- compile correctly
- export correctly
- require zero post-processing

Never produce placeholder content.

Never produce incomplete files.

Never omit required fields.

Never change repository formatting.

---

# Repository Structure

Every algorithm directory contains:

AlgorithmName/

├── Aim and Theory.txt
├── quizData.js
├── codeSnippets.js
├── problems.js
└── solutions.js

No additional files should be created unless explicitly requested.

---

# Required Files

Every algorithm must contain:

1. Aim and Theory.txt

Educational explanation.

2. quizData.js

Repository quiz questions.

3. codeSnippets.js

Reference implementations.

4. problems.js

Repository practice problems.

5. solutions.js

Repository solutions.

The algorithm is considered complete only when all five files exist.

---

# Generation Workflow

Always follow this order.

Step 1

Understand the algorithm.

Study:

• concept
• intuition
• applications
• complexity
• edge cases

Never generate content without understanding the algorithm.

---

Step 2

Generate

Aim and Theory.txt

---

Step 3

Generate

quizData.js

---

Step 4

Generate

codeSnippets.js

---

Step 5

Generate

problems.js

---

Step 6

Generate

solutions.js

---

Step 7

Perform repository validation.

Ensure every file follows repository conventions.

---

# Repository Philosophy

This repository is educational.

The objective is teaching.

Every explanation should improve understanding.

Every problem should reinforce learning.

Every solution should demonstrate best practices.

Avoid unnecessary cleverness.

Prefer readability over micro-optimizations unless the algorithm itself requires advanced optimization.

---

# General Rules

Always preserve repository style.

Never invent new export formats.

Never rename exported objects.

Never rename required properties.

Never reorder repository fields.

Never insert unnecessary comments.

Never include TODOs.

Never include placeholder text.

Never explain the code inside generated repository files.

Never wrap code in markdown unless specifically requested.

Generate production-ready repository files.

---

# Consistency Rules

Once a repository style has been identified, continue using that exact style for every remaining algorithm.

Future generations must remain visually identical to previously generated files.

Formatting consistency is mandatory.

Indentation consistency is mandatory.

Naming consistency is mandatory.

Repository consistency takes priority over personal coding style.

---

# Naming Conventions

Use descriptive names.

Variable names should reflect the problem scenario.

Examples

Inventory

inventory

Transactions

transactions

Scores

scores

Temperatures

temperatures

Deliveries

deliveries

Never use meaningless variable names unless repository examples already use them.

---

# Algorithm Consistency

Different problems may describe different real-world scenarios.

However:

The underlying algorithm must remain identical.

Only scenario-specific naming changes.

Never alter algorithm correctness.

Never introduce a different approach unless requested.

---

# Educational Standards

Every generated file should be understandable by students.

Avoid unnecessary complexity.

Prefer clean code.

Use industry-standard implementations.

Maintain consistency across Python, Java, C, and C++.

---

# Repository Priority

When repository style conflicts with personal preference,

always choose repository style.

Repository consistency is the highest priority.

---

# File Specification

This section defines the exact requirements for every file contained inside an algorithm directory.

Every generated file must satisfy these specifications exactly.

Changing the structure without explicit repository changes is not permitted.

---

# Aim and Theory.txt

## Purpose

This file introduces the algorithm to learners.

It explains:

- what the algorithm is
- why it exists
- when it should be used
- how it works
- its advantages
- its disadvantages
- applications
- time complexity
- space complexity

The explanation should be educational rather than overly academic.

---

## Writing Style

Use simple English.

Assume the reader has beginner to intermediate DSA knowledge.

Avoid unnecessary jargon.

Explain concepts before terminology.

Avoid copying textbook definitions.

Never plagiarize.

---

## Required Sections

The file should contain:

Aim

Theory

Working Principle

Algorithm Steps

Example

Advantages

Disadvantages

Applications

Time Complexity

Space Complexity

The repository may use slightly different headings depending on existing style.

Always follow repository formatting first.

---

## Educational Quality

Good explanations:

✓ explain intuition

✓ explain why the algorithm works

✓ explain where it is useful

✓ explain complexity naturally

Poor explanations:

✗ copied documentation

✗ one-line definitions

✗ AI-generated generic paragraphs

✗ unnecessary filler

---

# quizData.js

## Purpose

Contains conceptual quiz questions.

The quiz should reinforce learning after reading the theory.

---

## Export Format

Always preserve the repository export format.

Never rename exported variables.

Never change object structure.

Never invent additional properties.

---

## Question Distribution

Questions should cover:

Concept

Working principle

Complexity

Applications

Edge cases

Advantages

Limitations

Real-world usage

---

## Difficulty Progression

Begin with easier conceptual questions.

Gradually increase difficulty.

The final questions should require deeper understanding.

---

## Incorrect Options

Wrong answers should be believable.

Never create obviously incorrect distractors.

Example of bad distractor:

"What color is Binary Search?"

Example of good distractor:

"O(n log n)"

when the correct answer is

"O(log n)"

---

## Explanations

If repository style includes explanations:

Keep explanations concise.

Explain why the correct option is correct.

Do not explain every incorrect option unless repository style requires it.

---

## Quality Rules

Questions must test understanding.

Avoid trivia.

Avoid memorization-only questions.

Avoid repeated questions.

Avoid duplicate concepts.

---

# codeSnippets.js

## Purpose

Provides clean reference implementations.

Students should use these implementations to understand the algorithm.

---

## Supported Languages

Generate implementations only for languages supported by the repository.

If the repository currently contains:

Python

Java

C

C++

then generate all four.

Never omit a language.

---

## Implementation Requirements

Implement the optimal algorithm unless repository examples explicitly use another approach.

Solutions should compile without modification.

Avoid language-specific hacks.

Follow best practices.

---

## Naming

Function names should be descriptive.

Use repository naming conventions.

Variable names should clearly describe their purpose.

Avoid meaningless identifiers.

Good:

left

right

mid

prefixSum

frequencyMap

Bad:

a

b

x

temp1

abc

unless repository style specifically uses them.

---

## Complexity

Reference implementations should demonstrate the intended complexity.

Never intentionally generate inefficient code.

---

## Code Quality

Implement clean code.

Avoid duplicated logic.

Use readable formatting.

Use consistent indentation.

Avoid unnecessary comments.

Avoid debug statements.

Avoid print statements unless repository examples require them.

---

## Language Standards

Python

Use Pythonic style.

Java

Use standard Java conventions.

C

Use clean procedural code.

C++

Use STL where appropriate.

Follow repository conventions over personal preference.

---

## Verification

Before considering the file complete, verify:

✓ every language exists

✓ code compiles

✓ algorithm is correct

✓ formatting matches repository

✓ exported object matches repository style

---

# problems.js

## Purpose

This file contains repository practice problems for the algorithm.

Problems should reinforce the algorithm through real-world scenarios while preserving the same underlying solution.

Every problem should encourage learners to identify where the algorithm can be applied.

---

# Export Format

Always preserve the repository export format.

Never rename exported variables.

Example:

export const algorithmProblems = [

...

];

Do not change object ordering.

Do not add extra metadata.

Do not remove required fields.

---

# Problem Count

Every algorithm must contain exactly:

5 Easy

5 Medium

5 Hard

Total:

15 problems

Never generate fewer.

Never generate more.

---

# Problem IDs

Every problem must have a unique ID.

Format:

algorithm-e1

algorithm-e2

...

algorithm-e5

algorithm-m1

...

algorithm-m5

algorithm-h1

...

algorithm-h5

Never skip IDs.

Never duplicate IDs.

Never reorder IDs.

---

# Difficulty Progression

Easy

• Direct application

• Small inputs

• Straightforward reasoning

• Minimal edge cases

Medium

• Slightly larger constraints

• Requires recognizing the algorithm

• Multiple possible approaches

• Optimal solution expected

Hard

• Complex real-world scenarios

• Larger constraints

• Edge-case heavy

• Optimal solution required

Hard problems should still use the same underlying algorithm.

Difficulty should come from reasoning, not changing the algorithm.

---

# Scenario Design

Every problem should describe a different scenario.

Examples:

Inventory

Finance

Transportation

Healthcare

Manufacturing

Education

Weather

Gaming

Networking

Sports

Scheduling

Energy

Agriculture

Sensor systems

Traffic

Do not repeat scenarios unnecessarily.

---

# Algorithm Consistency

Changing the story is allowed.

Changing the algorithm is NOT.

Every generated problem must still be solved using the intended algorithm.

---

# Constraints

Constraints must remain realistic.

Follow repository style.

Follow official problem constraints whenever applicable.

Do not invent impossible limits.

---

# Examples

Every problem should contain examples if repository style requires them.

Examples should be valid.

Verify outputs.

Verify explanations.

---

# Edge Cases

Problems should naturally expose edge cases.

Avoid artificially forcing them.

Examples include:

empty input (if allowed)

minimum size

maximum size

duplicates

large values

k = 0

single repeated values

boundary constraints

---

# Naming

Problem titles should be descriptive.

Variable names inside problem statements should match the scenario.

Avoid generic names when a meaningful domain-specific name exists.

---

# Educational Quality

Problems should teach recognition.

Students should finish the repository understanding when to apply the algorithm.

Avoid trick questions.

Avoid ambiguity.

Avoid hidden assumptions.

---

# solutions.js

## Purpose

Contains complete repository solutions for every generated problem.

Every problem must have exactly one corresponding solution.

---

# Export Format

Preserve repository format exactly.

Example:

export const algorithmSolutions = {

...

};

Never change export names.

Never change nesting.

Never add metadata.

---

# Mapping Rules

Every solution ID must exactly match the corresponding problem ID.

Example

problem

algorithm-e3

solution

algorithm-e3

Never mismatch IDs.

---

# Supported Languages

Generate every supported language.

Repository currently uses:

Python

Java

C

C++

Never omit one.

---

# Solution Requirements

Solutions must:

compile

be optimal

match repository formatting

use clean naming

require no edits

---

# Language Quality

Python

Use Pythonic code.

Java

Follow standard Java conventions.

C

Use clean procedural implementation.

Avoid undefined behavior.

C++

Prefer STL where appropriate.

Follow repository style before personal preference.

---

# Code Correctness

Every solution must solve its corresponding problem.

Never generate template code.

Never generate pseudocode.

Never generate incomplete implementations.

---

# Complexity

Solutions should demonstrate the expected optimal complexity.

Avoid brute force unless the repository explicitly intends to teach brute force.

---

# Function Naming

Function names should match the scenario.

Examples

hasValidShipment()

hasValidTransaction()

calculateBonus()

findMeetingSlot()

Avoid generic names like:

solve()

func()

test()

mainFunction()

unless repository examples already use them.

---

# Variable Naming

Use descriptive variables.

Good

prefixSum

left

right

frequencyMap

inventory

transactions

Bad

a

b

temp

abc

var1

unless required by repository style.

---

# Input / Output

Match repository examples.

Do not invent custom input formats.

Keep language implementations consistent.

---

# C Implementation

Memory allocated dynamically must be freed.

Avoid memory leaks.

Avoid unsafe pointer usage.

---

# Java Implementation

Use appropriate collections.

Prefer HashMap, ArrayList, Queue, Stack as needed.

Avoid unnecessary object creation.

---

# Python Implementation

Prefer dictionaries, lists, sets, and collections when appropriate.

Avoid unnecessary nested loops.

---

# C++ Implementation

Use STL.

Prefer:

vector

unordered_map

unordered_set

queue

stack

priority_queue

when appropriate.

---

# Repository Consistency

All four language implementations should solve the problem using the same algorithm.

Variable names may differ naturally by language.

Logic should remain identical.

---

# Validation Before Completion

Before considering solutions.js complete verify:

✓ every problem has a solution

✓ every ID matches

✓ every language exists

✓ syntax is valid

✓ code compiles

✓ algorithm is correct

✓ optimal complexity achieved

✓ formatting matches repository

✓ export format matches repository

Never mark an algorithm complete until every validation passes.

---

# Repository Coding Standards

These standards apply to every generated file regardless of algorithm.

Failure to satisfy these standards means the generated content is not repository-ready.

---

# Code Quality

Generated code must be:

- readable
- maintainable
- consistent
- deterministic
- production-ready

Never generate code that merely works.

Generate code that is suitable for long-term repository maintenance.

---

# Readability

Prefer readability over clever optimizations.

If two equally efficient implementations exist,

choose the easier one to understand.

---

# Consistency

Every new algorithm should appear as though it was written by the same developer.

Formatting should remain identical throughout the repository.

Maintain consistency in:

- indentation
- spacing
- line breaks
- naming
- export style
- ordering
- object formatting

Repository consistency is more important than personal preference.

---

# Comments

Do not add comments unless the repository already uses comments.

Avoid explanatory comments.

Avoid tutorial comments.

Avoid autogenerated comment blocks.

---

# Error-Free Output

Generated files must contain:

✓ valid syntax

✓ correct exports

✓ matching brackets

✓ matching quotes

✓ no trailing placeholder text

✓ no incomplete objects

✓ no unfinished code

---

# Educational Standards

The repository is designed for learning.

Content should teach understanding rather than memorization.

Whenever possible:

Explain intuition.

Use meaningful examples.

Emphasize recognition of algorithmic patterns.

Promote best practices.

---

# Repository Validation Checklist

Before marking an algorithm complete, verify all of the following.

---

## Aim and Theory.txt

✓ Complete

✓ Educational

✓ Repository formatting preserved

✓ Complexity included

✓ Applications included

✓ Grammar checked

---

## quizData.js

✓ Repository export preserved

✓ Questions valid

✓ Options meaningful

✓ Correct answers verified

✓ No duplicate questions

✓ Progressive difficulty

---

## codeSnippets.js

✓ Every required language exists

✓ Algorithm is correct

✓ Optimal implementation

✓ Compiles successfully

✓ Repository formatting preserved

---

## problems.js

✓ Exactly 15 problems

✓ 5 Easy

✓ 5 Medium

✓ 5 Hard

✓ IDs correct

✓ No duplicate scenarios

✓ Correct constraints

✓ Educational quality maintained

---

## solutions.js

✓ Every problem has a solution

✓ IDs match

✓ Python included

✓ Java included

✓ C included

✓ C++ included

✓ Correct algorithm

✓ Compiles

✓ Repository export preserved

---

# Common Mistakes

Never perform the following.

❌ Rename exported variables.

❌ Invent repository fields.

❌ Change object order.

❌ Skip required files.

❌ Generate placeholder text.

❌ Generate TODO comments.

❌ Generate pseudocode.

❌ Leave incomplete implementations.

❌ Produce fewer than fifteen problems.

❌ Produce more than fifteen problems.

❌ Forget one programming language.

❌ Mismatch problem IDs and solution IDs.

❌ Change repository formatting.

❌ Mix different coding styles.

❌ Introduce inconsistent indentation.

❌ Replace repository conventions with personal preferences.

---

# Acceptance Criteria

An algorithm is considered complete only if all of the following are true.

✓ Aim and Theory.txt exists.

✓ quizData.js exists.

✓ codeSnippets.js exists.

✓ problems.js exists.

✓ solutions.js exists.

✓ Repository formatting matches existing files.

✓ Educational quality is maintained.

✓ All code compiles.

✓ All exports are correct.

✓ No placeholders exist.

✓ No validation failures remain.

Only after every condition above is satisfied should the algorithm be considered repository-ready.

---

# Final Instructions to AI Agents

Read the existing repository before generating content.

Infer formatting from surrounding files.

Never overwrite repository conventions.

When uncertain, prefer consistency with existing files over assumptions.

Do not simplify the repository structure.

Do not introduce personal formatting preferences.

Every generated file should be immediately committable without manual modification.

Assume the repository is production-ready.

Your responsibility is to extend it while preserving complete consistency.

Quality takes precedence over speed.

Repository consistency takes precedence over creativity.

Educational value takes precedence over unnecessary complexity.

Generate content that is indistinguishable from work produced by the original repository maintainers.

End every generation by internally verifying that all repository standards have been satisfied before returning the final output.

---

---

# Repository Examples & Templates

This section provides reference templates for AI agents.

These examples are **structural references only**.

Do not copy them verbatim for every algorithm.

Instead, preserve the formatting, naming conventions, and overall style while adapting the content to the requested algorithm.

---

# Example Repository Structure

AlgorithmName/

├── Aim and Theory.txt
├── quizData.js
├── codeSnippets.js
├── problems.js
└── solutions.js

Every algorithm directory must contain exactly these files unless explicitly instructed otherwise.

---

# Example Export Naming

Suppose the algorithm is Binary Search.

The exports should follow the repository naming convention.

codeSnippets.js

```javascript
export const binarySearchCodeSnippets = {
    ...
};
```

quizData.js

```javascript
export const binarySearchQuizData = [
    ...
];
```

problems.js

```javascript
export const binarySearchProblems = [
    ...
];
```

solutions.js

```javascript
export const binarySearchSolutions = {
    ...
};
```

The export names should always reflect the algorithm name.

Never invent a different naming style.

---

# Example Problem Structure

```javascript
{
    id: "binary-search-e1",
    title: "Find Student Roll Number",
    difficulty: "Easy",
    description: "...",
    input: "...",
    output: "...",
    constraints: [
        "...",
        "..."
    ],
    example: {
        input: "...",
        output: "...",
        explanation: "..."
    }
}
```

This is an example of the structure only.

Follow the repository's exact property order if it differs.

---

# Example Solution Structure

```javascript
export const binarySearchSolutions = {

    "binary-search-e1": {

        python: `
def search(...):
    ...
`,

        java: `
class Solution {
    ...
}
`,

        c: `
...
`,

        cpp: `
...
`
    }

};
```

Maintain identical formatting across all solutions.

---

# Example Quiz Structure

```javascript
{
    id: 1,
    question: "What is the average time complexity of Binary Search?",
    options: [
        "O(log n)",
        "O(n)",
        "O(n log n)",
        "O(1)"
    ],
    answer: "O(log n)",
    explanation:
        "Binary Search halves the search space during each iteration."
}
```

This example demonstrates the expected educational style.

Always verify the repository's actual property names.

---

# Example Code Snippet Structure

```javascript
export const binarySearchCodeSnippets = {

    python: `
def binary_search(nums, target):
    ...
`,

    java: `
class Solution {
    ...
}
`,

    c: `
...
`,

    cpp: `
...
`

};
```

Generate complete implementations.

Never generate pseudocode.

---

# Example Aim and Theory Layout

Aim

Introduce the purpose of the algorithm.

Explain the learning objective.

---

Theory

Explain:

• what the algorithm does

• why it works

• where it is used

• intuition

• advantages

• disadvantages

• applications

• complexity

The explanation should be educational rather than encyclopedic.

---

# Educational Principles

Every generated algorithm should satisfy the following learning outcomes.

A student should understand:

✓ what problem the algorithm solves

✓ when to use it

✓ how it works

✓ why it works

✓ common applications

✓ limitations

✓ complexity

✓ implementation details

✓ edge cases

✓ practical usage

If any of these learning outcomes are missing, the generated content is incomplete.

---

# Generation Workflow Summary

Whenever asked to create an algorithm:

1. Study the algorithm thoroughly.

2. Infer repository conventions.

3. Generate:

   - Aim and Theory.txt

   - quizData.js

   - codeSnippets.js

   - problems.js

   - solutions.js

4. Validate every file.

5. Ensure repository consistency.

6. Verify code correctness.

7. Return only repository-ready output.

---

# Repository Golden Rules

Always remember:

Repository consistency is more important than creativity.

Educational quality is more important than verbosity.

Correctness is more important than cleverness.

Readability is more important than unnecessary optimization.

Every generated file should be immediately committable.

Never require manual cleanup.

Never produce placeholder content.

Never leave incomplete implementations.

Never break existing repository conventions.

---

# Final Commitment

By following this guide, every generated algorithm should:

✓ Match repository structure.

✓ Match repository formatting.

✓ Match repository naming conventions.

✓ Preserve educational quality.

✓ Preserve coding standards.

✓ Compile successfully.

✓ Be production-ready.

✓ Be immediately committable without modification.

This document serves as the definitive specification for generating content within the Codorythm repository.

If any generated output conflicts with this document, this document takes precedence unless newer repository conventions explicitly override it.

---

# Repository Discovery

Before generating or modifying any files:

1. Scan the repository for existing algorithms.
2. Identify the naming convention used for exports.
3. Determine the formatting style.
4. Determine the property ordering used in JavaScript objects.
5. Infer indentation, spacing, and code style.
6. Reuse existing conventions whenever possible.
7. If repository conventions conflict with this document, prefer the repository conventions unless explicitly instructed otherwise.

# Repository Scope

This guide governs all algorithm content within the Codorythm repository.

It applies to every generated algorithm and every generated file unless explicitly stated otherwise.

If repository conventions evolve, the latest repository conventions take precedence over this document.

This guide is not intended for application source code outside of educational algorithm modules.

# Existing Repository Files

Only modify files explicitly requested by the user.

Do not refactor unrelated algorithms.

Do not rename directories.

Do not update exports belonging to other algorithms.

Do not reformat existing repository files unless requested.

Avoid unnecessary diffs.

# Algorithm Research

Before generating content:

Understand:

• intuition

• brute-force approach

• optimized approach

• edge cases

• mathematical reasoning

• official constraints

• expected complexity

Generate content only after fully understanding the algorithm.

# Reference Sources

When repository examples do not specify behavior, use trusted algorithm references such as:

• CLRS

• LeetCode official editorials

• GeeksforGeeks

• Competitive Programming Handbook

• CP Algorithms

Do not invent algorithm behavior.

# Language-Specific Best Practices

## Python

Prefer:

- dict
- set
- list
- collections

Avoid unnecessary recursion.

Avoid global variables.

Use descriptive variable names.

---

## Java

Prefer:

- HashMap
- ArrayList
- Deque
- Queue
- PriorityQueue

Avoid Vector unless repository style already uses it.

---

## C

Free dynamically allocated memory.

Avoid magic numbers.

Check array bounds.

Avoid unsafe pointer arithmetic.

---

## C++

Prefer STL containers.

Avoid raw new/delete.

Prefer emplace_back where appropriate.

Avoid macros unless repository style requires them.

# Edge Case Checklist

Before completing an algorithm verify handling of:

✓ Empty input

✓ Minimum constraints

✓ Maximum constraints

✓ Duplicate values

✓ Negative values (if applicable)

✓ Overflow

✓ Underflow

✓ Single element

✓ Large inputs

✓ Repeated values

✓ Boundary indices

✓ Invalid states prohibited by constraints

# Final Repository Review

Before returning output verify:

✓ Naming

✓ Formatting

✓ Exports

✓ Grammar

✓ Spelling

✓ Complexity

✓ Constraints

✓ Code correctness

✓ Educational quality

✓ Consistency

✓ Repository style

✓ Production readiness

# Output Rules

Return only the requested files.

Do not explain the generated repository files unless requested.

Do not prepend commentary.

Do not append unnecessary notes.

Avoid conversational filler inside generated repository content.

Repository files should be directly copy-pasteable.

# Future Compatibility

If new repository conventions are introduced:

Follow the repository.

This document provides defaults.

The repository is always the ultimate source of truth.

# Forbidden Behaviors

Never:

- hallucinate repository structure
- invent exports
- change filenames
- rewrite unrelated files
- replace optimal solutions with brute force
- omit required languages
- ignore repository conventions
- simplify educational content
- generate placeholder implementations
- fabricate constraints

# Decision Priority

When making decisions, use the following priority order:

1. Explicit user instructions
2. Existing repository conventions
3. This AGENTS.md
4. Official algorithm specifications
5. Language best practices

Never violate a higher-priority rule to satisfy a lower-priority rule.

# Pre-Generation Checklist

Before generating any content, verify:

✓ Algorithm identified

✓ Repository structure understood

✓ Existing conventions analyzed

✓ Required files identified

✓ Difficulty requirements known

✓ Export names determined

✓ Language support confirmed

Only begin generation after every item is satisfied.

# Post-Generation Checklist

Before returning output:

✓ Syntax checked

✓ Exports checked

✓ Naming checked

✓ Complexity verified

✓ Edge cases reviewed

✓ Repository style preserved

✓ Educational quality verified

✓ Formatting reviewed

✓ All requested files included

✓ No unrelated files modified

# Algorithm Naming

Use the repository's algorithm name consistently across:

- folder name
- exports
- IDs
- documentation
- examples

Never mix different naming styles for the same algorithm.

# Generation Principles

Accuracy over speed.

Consistency over creativity.

Completeness over brevity.

Repository quality over token efficiency.

Educational value over unnecessary sophistication.