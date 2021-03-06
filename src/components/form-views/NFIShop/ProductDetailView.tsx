import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { GlobalContext } from "../../../GlobaContext";
import { Product } from "../../../Types";
import I18n from "../../I18n";
import { getLocalizedProductDetailsForCurrentLanguageOrForEnglish } from "./helpers";

interface ProductDetaiViewProps {
  productsForType: Product[];
  onClose: () => void;
}
const ProductDetailView = ({
  onClose,
  productsForType,
}:
ProductDetaiViewProps) => {
  const { currentLanguage } = React.useContext(GlobalContext);

  const localizedProductType =
    getLocalizedProductDetailsForCurrentLanguageOrForEnglish(
      productsForType[0],
      currentLanguage.id
    ).productType;

  const productsForTypeGroupedByGender = productsForType.reduce(
    (acc, product) => ({
      ...acc,
      [product.gender]: [...(acc[product.gender] || []), product],
    }),
    {} as { [key: string]: Array<Product> }
  );
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{localizedProductType}</ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <Accordion defaultIndex={0} allowMultiple>
            {Object.keys(productsForTypeGroupedByGender).map((genderId) => {
              const productsForTypeAndGender =
                productsForTypeGroupedByGender[genderId];
              return (
                <AccordionItem key={genderId}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <I18n k={`basics.${genderId}`} />
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {productsForTypeAndGender.map((product, i) => {
                      const localizedProductDetails =
                        getLocalizedProductDetailsForCurrentLanguageOrForEnglish(
                          product,
                          currentLanguage.id
                        );
                      return <p key={i}> {localizedProductDetails.size} </p>;
                    })}
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductDetailView;
