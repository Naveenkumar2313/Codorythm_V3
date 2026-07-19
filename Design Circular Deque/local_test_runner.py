import os
import re
import json
import sys
import io

def parse_problems(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    problem_matches = re.finditer(r'id:\s*"([^"]+)"', content)
    problems = {}
    for match in problem_matches:
        pid = match.group(1)
        start_pos = match.end()
        tc_match = re.search(r'testCases:\s*(\[.*?\])\s*,?\n', content[start_pos:])
        if tc_match:
            tc_str = tc_match.group(1)
            problems[pid] = json.loads(tc_str)
    return problems

def parse_solutions(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    solution_matches = re.finditer(r'"(dcd-[e|m|h]\d+)":\s*\{', content)
    solutions = {}
    for match in solution_matches:
        pid = match.group(1)
        start_pos = match.end()
        py_match = re.search(r'python:\s*`(.*?)`\s*,', content[start_pos:], re.DOTALL)
        if py_match:
            py_code = py_match.group(1)
            # Unescape template literal characters
            py_code = py_code.replace('\\`', '`').replace('\\${', '${').replace('\\\\', '\\')
            solutions[pid] = py_code
    return solutions

def run_python_solution(code, input_str):
    old_stdin = sys.stdin
    old_stdout = sys.stdout
    sys.stdin = io.StringIO(input_str)
    captured_output = io.StringIO()
    sys.stdout = captured_output
    
    try:
        local_namespace = {'__name__': '__main__'}
        exec(code, local_namespace)
        output = captured_output.getvalue().strip()
    except Exception as e:
        output = f"ERROR: {e}"
    finally:
        sys.stdin = old_stdin
        sys.stdout = old_stdout
        
    return output

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    problems_file = os.path.join(base_dir, "designCircularDequeProblems.js")
    solutions_file = os.path.join(base_dir, "designCircularDequeSolutions.js")
    
    print(f"Loading problems from {problems_file}...")
    problems = parse_problems(problems_file)
    print(f"Loaded {len(problems)} problems.")
    
    print(f"Loading solutions from {solutions_file}...")
    solutions = parse_solutions(solutions_file)
    print(f"Loaded {len(solutions)} solutions.")
    
    all_passed = True
    for pid in sorted(problems.keys()):
        print(f"Verifying {pid}...")
        test_cases = problems.get(pid, [])
        code = solutions.get(pid)
        if not code:
            print(f"  [WARNING] No Python solution found for {pid}")
            continue
            
        passed = True
        for idx, tc in enumerate(test_cases):
            inp = tc['input']
            expected = tc['expectedOutput'].strip()
            got = run_python_solution(code, inp).strip()
            
            if got != expected:
                print(f"  [FAIL] Test Case {idx + 1}:")
                print(f"    Input: {repr(inp)}")
                print(f"    Expected: {repr(expected)}")
                print(f"    Got:      {repr(got)}")
                passed = False
                all_passed = False
                break
        if passed:
            print(f"  [PASS] Python")
            
    if all_passed:
        print("\nALL PYTHON TESTS PASSED SUCCESSFULLY!")
        sys.exit(0)
    else:
        print("\nSOME TESTS FAILED.")
        sys.exit(1)

if __name__ == "__main__":
    main()
