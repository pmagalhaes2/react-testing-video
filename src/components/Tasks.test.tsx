import { fireEvent, render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import Tasks from "./Tasks";

describe("Tasks Components", () => {
  const worker = setupServer(
    rest.get(
      "https://jsonplaceholder.typicode.com/todos",
      async (req, res, ctx) => {
        return res(
          ctx.json([
            {
              userId: 1,
              id: 1,
              title: "delectus aut autem",
              completed: false,
            },
          ])
        );
      }
    )
  );

  // inicializar o worker antes de executar qualquer teste
  beforeAll(() => {
    worker.listen();
  });

  it("should fetch and show tasks on button click", async () => {
    render(<Tasks />);

    const button = screen.getByText(/get tasks from api/i);

    fireEvent.click(button);

    await screen.findByText(/delectus aut autem/i);
  });
});
