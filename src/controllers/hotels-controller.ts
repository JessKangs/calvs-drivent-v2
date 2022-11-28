import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";
import hotelService from "@/services/hotels-service";

export async function getHotelsList(req: AuthenticatedRequest, res: Response) {
  try {
    const { userId } = req;
    const listHotels = await hotelService.getHotelsList(userId);
    console.log("A");
    return res.status(httpStatus.OK).send(listHotels);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getHotelsRooms(req: AuthenticatedRequest, res: Response) {
  try {
    const hotelId = Number(req.query.hotelId);

    const listOfRooms = await hotelService.getHotelsRooms(hotelId);
    console.log("B");

    return res.status(httpStatus.OK).send(listOfRooms);
  } catch(error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
