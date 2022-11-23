import {
  Box,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";

type ServiceUser = {
  id: number;
  uid: string;
  name: string;
  surname: string;
  dateOfBirth: Date | null;
  createdAt: Date;
  movedIn: Date | null;
  updatedAt: Date;
  conditions: string[];
};

type PageProps = {
  serviceUsers: ServiceUser[];
};

const ServiceUsers: NextPage<PageProps> = ({ serviceUsers }) => {
  console.log(serviceUsers[0]);

  return (
    <Layout>
      <Flex flexDirection="column">
        <Heading>Service Users</Heading>
        <TableContainer overflowY="auto">
          <Table variant="striped" colorScheme="teal" size="sm">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Surname</Th>
              </Tr>
            </Thead>
            <Tbody>
              {serviceUsers?.map(
                (serviceUser: ServiceUser, serviceUserIndex: number) => (
                  <Tr key={serviceUserIndex}>
                    <Td>{serviceUser.id}</Td>
                    <Td>{serviceUser.name}</Td>
                    <Td>{serviceUser.surname}</Td>
                  </Tr>
                )
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Layout>
  );
};

export default ServiceUsers;

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.API_ENDPOINT as string}/service-user`
  );
  const data = await response.json();

  return {
    props: {
      serviceUsers: data,
    },
  };
}
