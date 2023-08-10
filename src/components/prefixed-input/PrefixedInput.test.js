import { render, screen } from "@testing-library/react";
import PrefixedInput from "./PrefixedInput";
import mail from "../../assets/mail.svg";
import userEvent from "@testing-library/user-event";

test("renders number of avatar images", () => {
  render(<PrefixedInput image={mail} />);
  const email = "olivia@untitledui.com";
  expect(screen.getByRole("img")).toBeVisible();
  userEvent.type(screen.getByRole("textbox"), email);
  expect(screen.getByRole("textbox")).toHaveValue(email);
});
