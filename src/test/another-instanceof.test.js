describe("instanceof", () => {
    it("has access to shared global variables", () => {
        expect(foo).toBe('my foo value');
    });
});
