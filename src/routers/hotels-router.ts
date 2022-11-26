import { Router } from "express";
import { getHotelsList, getHotelsRooms } from "@/controllers";

const hotelsRouter = Router();

hotelsRouter.get("", getHotelsList);

hotelsRouter.get("/:hotelId", getHotelsRooms);

export { hotelsRouter };
