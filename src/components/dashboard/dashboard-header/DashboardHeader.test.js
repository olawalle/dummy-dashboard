import { render, screen } from "@testing-library/react";
import DashboardHeader from "./DashboardHeader";

const title = "Settings";
const subtitle = "Manage your team and preferences here.";

test("renders dashboard header with title and subtitle", () => {
  render(<DashboardHeader title={title} subtitle={subtitle} />);

  expect(screen.getByRole("heading")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(title);
  expect(screen.getByText(subtitle)).toBeVisible();
});
