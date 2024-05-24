import { Container, VStack, Heading, Text, Button, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaChartLine, FaPiggyBank, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="xl">
            FinancePro
          </Heading>
          <HStack spacing={4}>
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">Contact</Button>
          </HStack>
        </HStack>

        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="2xl">
            Take Control of Your Financial Future
          </Heading>
          <Text fontSize="lg">Join thousands of others who are managing their finances better with FinancePro.</Text>
          <Button colorScheme="red" size="lg">
            Get Started
          </Button>
        </VStack>

        <HStack spacing={8} justifyContent="center">
          <VStack>
            <IconButton aria-label="Investments" icon={<FaChartLine />} size="lg" isRound />
            <Text>Smart Investments</Text>
          </VStack>
          <VStack>
            <IconButton aria-label="Savings" icon={<FaPiggyBank />} size="lg" isRound />
            <Text>Secure Savings</Text>
          </VStack>
          <VStack>
            <IconButton aria-label="Growth" icon={<FaRocket />} size="lg" isRound />
            <Text>Exponential Growth</Text>
          </VStack>
        </HStack>

        <VStack spacing={4} textAlign="center">
          <Heading as="h3" size="lg">
            Why Choose FinancePro?
          </Heading>
          <Text>We provide the best tools and resources to help you achieve your financial goals.</Text>
          <Image src="https://images.unsplash.com/photo-1604014237744-1b3b2b1b1b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZ3xlbnwwfHx8fDE3MTY1MzMxNTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Financial Planning" borderRadius="md" />
        </VStack>

        <VStack spacing={4} textAlign="center">
          <Heading as="h3" size="lg">
            Testimonials
          </Heading>
          <Text>"FinancePro has completely transformed the way I manage my money. Highly recommend!" - Jane Doe</Text>
          <Text>"Thanks to FinancePro, I am now on track to retire early!" - John Smith</Text>
        </VStack>

        <VStack spacing={4} textAlign="center">
          <Heading as="h3" size="lg">
            Get In Touch
          </Heading>
          <Text>If you have any questions, feel free to contact us at support@financepro.com</Text>
          <Button colorScheme="red" size="lg">
            Contact Us
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
