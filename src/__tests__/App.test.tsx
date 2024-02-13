import { render, fireEvent, waitFor } from "@testing-library/react";
import { Login } from "@/pages";
import { describe, it } from "node:test";

describe("Login component", () => {
  it("should submit form with valid credentials", async () => {
    const { getByLabelText, getByText } = render(<Login />);

    // Fill out the form
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(getByText("Log in"));

    // You need to add the rest of the test code based on your actual application logic
    // For example, you may want to wait for an element to appear or check the URL after submitting the form
  });

  // Add more test cases for edge cases, validation, etc.
});
