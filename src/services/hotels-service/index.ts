import { notFoundError } from "@/errors";
import hotelRepository from "@/repositories/hotel-repository";

async function getHotelsList(userId: number) {
  const payment = await hotelRepository.findPaymentByTicketId(userId);

  if(!payment) throw notFoundError();

  const listHotels = await hotelRepository.findListOfHotels();

  return listHotels;
}

async function getHotelsRooms(hotelId: number) {
  return await hotelRepository.findHotelRoomsList(hotelId);
}

const hotelService = {
  getHotelsList,
  getHotelsRooms
};

export default hotelService;
