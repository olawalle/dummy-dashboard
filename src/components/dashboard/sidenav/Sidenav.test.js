import { render, screen } from "@testing-library/react";
import Sidenav from "../sidenav/Sidenav";
import { navigationLinks } from "../../../constants/navigation.constants";

test("renders number of avatar images", () => {
  render(<Sidenav />);
  expect(screen.getByTestId("logo")).toBeVisible();
  expect(screen.getByText("New features available!")).toBeVisible();
  expect(
    screen.getByText("Check out the new dashboard view. Pages now load faster.")
  ).toBeVisible();

  const links = screen.getAllByTestId("link");
  expect(links).toHaveLength(navigationLinks.length);
});
