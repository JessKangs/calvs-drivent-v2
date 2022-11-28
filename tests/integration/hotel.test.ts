import supertest from "supertest";
import server from "@/app";

const api = supertest(server);

describe("GET /hotels", () => {
  it("Should respond with status 200 if there is hotels list", async () => {
    const result = await api.get("/hotels");
    expect(result.status).toBe(200);
  });

  it("Should respond with status 404 if there is not hotels list", async () => {
    const result = await api.get("/hotels");
    expect(result.status).toBe(404);
  });
});

describe("GET /hotels/:hotelId", () => {
  it("Should respond with status 404 if there is not rooms list", async () => {
    const result = await api.get("/hotels/:hotelId");
    expect(result.status).toBe(404);
  });
    
  it("Should respond with status 200 if there is rooms list", async () => {
    const result = await api.get("/hotels/:hotelId");
    expect(result.status).toBe(200);
  });
});
