# Codorythm Algorithm Content Development Guide

Welcome to the **Codorythm Algorithm Repository**.

This repository contains all the educational content required for each algorithm in the Codorythm DSA Platform. Your responsibility is to create high-quality, consistent, and well-structured content following the standards described below.

---

# Objective

Each algorithm should have a complete learning package that includes:

* Theory
* Quiz
* Code Snippets
* Coding Problems
* Coding Solutions

All files must strictly follow the same format and naming conventions used throughout this repository.

---

# Repository Structure

```
Algorithm Name/
│
├── Aim and Theory.txt
├── quizData.js
├── codeSnippets.js
├── problems.js
└── solutions.js
```

Every algorithm folder **must contain all five files**.

---

# 1. Aim and Theory.txt

This file contains the educational explanation of the algorithm.

Include the following sections:

* Aim
* Definition
* Theory
* Working Principle
* Advantages
* Disadvantages
* Applications
* Real Life Applications
* Time Complexity
* Space Complexity
* Stable / Not Stable
* In-place / Not In-place
* Prerequisites
* Common Mistakes
* When to Use
* When Not to Use

### Guidelines

* Use simple and beginner-friendly language.
* Keep explanations professional.
* Mention complexities correctly.
* Avoid unnecessary technical jargon.
* Explain concepts in your own words.

**For more information visit Codorythm platform.**

---

# 2. quizData.js

Create a quiz containing **exactly 10 Multiple Choice Questions**.

Each question should include:

* Question
* Four options
* Correct Answer
* Explanation

### Quiz Coverage

The questions should cover topics such as:

* Definition
* Working Principle
* Time Complexity
* Space Complexity
* Applications
* Advantages
* Disadvantages
* Output Prediction
* Edge Cases
* Conceptual Understanding

### Guidelines

* Only one correct answer.
* Keep explanations concise.
* Avoid repeated questions.
* Maintain increasing difficulty where appropriate.

**For more information visit Codorythm platform.**

---

# 3. codeSnippets.js

Provide demonstration code for the algorithm in the following languages:

* Python
* Java
* C
* C++

### Guidelines

* Code should be clean and properly formatted.
* Use meaningful variable names.
* Add comments where necessary.
* Ensure the code compiles successfully.
* Keep the implementation simple and easy to understand.

**For more information visit Codorythm platform.**

---

# 4. problems.js

Each algorithm must contain **15 coding problems**.

### Difficulty Distribution

* 5 Easy
* 5 Medium
* 5 Hard

Every problem must include:

* Unique ID
* Title
* Difficulty
* Description
* Constraints
* Examples
* Test Cases
* Starter Code

Starter code must be provided for:

* Python
* Java
* C
* C++

### Problem Guidelines

* Questions should gradually increase in difficulty.
* Use meaningful examples.
* Constraints should be realistic.
* Test cases should validate different scenarios.
* IDs must be unique.
* Maintain a consistent object structure.

**For more information visit Codorythm platform.**

---

# 5. solutions.js

Provide the complete solution for every problem available in **problems.js**.

Languages required:

* Python
* Java
* C
* C++

### Guidelines

* Solution IDs must exactly match the problem IDs.
* Solutions must be optimized whenever applicable.
* Code should be readable and well-formatted.
* Follow best programming practices.
* Ensure all solutions compile successfully.

**For more information visit Codorythm platform.**

---

# Naming Convention

Use camelCase for JavaScript files.

Example:

```
mergeSortProblems.js
mergeSortSolutions.js
mergeSortQuiz.js
mergeSortCodeSnippets.js
```

Folder names should match the algorithm name.

Examples:

```
Bubble Sort
Merge Sort
Quick Sort
Binary Search
DFS
BFS
Heap Sort
```

---

# Coding Standards

* Maintain consistent formatting.
* Use meaningful variable names.
* Avoid unnecessary comments.
* Keep indentation consistent.
* Remove unused code.
* Avoid syntax errors.
* Use proper object formatting.

---

# Quality Checklist

Before submitting your work, verify the following:

* [ ] All required files are present.
* [ ] Folder name is correct.
* [ ] Theory is complete.
* [ ] Quiz contains exactly 10 questions.
* [ ] Code snippets are available in all four languages.
* [ ] 15 coding problems are included.
* [ ] Problems are categorized into Easy, Medium, and Hard.
* [ ] Every problem has examples and test cases.
* [ ] Starter code is available in all four languages.
* [ ] Solutions are available for every problem.
* [ ] Problem IDs match Solution IDs.
* [ ] Code is properly formatted.
* [ ] No syntax errors.
* [ ] Naming conventions are followed.

---

# Git Workflow

1. Clone the repository.
2. Create a new branch.
3. Complete the assigned algorithm.
4. Commit your changes with meaningful commit messages.
5. Push your branch.
6. Create a Pull Request for review.

---

# General Instructions

* Write clean, maintainable content.
* Do not copy content from online sources without verification.
* Ensure all information is technically accurate.
* Keep explanations beginner-friendly.
* Follow the existing project structure.
* Maintain consistency across all algorithms.
* Test all code before submission.
* Submit only complete work.

---

Thank you for contributing to **Codorythm** and helping build a high-quality learning platform for aspiring programmers.
