import { render, screen } from "@testing-library/react";
import LinkItem from "./LinkItem";
import dashboard from "../../../../assets/bar-chart-2.svg";

test("renders side link item", () => {
  render(
    <LinkItem
      link={{
        text: "Dashboard",
        image: dashboard,
        hasTag: true,
      }}
    />
  );
  expect(screen.getByText("Dashboard")).toBeVisible();
  expect(screen.getByText("10")).toBeVisible();
});
