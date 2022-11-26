import { prisma } from "@/config";

async function findPaymentByTicketId(userId: number) {
  const enrollment = await prisma.enrollment.findUnique({
    where: { userId }
  });

  const ticket = await prisma.ticket.findFirst({
    where: { enrollmentId: enrollment.id } 
  });

  return prisma.payment.findFirst({
    where: { ticketId: ticket.id }
  });
}

async function findListOfHotels() {
  return prisma.hotel.findMany({});
}

async function findHotelRoomsList(hotelId: number) {
  return prisma.hotel.findFirst({
    where: {  id: hotelId  },
    include: {
      Rooms: true
    }
  });
}

const hotelRepository = {
  findPaymentByTicketId,
  findListOfHotels,
  findHotelRoomsList
};

export default hotelRepository;
