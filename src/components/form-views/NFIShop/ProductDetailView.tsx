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
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GlobalContext } from "../../../GlobaContext";
import { Product, ProductOrder } from "../../../Types";
import I18n from "../../I18n";
import { getLocalizedProductDetailsForCurrentLanguageOrForEnglish } from "./helpers";

interface ProductDetaiViewProps {
  //   productType: string;
  productsForType: Product[];
  // onAddToCart: (productOrders: ProductOrder[]) => void;
  onClose: () => void;
  // isOpen: boolean;
}
const ProductDetailView = ({
  // isOpen,
  onClose,
  productsForType,
}: // onAddToCart,
ProductDetaiViewProps) => {
  const { currentLanguage } = React.useContext(GlobalContext);

  const productsForTypeGroupedByGender = productsForType.reduce(
    (acc, product) => {
      const FOO = {
        ...acc,
        [product.gender]: [...(acc[product.gender] || []), product],
      };

      //   FOO[product.gender] = [product]

      return FOO;
      //   return acc
    },
    {} as { [key: string]: Array<Product> }
  );
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <p>
            {JSON.stringify(productsForTypeGroupedByGender)}
        </p>
      PRODUCT DETAIL VIEW FOR PRODUCT TYPE {productsForType[0]?.productType} */}
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          {Object.keys(productsForTypeGroupedByGender).map((genderId) => {
            const productsForTypeAndGender =
              productsForTypeGroupedByGender[genderId];
            return (
              <div key={genderId}>
                <h3>
                  <I18n k={`basics.${genderId}`} />
                </h3>
                {productsForTypeAndGender.map((product, i) => {
                  const localizedProductDetails =
                    getLocalizedProductDetailsForCurrentLanguageOrForEnglish(
                      product,
                      currentLanguage.id
                    );
                  return <p key={i}> {localizedProductDetails.size} </p>;
                })}
              </div>
            );
          })}
          <button onClick={onClose}>Add to cart</button>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductDetailView;
