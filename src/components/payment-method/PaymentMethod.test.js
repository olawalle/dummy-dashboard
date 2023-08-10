import { render, screen, waitFor, within } from "@testing-library/react";
import PaymentMethod from "./PaymentMethod";
import userEvent from "@testing-library/user-event";

test("renders payment methods & toggle default card", async () => {
  render(<PaymentMethod />);
  const cards = screen.getAllByTestId("card");
  expect(cards).toHaveLength(2);
  expect(within(cards[0]).getByTestId("check-icon")).toBeVisible();
  expect(within(cards[1]).getByTestId("circle-icon")).toBeVisible();

  const toggle2 = within(cards[1]).getByTestId("toggle-card");
  expect(toggle2).toBeVisible();
  await waitFor(() => {
    userEvent.click(toggle2);
  });
  within(cards[1]).getByText("Set as default");
  expect(within(cards[1]).getByTestId("check-icon")).toBeVisible();
});
