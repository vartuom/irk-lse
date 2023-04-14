import { Test, TestingModule } from "@nestjs/testing";
import { AppealsController } from "./appeals.controller";
import { AppealsService } from "./appeals.service";

describe("AppealsController", () => {
  let controller: AppealsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppealsController],
      providers: [AppealsService],
    }).compile();

    controller = module.get<AppealsController>(AppealsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
