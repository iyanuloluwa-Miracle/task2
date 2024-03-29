import { SimpleGrid, Stack, useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Button} from '@chakra-ui/react';
import Card from './ACard';
// import Button from './button';
import Form from './containers/Form';

export default function ArticleCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack px={4} w={'full'}>
      <Box px={{ base: '4px', md: '18px'}}>
        <Button 
          bg="orange.700" color="white" 
          onClick={onOpen}
          size="md" 
          _hover={{
            bg: "orange.600"
          }}
        >
          Upload
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form />
          </ModalBody>
        </ModalContent>
      </Modal>
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} gap={4}>
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Stack>
  );
}