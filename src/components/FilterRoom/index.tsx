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
  Heading,
  Divider,
  HStack,
  Tag,
  TagLabel,
  Spacer,
} from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";
import { RangeSliderComponent } from "./RangeSlider";
import { StepperButtons } from "./StepperButtons";
import { CheckboxList } from "./CheckboxList";
import { useRouter } from "next/router";

export const FilterRoomsBtn = ({ filter }: any) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [priceRange, setPriceRange] = useState({ priceGT: 0, priceLT: 500 });
  const [capacity, setCapacity] = useState({ capacityGT: 1 });
  const [beds, setBeds] = useState({ no_bedsGT: 1 });
  const [amenities, setAmenities] = useState({});

  useEffect(() => {
    if (filter) {
      let { priceGT, priceLT, amenities } = filter;
      setPriceRange(priceGT && { priceGT, priceLT });
      setCapacity(filter.capacityGT);
      setBeds(filter.no_bedsGT);
      setAmenities(amenities && { amenities });
    }
  }, [filter]);

  const submitFilters = () => {
    router.push({
      pathname: "/rooms",
      query: { ...filter, ...priceRange, ...capacity, ...beds, ...amenities },
    });
    onClose();
  };

  return (
    <>
      <Button
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
            <HStack spacing={8}>
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
            </HStack>

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

            {/* <Heading fontSize='md' mb='4'>
              Tags
            </Heading>
            <HStack spacing={4}>
              Vai levar map
              <Tag variant='subtle' colorScheme='cyan'>
                <TagLabel>Cyan</TagLabel>
              </Tag>
              <Tag variant='subtle' colorScheme='cyan'>
                <TagLabel>Cyan</TagLabel>
              </Tag>
              <Tag variant='subtle' colorScheme='cyan'>
                <TagLabel>Cyan</TagLabel>
              </Tag>
              <Tag variant='subtle' colorScheme='cyan'>
                <TagLabel>Cyan</TagLabel>
              </Tag>
            </HStack>

            <Divider my='4' /> */}

            <CheckboxList
              {...(amenities ? { values: amenities } : {})}
              handleAmntChange={(values: any) => {
                setAmenities({ amenities: values.join(",") });
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
