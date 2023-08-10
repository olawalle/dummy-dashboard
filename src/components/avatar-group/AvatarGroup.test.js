import { render, screen } from "@testing-library/react";
import AvatarGroup from "./AvatarGroup";

const avatars1 = [1, 2, 3, 4];
const avatars2 = [1, 2, 3, 4, 5, 6, 7];

test("renders number of avatar images", () => {
  render(<AvatarGroup avatars={avatars1} />);

  const excessScreen = screen.queryByTestId("excess-count");
  expect(excessScreen).toBeNull();
  expect(screen.getAllByRole("img")).toHaveLength(avatars1.length);
});

test("renders 5 avatar images + extras", () => {
  render(<AvatarGroup avatars={avatars2} />);
  const excessScreen = screen.getByTestId("excess-count");
  expect(excessScreen).toBeVisible();
  expect(excessScreen).toHaveTextContent(avatars2.length - 5);
});
