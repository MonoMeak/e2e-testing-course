export type StudentStatus = "Yes" | "No";

export interface Workshop8Input {
  firstName: string;
  age: string;
  isStudent: boolean;
}

export interface Workshop8Expected {
  firstName: string;
  age: string;
  isStudent: StudentStatus;
}

export interface Workshop8TestCase {
  testName: string;
  input: Workshop8Input;
  expected: Workshop8Expected;
}

export const workshop8TestCases: Workshop8TestCase[] = [
  {
    testName: "Test 1 - Fill Input",
    input: {
      firstName: "John",
      age: "30",
      isStudent: true,
    },
    expected: {
      firstName: "John",
      age: "30",
      isStudent: "Yes",
    },
  },
  {
    testName: "Test 1 - Negative test",
    input: {
      firstName: "Nalis",
      age: "25",
      isStudent: false,
    },
    expected: {
      firstName: "Nalis",
      age: "25",
      isStudent: "No",
    },
  },
];
