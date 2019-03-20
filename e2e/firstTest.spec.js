describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await element(by.id("MainButton")).tap();
    await expect(element(by.id("MainButton"))).toBeVisible();
  });
});
