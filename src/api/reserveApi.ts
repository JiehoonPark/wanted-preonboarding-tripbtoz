import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface PatchReserveHotelParams {
  name: string;
  check_in: string;
  check_out: string;
  occupancy: { adult: number; kid: number };
}

export const patchReserveHotel = () => {
  const fetch = async ({
    name,
    check_in,
    check_out,
    occupancy,
  }: PatchReserveHotelParams) => {
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/reserved`, {
        name,
        check_in,
        check_out,
        occupancy,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const queryClient = useQueryClient();
  return useMutation(fetch, {
    onSuccess: () => queryClient.invalidateQueries(['reserved']),
  });
};

export const fetchReserveHotels = async ({ pageParam = 1 }) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/reserved?_page=${pageParam}&_limit=10`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
