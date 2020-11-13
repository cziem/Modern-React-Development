import { expect } from "chai";
import { getBorderStyleForOldTodos } from "../components/Todos/TodoListItem/styles";

describe("getBorderStyleForOldTodos", () => {
  it("returns none when the date is less than 3 days ago", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 2);

    const expected = "none";
    const actual = getBorderStyleForOldTodos(recentDate, today);

    expect(actual).to.equal(expected);
  });

  it("returns a border when the date is more than 3 days ago", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 5);

    const expected = "2px solid #ff000061";
    const actual = getBorderStyleForOldTodos(recentDate, today);

    expect(actual).to.equal(expected);
  });
});
