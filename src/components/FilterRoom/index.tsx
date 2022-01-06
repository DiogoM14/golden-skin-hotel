import { useEffect, useState } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Divider,
  Spacer,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";
import { RangeSliderComponent } from "./RangeSlider";
import { StepperButtons } from "./StepperButtons";
import { CheckboxList } from "./CheckboxList";
import { useRouter } from "next/router";
import { ReservationDates } from "./ReservationDates";

export const FilterRoomsBtn = ({ filter }: any) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [priceRange, setPriceRange] = useState({ priceGT: 0, priceLT: 500 });
  const [capacity, setCapacity] = useState({ capacityGT: 1 });
  const [beds, setBeds] = useState({ no_bedsGT: 1 });
  const [amenities, setAmenities] = useState({});
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();

  useEffect(() => {
    if (filter) {
      let { priceGT, priceLT, checkIn, checkOut, amenities } = filter;
      setPriceRange(priceGT && { priceGT, priceLT });
      setCapacity(filter.capacityGT);
      setBeds(filter.no_bedsGT);
      setAmenities(amenities && { amenities });
      setCheckIn(checkIn && checkIn);
      setCheckOut(checkOut && checkOut);
    }
  }, [filter]);

  const submitFilters = () => {
    if (filter.page) {
      filter.page = 1;
    }
    if (checkIn && checkOut) {
      if (checkIn > checkOut) {
        toast({
          title: "Check-in date must be before check-out date",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
    router.push({
      pathname: "/rooms",
      query: {
        ...filter,
        ...priceRange,
        ...capacity,
        ...beds,
        ...amenities,
        checkIn,
        checkOut,
      },
    });
    onClose();
  };

  return (
    <>
      <Button
        w={["100%", "100%", "100%", "auto"]}
        bgColor='#EFEFEF'
        color='#1c1c1c'
        fontWeight='regular'
        rightIcon={<FiFilter />}
        onClick={onOpen}>
        Filtrar
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filtrar por</DrawerHeader>

          <DrawerBody>
            <Flex>
              <StepperButtons
                title='Pessoas'
                value={capacity && capacity.capacityGT}
                defaultValue={1}
                min={1}
                handleStepperChange={(value: any) => {
                  setCapacity({ capacityGT: value });
                }}
              />
              <Spacer />
              <StepperButtons
                title='Camas'
                value={beds && beds.no_bedsGT}
                defaultValue={1}
                min={1}
                handleStepperChange={(value: any) => {
                  setBeds({ no_bedsGT: value });
                }}
              />
            </Flex>

            <Divider my='4' />

            <RangeSliderComponent
              {...(priceRange
                ? { value: [priceRange.priceGT, priceRange.priceLT] }
                : {})}
              handleChangeSliderValue={(values: any) =>
                setPriceRange({ priceGT: values[0], priceLT: values[1] })
              }
            />

            <Divider my='4' />

            <CheckboxList
              {...(amenities ? { values: amenities } : {})}
              handleAmntChange={(values: any) => {
                setAmenities({ amenities: values.join(",") });
              }}
            />

            <Divider my='4' />

            <ReservationDates
              checkIn={checkIn}
              checkOut={checkOut}
              handleDateChanges={(date: any) => {
                if (date.isCheckIn) {
                  setCheckIn(date.date);
                }
                if (!date.isCheckIn) {
                  setCheckOut(date.date);
                }
              }}
            />
          </DrawerBody>

          <DrawerFooter>
            <Button
              bgColor='#F2BB05'
              color='#fff'
              _hover={{ bgColor: "#e0ae09" }}
              onClick={submitFilters}>
              Concluir
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
