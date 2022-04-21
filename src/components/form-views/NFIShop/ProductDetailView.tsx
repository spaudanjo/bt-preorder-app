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

  const localizedProductType = getLocalizedProductDetailsForCurrentLanguageOrForEnglish(productsForType[0], currentLanguage.id).productType

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
          {/* <p>
            {JSON.stringify(productsForTypeGroupedByGender)}
        </p>
      PRODUCT DETAIL VIEW FOR PRODUCT TYPE {productsForType[0]?.productType} */}
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

          <button onClick={onClose}>Add to cart</button>
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
