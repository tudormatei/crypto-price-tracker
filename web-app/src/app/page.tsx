"use client";

import { useState } from "react";
import useCrypto from "@/hooks/useCrypto";
import Button from "@/components/Button/Button";
import InputField from "@/components/InputField/InputField";
import { Container, Description, Error, Header, List } from "./page.styled";
import Table from "@/components/Table/Table";

export default function Home() {
  const { data, error, isLoading, refetch } = useCrypto();

  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  const filteredData = data?.filter((coin) =>
    coin.name
      .toLowerCase()
      .includes(searchQuery ? searchQuery.toLowerCase() : "")
  );

  return (
    <Container>
      <List>
        <Header>Crypto Price Tracker</Header>
        <Description>Thank you BlockHouse!</Description>
        <InputField
          type="text"
          placeholder="Search crypto currency name..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {error && (
          <Error>Failed to retreive coin data. Please try again later.</Error>
        )}

        <Button loading={isLoading} onClick={() => refetch()}>
          Refresh
        </Button>

        <Table entries={filteredData ?? []} headers={["Name", "Price (USD)"]} />
      </List>
    </Container>
  );
}
